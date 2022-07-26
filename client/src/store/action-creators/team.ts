import {AppDispatch} from '../store';
import axios from 'axios';
import {TEAMS_URL} from '../constants';
import {useTeamActions} from '../reducers/teamSlice';
import {Types} from 'mongoose';
import {useAuthActions} from '../reducers/authSlice';

const {setCurrentTeam} = useTeamActions();
const {editAuthUserTeamData} = useAuthActions();

export const getTeamById = (id: Types.ObjectId) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(TEAMS_URL + `/${id}`);

        dispatch(setCurrentTeam(data));
    };
};

export const patchTeamProgress = (id: string | Types.ObjectId, progress: number) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(TEAMS_URL + `/${id}/ctp?progress=${progress}`);

        if (data) {
            dispatch(editAuthUserTeamData(progress + 1));
        }
    };
};

export const patchAllProgressToNull = () => {
    return async () => {
        await axios.patch(TEAMS_URL + '/teams-to-null');
    };
};
