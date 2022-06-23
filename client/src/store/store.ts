import thunk from 'redux-thunk';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userReducer} from './reducers/userReducer';

const reducer = combineReducers({
    user: userReducer,
});

const middleware = [thunk];

export const store = configureStore({
    reducer,
    middleware,
});

export type RootState = ReturnType<typeof reducer>;
// export type AppDispatch = typeof store.dispatch;
