import * as React from 'react';
import {useEffect} from 'react';
import {useActions} from './hooks/useActions';
import {Routes, Route} from 'react-router-dom';
import {Main} from './components/main/main';
import {LoginPage} from './components/login/loginPage';
import {AddNewGame} from './components/addNewGame/addNewGame';
import {PageNotFound} from './components/pageNotFound/pageNotFound';

export function App() {
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/add-game' element={<AddNewGame />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
}
