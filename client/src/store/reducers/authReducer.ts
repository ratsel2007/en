import {AuthAction, AuthActionTypes, AuthState} from '../types/auth';
import {UserModel} from '../../../../server/src/auth/user.model';

const initialState: AuthState = {
    currentUser: {} as UserModel,
    isAuth: false,
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_CURRENT_USER:
            return {...state, currentUser: action.payload};
        case AuthActionTypes.SET_IS_AUTH:
            return {...state, isAuth: action.payload};
        default:
            return state;
    }
};
