import * as React from 'react';
import {useAuthState} from '../../store/reducers/authSlice';
import {useTeamState} from '../../store/reducers/teamSlice';
import {useAppDispatch} from '../../hooks/redux';
import {FC, useEffect} from 'react';
import {getTeamById} from '../../store/action-creators/team';
import {useTaskState} from '../../store/reducers/taskSlice';
import {Header} from '../common/header/header';
import {TaskInGame} from '../task/taskInGame';

export const GameDashboard: FC = () => {
    const dispatch = useAppDispatch();
    const {authUser} = useAuthState();
    const {currentTeam} = useTeamState();
    const {tasks} = useTaskState();

    useEffect(() => {
        if (authUser) {
            dispatch(getTeamById(authUser.team._id));
        }
    }, [authUser]);

    const isReady = currentTeam !== null && tasks.length;

    if (!isReady || !authUser) {
        return <h1>Загрузка данных</h1>;
    }

    return (
        <>
            <Header />
            {isReady && <TaskInGame task={tasks[currentTeam.progressInGame]} />}
        </>
    );
};
