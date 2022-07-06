import * as React from 'react';
import {FC, useState} from 'react';
import {Button, Stack, TextField} from '@mui/material';

import {GameModel} from '../../../../../server/src/game/game.model';
import {PatchGameDto} from '../../../../../server/src/game/dto/create-game.dto';
import {useArrayDataToStringData} from '../../../hooks/useArrayDataToStringData';
import {useAppDispatch} from '../../../hooks/redux';
import {editGame} from '../../../store/action-creators/game';
import {useModalActions} from '../../../store/reducers/modalSlice';

export type EditGameFormProps = {
    game: GameModel;
};

export const EditGameForm: FC<EditGameFormProps> = ({game}) => {
    const dispatch = useAppDispatch();

    const {setModalClose} = useModalActions();

    const [editGameData, setEditGameData] = useState<PatchGameDto>({
        title: game[0].title,
        image: game[0].image,
        text: game[0].text,
        date: game[0].date,
        gameAuthor: game[0].gameAuthor,
        isOpen: game[0].isOpen,
        teamInGame: game[0].teamInGame,
    });

    const handleChangeEditGameData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.name === 'teamInGame') {
            setEditGameData({...editGameData, teamInGame: useArrayDataToStringData(e.currentTarget.value)});
        } else {
            setEditGameData({...editGameData, [e.currentTarget.name]: e.currentTarget.value});
        }
    };

    const handleSubmitEditGameDataForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(editGame(game[0]._id, editGameData));

        dispatch(setModalClose());
    };

    return (
        <form onSubmit={handleSubmitEditGameDataForm}>
            <Stack>
                <TextField
                    type='text'
                    name='title'
                    label='Название игры'
                    value={editGameData.title}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditGameData}
                />
                <TextField
                    type='text'
                    name='image'
                    label='Ссылка на картинку игры'
                    value={editGameData.image}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditGameData}
                />
                <TextField
                    type='text'
                    name='text'
                    label='Описание игры'
                    value={editGameData.text}
                    multiline
                    rows={10}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditGameData}
                />
                <TextField
                    type='datetime-local'
                    name='date'
                    label='Время начала игры'
                    value={editGameData.date}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditGameData}
                />
                <TextField
                    type='text'
                    name='teamInGame'
                    label='Команды, которые участвуют в игре (через запятую)'
                    value={editGameData.teamInGame}
                    variant='outlined'
                    sx={{mb: '10px'}}
                    onChange={handleChangeEditGameData}
                />
                <Button type='submit' variant='contained'>
                    Редактировать игру
                </Button>
            </Stack>
        </form>
    );
};
