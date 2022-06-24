import {Dispatch} from 'redux';
import {AuthAction, AuthActionTypes} from '../types/auth';
import {AuthDto} from '../../../../server/src/auth/dto/auth.dto';
import axios from 'axios';

export const login = (authData: AuthDto) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        const response = await axios.post('http://localhost:5001/api/auth/login', authData);

        dispatch({type: AuthActionTypes.SET_CURRENT_USER, payload: response.data.user});
        dispatch({type: AuthActionTypes.SET_IS_AUTH, payload: true});
    };
};
