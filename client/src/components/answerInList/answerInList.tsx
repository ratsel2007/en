import * as React from 'react';
import {FC} from 'react';
import {AnswerModel} from '../../../../server/src/answer/answer.model';
import {useAuthState} from '../../store/reducers/authSlice';

interface AnswerInListProps {
    answerData: AnswerModel;
}

export const AnswerInList: FC<AnswerInListProps> = ({answerData}) => {
    const {user, answer, right} = answerData;
    const {authUser} = useAuthState();

    return (
        <div className={right ? 'green' : 'red'}>
            {user} ({authUser.team.title}) - {answer}
        </div>
    );
};
