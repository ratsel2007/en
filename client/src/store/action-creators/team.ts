import {AppDispatch} from '../store';
import axios from 'axios';
import {TEAMS_URL} from '../constants';
import {useTeamActions} from '../reducers/teamSlice';
import {Types} from 'mongoose';

const {setCurrentTeam} = useTeamActions();

export const getTeamById = (id: Types.ObjectId) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(TEAMS_URL + `/${id}`);

        dispatch(setCurrentTeam(data));
    };
};
