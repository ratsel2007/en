import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TeamModel} from '../../../../server/src/team/team.model';
import {useAppSelector} from '../../hooks/redux';

interface TeamState {
    allTeams: TeamModel[];
    currentTeam: TeamModel | null;
}

const initialState: TeamState = {
    allTeams: [],
    currentTeam: null,
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setCurrentTeam(state, {payload: team}: PayloadAction<TeamModel>) {
            state.currentTeam = team;
        },
    },
});

export default teamSlice.reducer;

export const useTeamActions = () => {
    return teamSlice.actions;
};

export const useTeamState = () => {
    return useAppSelector((state) => state.team);
};
