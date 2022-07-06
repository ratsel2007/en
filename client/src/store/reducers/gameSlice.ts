import {GameModel} from '../../../../server/src/game/game.model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks/redux';

interface GameState {
    nextGame: GameModel | null;
}

const initialState: GameState = {
    nextGame: null,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setNextGame(state, {payload: game}: PayloadAction<GameModel>) {
            state.nextGame = game;
        },
        editNextGame(state, {payload: data}: PayloadAction<GameModel>) {
            state.nextGame = data;
        },
    },
});

export default gameSlice.reducer;

export const useGameActions = () => {
    return gameSlice.actions;
};

export const useGameState = () => {
    return useAppSelector((state) => state.game);
};
