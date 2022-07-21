import {AppDispatch} from '../store';
import axios from 'axios';
import {ANSWER_URL, TEAMS_URL} from '../constants';
import {CreateAnswerDto} from '../../../../server/src/answer/dto/answer.dto';
import {useAnswerActions} from '../reducers/answerSlice';

const {getAnswersByTeamAndTask} = useAnswerActions();

export const fetchAnswersByTeamAndTask = (teamTitle: string, taskId: string) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(ANSWER_URL + 'abt/?team=' + teamTitle + '&task=' + taskId);

        dispatch(getAnswersByTeamAndTask(data));
    };
};

export const checkAnswer = (candidateAnswer) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.patch(TEAMS_URL, candidateAnswer);

        dispatch(fetchAnswersByTeamAndTask(data.team.stuffTitle, data.taskId));

        return data;
    };
};

export const postNewAnswer = (answer: CreateAnswerDto) => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.post(ANSWER_URL, answer);

        return data;
    };
};

export const editAnswerToRight = (id: string) => {
    return async (dispatch: AppDispatch) => {
        await axios.patch(ANSWER_URL + id, {right: true});
    };
};
