import * as React from 'react';
import {Button, Container, Stack} from '@mui/material';
import {Header} from '../common/header/header';
import {useAppDispatch} from '../../hooks/redux';
import {useModalActions, useModalState} from '../../store/reducers/modalSlice';
import {ModalWindow} from '../common/modal/modalWindow';
import {AddTaskForm} from '../common/forms/addTaskForm';
import {useTaskState} from '../../store/reducers/taskSlice';
import {useEffect} from 'react';
import {getAllTasks} from '../../store/action-creators/task';
import {TaskForAuthor} from '../task/taskForAuthor';
import Typography from '@mui/material/Typography';

export const AddTaskForGame = () => {
    const dispatch = useAppDispatch();
    const {setModalOpen} = useModalActions();
    const {
        modalOpen: {addTask},
    } = useModalState();

    const {tasks} = useTaskState();

    const handleModalOpen = () => {
        dispatch(setModalOpen('addTask'));
    };

    useEffect(() => {
        dispatch(getAllTasks());
    }, []);

    return (
        <>
            <Header />
            <Container sx={{paddingTop: '20px'}}>
                <Stack>
                    <Button variant='contained' sx={{mb: '15px'}}>
                        Редактировать общие данные игры
                    </Button>
                    <Button variant='contained' sx={{mb: '15px'}} onClick={handleModalOpen}>
                        Добавить задание
                    </Button>
                </Stack>

                {!tasks.length && (
                    <Typography component='div' sx={{flexGrow: 1}}>
                        Заданий к игре пока нет
                    </Typography>
                )}

                {tasks &&
                    tasks.map((task) => {
                        return <TaskForAuthor key={task.title} task={task} />;
                    })}
            </Container>

            {addTask && (
                <ModalWindow>
                    <AddTaskForm />
                </ModalWindow>
            )}
        </>
    );
};
