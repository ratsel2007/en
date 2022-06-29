import * as React from 'react';
import {Button, Container, Stack} from '@mui/material';
import {Header} from '../common/header/header';
import {useAppDispatch} from '../../hooks/redux';
import {useModalActions, useModalState} from '../../store/reducers/modalSlice';
import {ModalWindow} from '../common/modal/modalWindow';
import {AddTask} from '../common/forms/addTask';
import {useTaskState} from '../../store/reducers/taskSlice';

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

                {tasks &&
                    tasks.map((task) => {
                        return <div key={task.id}>tasks.title</div>;
                    })}
            </Container>

            {addTask && (
                <ModalWindow>
                    <AddTask />
                </ModalWindow>
            )}
        </>
    );
};
