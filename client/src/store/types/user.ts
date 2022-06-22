import {UserModel} from '../../../../server/src/auth/user.model';

export interface UserState {
    users: UserModel[];
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
    payload?: any[];
}

export type UserAction = FetchUserAction;