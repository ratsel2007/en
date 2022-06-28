import * as React from 'react';
import {useAppSelector} from '../hooks/redux';

export const RequireAuthorStatus = ({children}) => {
    const {authUser} = useAppSelector((state) => state.auth);

    if (!authUser?.author) {
        return <h1>Доступно только для авторов игр</h1>;
    }

    return children;
};
