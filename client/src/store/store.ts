import thunk from 'redux-thunk';
import {configureStore} from "@reduxjs/toolkit";

const reducer = {};

const middleware = [thunk];

export const store = configureStore({
    reducer,
    middleware,
});


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
