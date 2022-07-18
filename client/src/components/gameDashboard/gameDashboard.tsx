import * as React from 'react';
import {useAuthState} from '../../store/reducers/authSlice';
import {useTeamState} from '../../store/reducers/teamSlice';
import {useAppDispatch} from '../../hooks/redux';
import {useEffect} from 'react';
import {getTeamByTitle} from '../../store/action-creators/team';
import {useTaskState} from '../../store/reducers/taskSlice';
import {Header} from '../common/header/header';
import {TaskInGame} from '../task/taskInGame';
import {getAllTasks} from '../../store/action-creators/task';

export const GameDashboard = () => {
    const dispatch = useAppDispatch();
    const {authUser} = useAuthState();
    const {currentTeam} = useTeamState();
    const {tasks} = useTaskState();

    useEffect(() => {
        dispatch(getTeamByTitle(authUser?.team));
        dispatch(getAllTasks());
    }, [authUser?.team]);

    const isReady = currentTeam !== null && tasks.length;

    return (
        <>
            <Header />
            {isReady && <TaskInGame task={tasks[currentTeam.progressInGame]} />}
        </>
    );
};
