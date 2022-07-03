import * as React from 'react';
import {Button, Stack, TextField} from '@mui/material';
import {CreateTaskDto} from '../../../../../server/src/task/dto/task.dto';
import {useState} from 'react';
import {useAppDispatch} from '../../../hooks/redux';
import {createNewTask} from '../../../store/action-creators/task';
import {useModalActions} from '../../../store/reducers/modalSlice';
import {useArrayDataToStringData} from '../../../hooks/useArrayDataToStringData';

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
        image2: '',
        music2: '',
        video2: '',
        text2: '',
        codeLevel: '',
        codeDescription: '',
        address: [],
        codeAnswer: [],
        hint1: '',
        hint2: '',
        hint3: '',
        autoComplete: false,
    });

    const handleChangeTaskData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.name === 'codeAnswer') {
            setTaskData({...taskData, codeAnswer: useArrayDataToStringData(e.currentTarget.value)});
        } else if (e.target.name === 'address') {
            setTaskData({...taskData, address: useArrayDataToStringData(e.currentTarget.value)});
        } else {
            setTaskData({...taskData, [e.currentTarget.name]: e.currentTarget.value});
        }
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
                    required
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
                    multiline
                    rows={4}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='image2'
                    label='Ссылка на картинку №2'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='video2'
                    label='Ссылка на видео №2'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='music2'
                    label='Ссылка на аудио №2'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='text2'
                    label='Текст задания №2'
                    multiline
                    rows={4}
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
                    multiline
                    rows={4}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='address'
                    label='Проверочный сектор (указывать все варианты через запятую)'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <TextField
                    type='text'
                    name='codeAnswer'
                    label='Правильный код (указывать все варианты через запятую)'
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
