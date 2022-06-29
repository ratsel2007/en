import * as React from 'react';
import {Button, Stack, TextField} from '@mui/material';
import {CreateTaskDto} from '../../../../../server/src/task/dto/task.dto';
import {useState} from 'react';

export const AddTask = () => {
    const [taskData, setTaskData] = useState<CreateTaskDto>({});

    const handleChangeTaskData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskData({...taskData, [e.currentTarget.name]: e.currentTarget.value});
    };

    return (
        <form>
            <Stack>
                <TextField
                    type='text'
                    name='title'
                    label='Название задания'
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeTaskData}
                />
                <Button variant='contained'>Добавить задание</Button>
            </Stack>
        </form>
    );
};
