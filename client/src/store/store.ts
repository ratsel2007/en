import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthReducer from './reducers/authSlice';
import GameReducer from './reducers/gameSlice';

const reducer = combineReducers({
    auth: AuthReducer,
    game: GameReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer,
    });
};

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
