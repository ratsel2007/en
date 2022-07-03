import * as React from 'react';
import {FC} from 'react';
import {TaskModel} from '../../../../server/src/task/task.model';
import {Box, Stack, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import {useAppDispatch} from '../../hooks/redux';
import {useModalActions, useModalState} from '../../store/reducers/modalSlice';
import {ModalWindow} from '../common/modal/modalWindow';
import {EditTaskForm} from '../common/forms/editTaskForm';
import {deleteTask} from '../../store/action-creators/task';
import {useAuthState} from '../../store/reducers/authSlice';
import {useGameState} from '../../store/reducers/gameSlice';

type TaskProps = {
    task: TaskModel;
};
export const TaskInGame: FC<TaskProps> = ({task}) => {
    const dispatch = useAppDispatch();
    const {nextGame} = useGameState();
    const {authUser} = useAuthState();

    const {setModalOpen} = useModalActions();

    const isAuthor = nextGame[0]?.gameAuthor === authUser.name;

    const {
        modalOpen: {editTask},
    } = useModalState();

    const handleOpenEditTaskForm = () => {
        dispatch(setModalOpen('editTask'));
    };

    const handleDeleteTask = async () => {
        await dispatch(deleteTask(task._id));
    };

    return (
        <>
            <Box className='task-for-author'>
                <Stack>
                    <Typography variant='h4' component='h4' sx={{flexGrow: 1, mb: '10px'}}>
                        {task.title}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        {task.description}
                    </Typography>
                    {task.image && <img className='task-for-author__image' src={task.image} alt={task.title} />}
                    <Typography component='p' sx={{flexGrow: 1, mb: '10px', whiteSpace: 'pre'}}>
                        {task.text}
                    </Typography>
                    {task.image2 && <img className='task-for-author__image' src={task.image2} alt={task.title} />}
                    <Typography component='p' sx={{flexGrow: 1, mb: '10px', whiteSpace: 'pre'}}>
                        {task.text2}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Уровни кодов: {task.codeLevel}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px', whiteSpace: 'pre'}}>
                        Описание кодов: <br /> {task.codeDescription}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Проверочный сектор:
                        <br />
                        {task.address.map((address, index) => (
                            <span className='task-for-author__note' key={index}>
                                {address}
                            </span>
                        ))}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Коды на уровне:
                        <br />
                        {task.codeAnswer.map((codeAnswer, index) => (
                            <span className='task-for-author__note' key={index}>
                                {codeAnswer}
                            </span>
                        ))}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Подсказка 1: {task.hint1}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Подсказка 2: {task.hint2}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Подсказка 3: {task.hint3}
                    </Typography>
                    {isAuthor && (
                        <Button variant='contained' sx={{mb: '10px'}} onClick={handleOpenEditTaskForm}>
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

            {editTask && (
                <ModalWindow>
                    <EditTaskForm task={task} />
                </ModalWindow>
            )}
        </>
    );
};
