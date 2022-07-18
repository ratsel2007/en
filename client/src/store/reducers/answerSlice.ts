import {AnswerModel} from '../../../../server/src/answer/answer.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks/redux';

interface AnswerState {
    answers: AnswerModel[] | null;
    answerByTeam: AnswerModel[] | null;
}

const initialState: AnswerState = {
    answers: [],
    answerByTeam: [],
};

export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        getAllAnswers(state, {payload}: PayloadAction<AnswerModel[]>) {
            state.answers = payload;
        },
        getAnswersByTeam(state, {payload}: PayloadAction<AnswerModel[]>) {
            state.answerByTeam = payload;
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
