import thunk from 'redux-thunk';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userReducer} from './reducers/userReducer';
import {authReducer} from './reducers/authReducer';

const reducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

const middleware = [thunk];

export const store = configureStore({
    reducer,
    middleware,
});

export type RootState = ReturnType<typeof reducer>;
