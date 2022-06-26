import * as React from 'react';
import {Navigate, useLocation} from 'react-router';
import {useTypedSelector} from '../hooks/useTypedSelector';

export const RequireAuth = ({children}) => {
    const location = useLocation();
    const {isAuth} = useTypedSelector((state) => state.auth);

    if (!isAuth) {
        return <Navigate to='/login' state={{from: location}} />;
    }

    return children;
};
