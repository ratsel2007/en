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

type TaskProps = {
    task: TaskModel;
};
export const TaskForAuthor: FC<TaskProps> = ({task}) => {
    const dispatch = useAppDispatch();

    const {
        modalOpen: {editTask},
    } = useModalState();

    const {setModalOpen} = useModalActions();

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
                    <img className='task-for-author__image' src={task.image} alt={task.title} />
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        {task.text}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Уровни кодов: {task.codeLevel}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Описание кодов: {task.codeDescription}
                    </Typography>
                    <Typography component='div' sx={{flexGrow: 1, mb: '10px'}}>
                        Проверочный сектор: {task.address}
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
                    <Button variant='contained' sx={{mb: '10px'}} onClick={handleOpenEditTaskForm}>
                        Редактировать задание
                    </Button>
                    <Button variant='contained' onClick={handleDeleteTask}>
                        Удалить задание
                    </Button>
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
