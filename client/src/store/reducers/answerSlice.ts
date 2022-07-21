import {AnswerModel} from '../../../../server/src/answer/answer.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks/redux';

interface AnswerState {
    answers: AnswerModel[] | null;
    answerByTeamAndTask: AnswerModel[] | null;
}

const initialState: AnswerState = {
    answers: [],
    answerByTeamAndTask: [],
};

export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        getAllAnswers(state, {payload}: PayloadAction<AnswerModel[]>) {
            state.answers = payload;
        },
        getAnswersByTeamAndTask(state, {payload}: PayloadAction<AnswerModel[]>) {
            state.answerByTeamAndTask = payload;
        },
        setNewAnswer(state, {payload}: PayloadAction<AnswerModel>) {
            state.answers.push(payload);
        },
    },
});

export default answerSlice.reducer;

export const useAnswerActions = () => {
    return answerSlice.actions;
};

export const useAnswerState = () => {
    return useAppSelector((state) => state.answer);
};
