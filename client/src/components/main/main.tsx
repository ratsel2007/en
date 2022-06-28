import * as React from 'react';
import {Header} from '../common/header/header';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/redux';
import {fetchNextGame} from '../../store/action-creators/game';
import {MainDashboard} from '../mainDashboard/mainDashboard';

export const Main = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNextGame());
    }, []);

    return (
        <>
            <Header />
            <MainDashboard />
        </>
    );
};
