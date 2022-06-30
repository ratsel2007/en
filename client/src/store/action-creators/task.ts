import {AppDispatch} from '../store';
import axios from 'axios';
import {TASKS_URL} from '../constants';
import {useTaskActions} from '../reducers/taskSlice';
import {CreateTaskDto, PatchTaskDto} from '../../../../server/src/task/dto/task.dto';

const {setTasks, setNewTask, setEditTask} = useTaskActions();

export const getAllTasks = () => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(TASKS_URL);

        dispatch(setTasks(data));
    };
};

export const createNewTask = (dto: CreateTaskDto) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.post(TASKS_URL, dto);

        dispatch(setNewTask(data));
    };
};

export const editTask = (id: string, dto: PatchTaskDto) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.patch(TASKS_URL + id, dto);

        dispatch(setEditTask({id, data}));
    };
};

export const deleteTask = (id: string) => {
    return async (dispatch: AppDispatch) => {
        await axios.delete(TASKS_URL, {data: id});
    };
};
