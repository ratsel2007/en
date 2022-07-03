import * as React from 'react';
import {useEffect} from 'react';

import {Main} from './components/main/main';
import {LoginPage} from './components/login/loginPage';
import {AddNewGame} from './components/addNewGame/addNewGame';
import {PageNotFound} from './components/pageNotFound/pageNotFound';

import {useAppDispatch} from './hooks/redux';
import {reLogin} from './store/action-creators/auth';
import {Routes, Route} from 'react-router-dom';
import {getUserLocalData} from './helper/userLocaData';
import {RequireAuthorStatus} from './hoc/RequireAuthorStatus';
import {AddTaskForGame} from './components/addTaskForGame/addTaskForGame';
import {fetchNextGame} from './store/action-creators/game';

export function App() {
    const dispatch = useAppDispatch();

    const token = getUserLocalData();

    useEffect(() => {
        if (token) {
            dispatch(reLogin(token));
        }
    }, [token]);

    useEffect(() => {
        dispatch(fetchNextGame());
    }, []);

    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<LoginPage />} />
                <Route
                    path='/add-game'
                    element={
                        <RequireAuthorStatus>
                            <AddNewGame />
                        </RequireAuthorStatus>
                    }
                />
                <Route
                    path='/add-tasks'
                    element={
                        <RequireAuthorStatus>
                            <AddTaskForGame />
                        </RequireAuthorStatus>
                    }
                />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
}
