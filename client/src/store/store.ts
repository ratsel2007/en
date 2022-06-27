import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthReducer from './reducers/authSlice';

const reducer = combineReducers({
    auth: AuthReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer,
    });
};

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
