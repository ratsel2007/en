import {TaskModel} from '../../../../server/src/task/task.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks/redux';
import {Types} from 'mongoose';

export interface TaskState {
    tasks: TaskModel[];
}
export interface EditTaskPayload {
    id: Types.ObjectId;
    data: TaskModel;
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
        setNewTask(state, {payload: task}: PayloadAction<TaskModel>) {
            state.tasks.push(task);
        },
        setEditTask(state, {payload}: PayloadAction<EditTaskPayload>) {
            const {id, data} = payload;
            const foundIndex = state.tasks.findIndex((task) => task._id == id);
            state.tasks[foundIndex] = data;
        },
        setDeleteTask(state, {payload: id}: PayloadAction<Types.ObjectId>) {
            state.tasks = state.tasks.filter((task) => task._id !== id);
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
