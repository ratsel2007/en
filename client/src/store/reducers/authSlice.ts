import {UserModel} from '../../../../server/src/auth/user.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks/redux';

interface AuthState {
    authUser: UserModel | null;
    isAuth: boolean;
}

const initialState: AuthState = {
    authUser: null,
    isAuth: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser(state, {payload: user}: PayloadAction<UserModel>) {
            state.authUser = user;
        },
        toggleIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
    },
});

export default authSlice.reducer;

export const useAuthActions = () => {
    return authSlice.actions;
};

export const useAuthState = () => {
    return useAppSelector((state) => state.auth);
};
