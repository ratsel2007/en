import * as React from 'react';
import {TaskModel} from '../../../../../server/src/task/task.model';
import {FC, useState} from 'react';
import {Button, Stack, TextField} from '@mui/material';
import {PatchTaskDto} from '../../../../../server/src/task/dto/task.dto';
import {useAppDispatch} from '../../../hooks/redux';
import {editTask} from '../../../store/action-creators/task';
import {useModalActions} from '../../../store/reducers/modalSlice';

type EditTaskProps = {
    task: TaskModel;
};
export const EditTaskForm: FC<EditTaskProps> = ({task}) => {
    const dispatch = useAppDispatch();

    const {setModalClose} = useModalActions();

    const [editTaskData, setEditTaskData] = useState<PatchTaskDto>({
        title: task.title,
        description: task.description,
        image: task.image,
        music: task.music,
        video: task.video,
        text: task.text,
        codeLevel: task.codeLevel,
        codeDescription: task.codeDescription,
        address: task.address,
        codeAnswer: task.codeAnswer,
        hint1: task.hint1,
        hint2: task.hint2,
        hint3: task.hint3,
        autoComplete: task.autoComplete,
    });

    const handleChangeEditTaskData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTaskData({...editTaskData, [e.currentTarget.name]: e.currentTarget.value});
    };

    const handleEditTaskFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(editTask(task._id, editTaskData));

        dispatch(setModalClose());
    };

    return (
        <form onSubmit={handleEditTaskFormSubmit}>
            <Stack>
                <TextField
                    type='text'
                    name='title'
                    label='Название задания'
                    value={editTaskData.title}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='description'
                    label='Описание задания'
                    value={editTaskData.description}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='image'
                    label='Ссылка на картинку'
                    value={editTaskData.image}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='video'
                    label='Ссылка на видео'
                    value={editTaskData.video}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='music'
                    label='Ссылка на аудио'
                    value={editTaskData.music}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='text'
                    label='Текст задания'
                    value={editTaskData.text}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='codeLevel'
                    label='Уровень кодов задания'
                    value={editTaskData.codeLevel}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='codeDescription'
                    label='Описание расположения кодов задания'
                    value={editTaskData.codeDescription}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='address'
                    label='Проверочный сектор'
                    value={editTaskData.address}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='codeAnswer'
                    label='Правильный код'
                    value={editTaskData.codeAnswer}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='hint1'
                    label='Подсказка 1'
                    value={editTaskData.hint1}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='hint2'
                    label='Подсказка 2'
                    value={editTaskData.hint2}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <TextField
                    type='text'
                    name='hint3'
                    label='Подсказка 3'
                    value={editTaskData.hint3}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditTaskData}
                />
                <Button type='submit' variant='contained'>
                    Редактировать задание
                </Button>
            </Stack>
        </form>
    );
};
