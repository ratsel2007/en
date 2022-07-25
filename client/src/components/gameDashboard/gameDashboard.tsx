import * as React from 'react';
import {useAuthState} from '../../store/reducers/authSlice';
import {useAppDispatch} from '../../hooks/redux';
import {FC} from 'react';

import {useTaskState} from '../../store/reducers/taskSlice';
import {Header} from '../common/header/header';
import {TaskInGame} from '../task/taskInGame';
import {patchTeamProgress} from '../../store/action-creators/team';

export const GameDashboard: FC = () => {
    const dispatch = useAppDispatch();
    const {authUser} = useAuthState();

    const {tasks} = useTaskState();

    const teamProgress = authUser?.team.progressInGame;

    if (!authUser && tasks.length) {
        return <h1>Загрузка данных</h1>;
    }

    setInterval(() => {
        if (authUser) {
            dispatch(patchTeamProgress(authUser.team._id, authUser.team.progressInGame));
        }
    }, 3000);

    return (
        <>
            <Header />
            <TaskInGame task={tasks[teamProgress]} />
        </>
    );
};
