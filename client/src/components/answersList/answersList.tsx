import * as React from 'react';
import {FC, useEffect} from 'react';
import {Types} from 'mongoose';

import {AnswerInList} from '../answerInList/answerInList';

import {useAnswerState} from '../../store/reducers/answerSlice';
import {useAppDispatch} from '../../hooks/redux';
import {useAuthState} from '../../store/reducers/authSlice';
import {fetchAnswersByTeamAndTask} from '../../store/action-creators/answer-actions';

interface AnswersListProps {
    taskId: Types.ObjectId;
}

export const AnswersList: FC<AnswersListProps> = ({taskId}) => {
    const dispatch = useAppDispatch();
    const {answerByTeamAndTask} = useAnswerState();
    const {authUser} = useAuthState();

    useEffect(() => {
        dispatch(fetchAnswersByTeamAndTask(authUser.team._id, taskId));
    }, []);

    setTimeout(() => {
        dispatch(fetchAnswersByTeamAndTask(authUser.team._id, taskId));
    }, 3000);

    return (
        <>
            {answerByTeamAndTask &&
                answerByTeamAndTask.map((answer, index) => {
                    return <AnswerInList key={index} answerData={answer} />;
                })}
        </>
    );
};
