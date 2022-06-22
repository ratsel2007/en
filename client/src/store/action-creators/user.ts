import {UserAction, UserActionTypes} from '../types/user';
import {Dispatch} from 'redux';
import axios from 'axios';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        const response = await axios.get('http://localhost:5001/api/auth/');
        dispatch({type: UserActionTypes.FETCH_USERS, payload: response.data});
    };
};