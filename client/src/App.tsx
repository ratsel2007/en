import * as React from 'react';
import {useTypedSelector} from './hooks/useTypedSelector';
import {useEffect} from 'react';
import {fetchUsers} from './store/action-creators/user';
import {useActions} from './hooks/useActions';

export function App() {
    const {users} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    return <div>Test</div>;
}

