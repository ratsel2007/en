import {AppDispatch} from '../store';
import axios from 'axios';
import {TEAMS_URL} from '../constants';
import {useTeamActions} from '../reducers/teamSlice';

const {setCurrentTeam} = useTeamActions();

export const getTeamByTitle = (title: string) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(TEAMS_URL + `?title=${title}`);

        dispatch(setCurrentTeam(data));
    };
};
