import * as React from 'react';
import {FC} from 'react';
import {AnswerModel} from '../../../../server/src/answer/answer.model';

interface AnswerInListProps {
    answerData: AnswerModel;
}

export const AnswerInList: FC<AnswerInListProps> = ({answerData}) => {
    const {user, teamTitle, answer, right} = answerData;
    return (
        <div className={right ? 'green' : 'red'}>
            {user} ({teamTitle}) - {answer}
        </div>
    );
};
