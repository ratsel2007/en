import * as React from 'react';
import {FC, useState} from 'react';
import {EditTaskForm} from '../common/forms/editTaskForm';

import {TaskModel} from '../../../../server/src/task/task.model';

import {useAuthState} from '../../store/reducers/authSlice';
import {useGameState} from '../../store/reducers/gameSlice';
import {TaskViewMode} from '../taskViewMode/taskViewMode';

type TaskProps = {
    task: TaskModel;
};

export const TaskInGame: FC<TaskProps> = ({task}) => {
    const {nextGame} = useGameState();
    const {authUser} = useAuthState();

    const [editMode, setEditMode] = useState<boolean>(false);

    const changeEditMode = () => {
        setEditMode(!editMode);
    };

    if (!task || nextGame === null) {
        return <h1>Загрузка данных...</h1>;
    }

    const isAuthor = nextGame[0]?.gameAuthor === authUser?.name;

    return (
        <>
            {!editMode && <TaskViewMode task={task} isAuthor={isAuthor} changeEditMode={changeEditMode} />}
            {editMode && isAuthor && <EditTaskForm task={task} changeEditMode={changeEditMode} />}
        </>
    );
};
