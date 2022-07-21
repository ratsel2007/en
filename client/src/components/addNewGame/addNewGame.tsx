import * as React from 'react';
import {Header} from '../common/header/header';
import {Button, Container, Stack, TextField} from '@mui/material';
import {useState} from 'react';
import {CreateGameDto} from '../../../../server/src/game/dto/create-game.dto';
import {useAuthState} from '../../store/reducers/authSlice';
import {useAppDispatch} from '../../hooks/redux';
import {createNewGame} from '../../store/action-creators/game';
import {useNavigate} from 'react-router';

export const AddNewGame = () => {
    const {authUser} = useAuthState();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [gameData, setGameData] = useState<CreateGameDto>({
        title: '',
        image: '',
        text: '',
        date: new Date(),
        gameAuthor: authUser.name,
    });

    const handleChangeGameData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGameData({...gameData, [e.currentTarget.name]: e.currentTarget.value});
    };

    const handleFormGameSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await dispatch(createNewGame(gameData));

        navigate('/');
    };

    return (
        <>
            <Header />
            <Container sx={{paddingTop: '20px'}}>
                <form onSubmit={handleFormGameSubmit}>
                    <Stack>
                        <TextField
                            type='text'
                            name='title'
                            label='Название игры'
                            variant='outlined'
                            sx={{mb: '10px'}}
                            onChange={handleChangeGameData}
                        />
                        <TextField
                            type='text'
                            name='image'
                            label='Сслыка на изображение'
                            variant='outlined'
                            sx={{mb: '10px'}}
                            onChange={handleChangeGameData}
                        />
                        <TextField
                            type='text'
                            name='text'
                            label='Описание игры'
                            multiline
                            rows={10}
                            variant='outlined'
                            sx={{mb: '10px'}}
                            onChange={handleChangeGameData}
                        />
                        <TextField
                            type='datetime-local'
                            name='date'
                            label='Дата и время начала игры'
                            variant='outlined'
                            sx={{mb: '10px'}}
                            onChange={handleChangeGameData}
                        />
                        <Button variant='contained' type='submit'>
                            Добавить новую игру
                        </Button>
                    </Stack>
                </form>
            </Container>
        </>
    );
};
