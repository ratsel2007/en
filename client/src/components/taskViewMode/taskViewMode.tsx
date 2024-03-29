import * as React from 'react';
import {FC, useState} from 'react';
import {TaskModel} from '../../../../server/src/task/task.model';
import {Box, Button, Container, Stack, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import {AnswersList} from '../answersList/answersList';
import {CreateAnswerDto} from '../../../../server/src/answer/dto/answer.dto';
import {postAndCheckNewAnswer} from '../../store/action-creators/answer-actions';
import {useAppDispatch} from '../../hooks/redux';
import {useAuthState} from '../../store/reducers/authSlice';
import {deleteTask} from '../../store/action-creators/task';

type TaskViewModeProps = {
    task: TaskModel;
    isAuthor: boolean;
    changeEditMode: () => void;
};
export const TaskViewMode: FC<TaskViewModeProps> = ({task, isAuthor, changeEditMode}) => {
    const dispatch = useAppDispatch();
    const {authUser} = useAuthState();
    const [teamAnswer, setTeamAnswer] = useState<string>('');

    const handleInputTeamAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeamAnswer(e.currentTarget.value);
    };

    const checkTeamAnswer = async () => {
        const answerData: CreateAnswerDto = {
            user: authUser.name,
            right: false,
            teamId: authUser.team._id,
            taskId: task._id,
            answer: teamAnswer.trim().toLowerCase(),
        };

        dispatch(postAndCheckNewAnswer(answerData));

        setTeamAnswer('');
    };

    const handleChangeEditMode = () => {
        changeEditMode();
    };

    const handleDeleteTask = async () => {
        await dispatch(deleteTask(task._id));
    };

    return (
        <Container sx={{mt: '15px', pb: '30px'}}>
            <Box className='task'>
                <Stack>
                    <Typography variant='h4' component='h4' sx={{flexGrow: 1, mb: '10px'}}>
                        {task.title}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        {task.description}
                    </Typography>
                    {task.image && <img className='task__image' src={task.image} alt={task.title} />}
                    {task.video && (
                        <iframe
                            width='400'
                            height='300'
                            src={task.video}
                            frameBorder='0'
                            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        />
                    )}
                    <Typography component='p' sx={{flexGrow: 1, mb: '10px', whiteSpace: 'pre'}}>
                        {task.text}
                    </Typography>
                    {task.image2 && <img className='task__image' src={task.image2} alt={task.title} />}
                    {task.video2 && (
                        <iframe
                            width='400'
                            height='300'
                            src={task.video2}
                            frameBorder='0'
                            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        />
                    )}
                    <Typography component='p' sx={{flexGrow: 1, mb: '10px', whiteSpace: 'pre'}}>
                        {task.text2}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Уровни кодов: {task.codeLevel}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px', whiteSpace: 'pre'}}>
                        Описание кодов: <br /> {task.codeDescription}
                    </Typography>
                    {isAuthor && (
                        <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                            Проверочный сектор:
                            <br />
                            {task.address.map((address, index) => (
                                <span className='task-for-author__note' key={index}>
                                    {address}
                                </span>
                            ))}
                        </Typography>
                    )}

                    {isAuthor && (
                        <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                            Коды на уровне:
                            <br />
                            {task.codeAnswer.map((codeAnswer, index) => (
                                <span className='task-for-author__note' key={index}>
                                    {codeAnswer}
                                </span>
                            ))}
                        </Typography>
                    )}
                    {isAuthor && (
                        <>
                            <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                                Подсказка 1: {task.hint1}
                            </Typography>
                            <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                                Подсказка 2: {task.hint2}
                            </Typography>
                            <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                                Подсказка 3: {task.hint3}
                            </Typography>
                        </>
                    )}

                    {isAuthor && (
                        <Button variant='contained' sx={{mb: '10px'}} onClick={handleChangeEditMode}>
                            Редактировать задание
                        </Button>
                    )}
                    {isAuthor && (
                        <Button variant='contained' onClick={handleDeleteTask}>
                            Удалить задание
                        </Button>
                    )}
                </Stack>
            </Box>

            {!isAuthor && (
                <Box sx={{display: 'flex', gap: '20px', mt: '15px', mb: '20px'}}>
                    <TextField
                        type='text'
                        name='answer'
                        label='ответ'
                        value={teamAnswer}
                        variant='outlined'
                        sx={{width: '100%'}}
                        onChange={handleInputTeamAnswer}
                    />
                    <Button variant='contained' onClick={checkTeamAnswer}>
                        Отправить
                    </Button>
                </Box>
            )}

            {!isAuthor && <AnswersList taskId={task._id} />}
        </Container>
    );
};
