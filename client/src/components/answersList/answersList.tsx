import * as React from 'react';
import {FC, useEffect} from 'react';

import {useAnswerState} from '../../store/reducers/answerSlice';
import {useAppDispatch} from '../../hooks/redux';
import {fetchAnswersByTeamAndTask} from '../../store/action-creators/answer-actions';
import {useAuthState} from '../../store/reducers/authSlice';
import {AnswerInList} from '../answerInList/answerInList';

interface AnswersListProps {
    taskId: string;
}

export const AnswersList: FC<AnswersListProps> = ({taskId}) => {
    const dispatch = useAppDispatch();
    const {answerByTeamAndTask} = useAnswerState();
    const {authUser} = useAuthState();

    useEffect(() => {
        dispatch(fetchAnswersByTeamAndTask(authUser.team.stuffTitle, taskId));
    }, []);

    return (
        <>
            {answerByTeamAndTask &&
                answerByTeamAndTask.map((answer, index) => {
                    return <AnswerInList key={index} answerData={answer} />;
                })}
        </>
    );
};
