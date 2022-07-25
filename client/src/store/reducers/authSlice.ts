import {UserModel} from '../../../../server/src/auth/user.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks/redux';
import {TeamModel} from '../../../../server/src/team/team.model';

interface AuthState {
    authUser: (UserModel & {team: TeamModel}) | null;
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
        setAuthUser(state, {payload: user}: PayloadAction<UserModel & {team: TeamModel}>) {
            state.authUser = user;
        },
        toggleIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        editAuthUserTeamData(state, {payload: progress}: PayloadAction<number>) {
            state.authUser.team.progressInGame = progress;
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
