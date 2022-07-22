import * as React from 'react';
import {FC} from 'react';
import {AnswerModel} from '../../../../server/src/answer/answer.model';
import {useTeamState} from '../../store/reducers/teamSlice';

interface AnswerInListProps {
    answerData: AnswerModel;
}

export const AnswerInList: FC<AnswerInListProps> = ({answerData}) => {
    const {currentTeam} = useTeamState();
    const {user, answer, right} = answerData;

    return (
        <div className={right ? 'green' : 'red'}>
            {user} ({currentTeam.title}) - {answer}
        </div>
    );
};
