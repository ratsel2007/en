import {AuthDto} from '../../../../server/src/auth/dto/auth.dto';
import axios from 'axios';
import {removeUserLocalData, setUserLocalData} from '../../helper/userLocaData';
import {useAuthActions} from '../reducers/authSlice';
import {AppDispatch} from '../store';
import {USER_LOGIN_URL, USER_RELOGIN_URL} from '../constants';

const {setAuthUser, toggleIsAuth} = useAuthActions();

export const login = (authData: AuthDto) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.post(USER_LOGIN_URL, authData);

        dispatch(setAuthUser(data.user));
        dispatch(toggleIsAuth(true));

        setUserLocalData(data.access_token);
    };
};

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(setAuthUser(null));
        dispatch(toggleIsAuth(false));

        removeUserLocalData();
    };
};

export const reLogin = (token: string) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.post(USER_RELOGIN_URL, {token});

        dispatch(setAuthUser(data));
        dispatch(toggleIsAuth(true));
    };
};
