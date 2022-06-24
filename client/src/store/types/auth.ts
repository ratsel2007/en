import {UserModel} from '../../../../server/src/auth/user.model';

export interface AuthState {
    currentUser: UserModel;
    isAuth: boolean;
}

export enum AuthActionTypes {
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    SET_IS_AUTH = 'SET_IS_AUTH',
}

interface SetUserAction {
    type: AuthActionTypes.SET_CURRENT_USER;
    payload: UserModel;
}

interface SetIsAuthAction {
    type: AuthActionTypes.SET_IS_AUTH;
    payload: boolean;
}

export type AuthAction = SetUserAction | SetIsAuthAction;
