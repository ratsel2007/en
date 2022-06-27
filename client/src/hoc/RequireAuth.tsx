import * as React from 'react';
import {useAppSelector} from '../hooks/redux';
import {Navigate, useLocation} from 'react-router';

export const RequireAuth = ({children}) => {
    const location = useLocation();
    const {isAuth} = useAppSelector((state) => state.auth);

    if (!isAuth) {
        return <Navigate to='/login' state={{from: location}} />;
    }

    return children;
};
