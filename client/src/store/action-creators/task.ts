import {AppDispatch} from '../store';
import axios from 'axios';
import {GET_ALL_TASKS_URL} from '../constants';
import {useTaskActions} from '../reducers/taskSlice';

const {setTasks} = useTaskActions();

export const getAllTasks = () => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(GET_ALL_TASKS_URL);

        dispatch(setTasks(data));
    };
};
