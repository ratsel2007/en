import {AppDispatch} from '../store';
import axios from 'axios';
import {NEXT_GAME_URL} from '../constants';
import {useGameActions} from '../reducers/gameSlice';
import {CreateGameDto} from '../../../../server/src/game/dto/create-game.dto';

const {setNextGame} = useGameActions();

export const fetchNextGame = () => {
    return async (dispatch: AppDispatch) => {
        const {data} = await axios.get(NEXT_GAME_URL);

        dispatch(setNextGame(data));
    };
};

export const createNewGame = (dto: CreateGameDto) => {
    return async (dispatch: AppDispatch) => {
        await axios.delete(NEXT_GAME_URL);

        const {data} = await axios.post(NEXT_GAME_URL, dto);

        dispatch(setNextGame(data));
    };
};
