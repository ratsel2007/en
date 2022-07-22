import {AppDispatch} from '../store';
import axios from 'axios';
import {ANSWER_URL} from '../constants';
import {CreateAnswerDto} from '../../../../server/src/answer/dto/answer.dto';
import {useAnswerActions} from '../reducers/answerSlice';
import {Types} from 'mongoose';
import {useTeamActions} from '../reducers/teamSlice';

const {setAnswersByTeamAndTask} = useAnswerActions();
const {setCurrentTeam} = useTeamActions();

export const fetchAnswersByTeamAndTask = (teamId: Types.ObjectId, taskId: Types.ObjectId) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(ANSWER_URL + 'abt/?team=' + teamId + '&task=' + taskId);

        dispatch(setAnswersByTeamAndTask(data));
    };
};

export const postAndCheckNewAnswer = (answer: CreateAnswerDto) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.post(ANSWER_URL, answer);

        dispatch(setCurrentTeam(data.team));
        dispatch(setAnswersByTeamAndTask(data.answers));
    };
};
