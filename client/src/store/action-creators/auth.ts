import {Dispatch} from 'redux';
import {AuthAction, AuthActionTypes} from '../types/auth';
import {AuthDto} from '../../../../server/src/auth/dto/auth.dto';
import axios from 'axios';
import {removeUserLocalData, setUserLocalData} from '../../helper/userLocaData';

export const login = (authData: AuthDto) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        const {data} = await axios.post('http://localhost:5001/api/auth/login', authData);

        dispatch({type: AuthActionTypes.SET_CURRENT_USER, payload: data.user});
        dispatch({type: AuthActionTypes.SET_IS_AUTH, payload: true});

        setUserLocalData(data.access_token);
    };
};

export const logout = () => {
    return async (dispatch: Dispatch) => {
        dispatch({type: AuthActionTypes.SET_CURRENT_USER, payload: {}});
        dispatch({type: AuthActionTypes.SET_IS_AUTH, payload: false});

        removeUserLocalData();
    };
};

export const reLogin = (token: string) => {
    return async (dispatch: Dispatch) => {
        const {data} = await axios.post('http://localhost:5001/api/auth/relogin', {token});

        dispatch({type: AuthActionTypes.SET_CURRENT_USER, payload: data});
        dispatch({type: AuthActionTypes.SET_IS_AUTH, payload: true});
    };
};
