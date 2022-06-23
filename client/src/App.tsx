import * as React from 'react';
import {useTypedSelector} from './hooks/useTypedSelector';
import {useEffect} from 'react';
import {useActions} from './hooks/useActions';
import {Routes, Route} from 'react-router-dom';
import {Main} from './components/main/main';
import {Login} from './components/login/login';
import {AddNewGame} from './components/addNewGame/addNewGame';
import {PageNotFound} from './components/pageNotFound/pageNotFound';

export function App() {
    const {users} = useTypedSelector((state) => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/add-game' element={<AddNewGame />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
}
