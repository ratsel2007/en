import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthReducer from './reducers/authSlice';
import GameReducer from './reducers/gameSlice';
import TaskReducer from './reducers/taskSlice';
import ModalReducer from './reducers/modalSlice';

const reducer = combineReducers({
    auth: AuthReducer,
    game: GameReducer,
    task: TaskReducer,
    modal: ModalReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer,
    });
};

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
