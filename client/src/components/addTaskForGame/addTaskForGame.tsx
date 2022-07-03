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
import {TaskInGame} from '../task/taskInGame';
import Typography from '@mui/material/Typography';
import {EditGameForm} from '../common/forms/editGameForm';
import {useGameState} from '../../store/reducers/gameSlice';

export const AddTaskForGame = () => {
    const dispatch = useAppDispatch();
    const {setModalOpen} = useModalActions();
    const {
        modalOpen: {addTask, editGame},
    } = useModalState();

    const {tasks} = useTaskState();
    const {nextGame} = useGameState();

    const handleModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        switch (e.currentTarget.dataset.name) {
            case 'addTask':
                dispatch(setModalOpen('addTask'));
                break;
            case 'editGame':
                dispatch(setModalOpen('editGame'));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        dispatch(getAllTasks());
    }, []);

    return (
        <>
            <Header />
            <Container sx={{paddingTop: '20px'}}>
                <Stack>
                    <Button data-name='editGame' variant='contained' sx={{mb: '15px'}} onClick={handleModalOpen}>
                        Редактировать общие данные игры
                    </Button>
                    <Button data-name='addTask' variant='contained' sx={{mb: '15px'}} onClick={handleModalOpen}>
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
                        return <TaskInGame key={task.title} task={task} />;
                    })}
            </Container>

            {addTask && (
                <ModalWindow>
                    <AddTaskForm />
                </ModalWindow>
            )}

            {editGame && (
                <ModalWindow>
                    <EditGameForm game={nextGame} />
                </ModalWindow>
            )}
        </>
    );
};
