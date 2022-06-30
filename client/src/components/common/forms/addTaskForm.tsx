import * as React from 'react';
import {Button, Stack, TextField} from '@mui/material';
import {CreateTaskDto} from '../../../../../server/src/task/dto/task.dto';
import {useState} from 'react';
import {useAppDispatch} from '../../../hooks/redux';
import {createNewTask} from '../../../store/action-creators/task';
import {useModalActions} from '../../../store/reducers/modalSlice';

export const AddTaskForm = () => {
    const dispatch = useAppDispatch();

    const {setModalClose} = useModalActions();

    const [taskData, setTaskData] = useState<CreateTaskDto>({
        title: '',
        description: '',
        image: '',
        music: '',
        video: '',
        text: '',
        codeLevel: '',
        codeDescription: '',
        address: '',
        codeAnswer: [],
        hint1: '',
        hint2: '',
        hint3: '',
        autoComplete: false,
    });

    const handleChangeTaskData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskData({...taskData, [e.currentTarget.name]: e.currentTarget.value});
    };

    const handleSubmitTaskForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(createNewTask(taskData));

        dispatch(setModalClose());
    };

    return (
        <form onSubmit={handleSubmitTaskForm}>
            <Stack>
                <TextField
                    type='text'
                    name='title'
                    label='Название задания'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='description'
                    label='Описание задания'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='image'
                    label='Ссылка на картинку'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='video'
                    label='Ссылка на видео'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='music'
                    label='Ссылка на аудио'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='text'
                    label='Текст задания'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='codeLevel'
                    label='Уровень кодов задания'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='codeDescription'
                    label='Описание расположения кодов задания'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='address'
                    label='Проверочный сектор'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='codeAnswer'
                    label='Правильный код'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='hint1'
                    label='Подсказка 1'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='hint2'
                    label='Подсказка 2'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='hint3'
                    label='Подсказка 3'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <Button type='submit' variant='contained'>
                    Добавить задание
                </Button>
            </Stack>
        </form>
    );
};
