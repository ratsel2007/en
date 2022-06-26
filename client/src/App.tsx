import * as React from 'react';
import {useActions} from './hooks/useActions';
import {Routes, Route} from 'react-router-dom';
import {Main} from './components/main/main';
import {LoginPage} from './components/login/loginPage';
import {AddNewGame} from './components/addNewGame/addNewGame';
import {PageNotFound} from './components/pageNotFound/pageNotFound';
import {getUserLocalData} from './helper/userLocaData';
import {useEffect} from 'react';
import {RequireAuth} from './hoc/RequireAuth';

export function App() {
    const {reLogin} = useActions();
    const token = getUserLocalData();

    useEffect(() => {
        if (token) {
            reLogin(token);
        }
    }, [token]);

    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<LoginPage />} />
                <Route
                    path='/add-game'
                    element={
                        <RequireAuth>
                            <AddNewGame />
                        </RequireAuth>
                    }
                />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
}
