import * as UserActionCreators from './user';
import * as AuthActionCreator from './auth';

export const ActionCreators = {
    ...UserActionCreators,
    ...AuthActionCreator,
};
