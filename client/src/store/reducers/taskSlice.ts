import {TaskModel} from '../../../../server/src/task/task.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks/redux';

export interface TaskState {
    tasks: TaskModel[];
}

const initialState: TaskState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTasks(state, {payload: tasks}: PayloadAction<TaskModel[]>) {
            state.tasks = tasks;
        },
    },
});

export default taskSlice.reducer;

export const useTaskActions = () => {
    return taskSlice.actions;
};

export const useTaskState = () => {
    return useAppSelector((state) => state.task);
};
