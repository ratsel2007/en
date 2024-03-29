import * as React from 'react';
import {FC, useState} from 'react';
import {Box, Button, Stack, TextField} from '@mui/material';
import {PatchTaskDto} from '../../../../../server/src/task/dto/task.dto';
import {useAppDispatch} from '../../../hooks/redux';
import {editTask} from '../../../store/action-creators/task';
import {useArrayDataToStringData} from '../../../hooks/useArrayDataToStringData';
import {TaskModel} from '../../../../../server/src/task/task.model';

type EditTaskProps = {
    task: TaskModel;
    changeEditMode: () => void;
};
export const EditTaskForm: FC<EditTaskProps> = ({task, changeEditMode}) => {
    const dispatch = useAppDispatch();

    const [editTaskData, setEditTaskData] = useState<PatchTaskDto>({
        title: task.title,
        description: task.description,
        image: task.image,
        music: task.music,
        video: task.video,
        text: task.text,
        image2: task.image2,
        music2: task.music2,
        video2: task.video2,
        text2: task.text2,
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
        if (e.target.name === 'codeAnswer') {
            setEditTaskData({...editTaskData, codeAnswer: useArrayDataToStringData(e.currentTarget.value)});
        } else if (e.target.name === 'address') {
            setEditTaskData({...editTaskData, address: useArrayDataToStringData(e.currentTarget.value)});
        } else {
            setEditTaskData({...editTaskData, [e.currentTarget.name]: e.currentTarget.value});
        }
    };

    const handleEditTaskFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await dispatch(editTask(task._id, editTaskData));

        changeEditMode();
    };

    return (
        <form onSubmit={handleEditTaskFormSubmit}>
            <Box className='task'>
                <Stack>
                    <TextField
                        type='text'
                        name='title'
                        label='Название задания'
                        value={editTaskData.title}
                        required
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
                        multiline
                        rows={4}
                        variant='outlined'
                        sx={{mb: '10px'}}
                        onChange={handleChangeEditTaskData}
                    />
                    <TextField
                        type='text'
                        name='image2'
                        label='Ссылка на картинку №2'
                        value={editTaskData.image2}
                        variant='outlined'
                        sx={{mb: '10px'}}
                        onChange={handleChangeEditTaskData}
                    />
                    <TextField
                        type='text'
                        name='video2'
                        label='Ссылка на видео №2'
                        value={editTaskData.video2}
                        variant='outlined'
                        sx={{mb: '10px'}}
                        onChange={handleChangeEditTaskData}
                    />
                    <TextField
                        type='text'
                        name='music2'
                        label='Ссылка на аудио №2'
                        value={editTaskData.music2}
                        variant='outlined'
                        sx={{mb: '10px'}}
                        onChange={handleChangeEditTaskData}
                    />
                    <TextField
                        type='text'
                        name='text2'
                        label='Текст задания №2'
                        value={editTaskData.text2}
                        multiline
                        rows={4}
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
                        multiline
                        rows={4}
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
                        Сохранить изменения
                    </Button>
                </Stack>
            </Box>
        </form>
    );
};
