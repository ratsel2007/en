import {AppDispatch} from '../store';
import axios from 'axios';
import {TEAMS_URL} from '../constants';

export const checkAnswer = (candidateAnswer) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.patch(TEAMS_URL, candidateAnswer);
    };
};
