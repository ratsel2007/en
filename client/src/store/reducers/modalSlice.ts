import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks/redux';

const initialOpenState = {
    globalOpen: false,
    addTask: false,
    editTask: false,
    editGame: false,
};

export type Modals = keyof typeof initialOpenState;

export interface ModalState {
    modalOpen: {
        globalOpen: boolean;
        addTask: boolean;
        editTask: boolean;
        editGame: boolean;
    };
}

const initialState: ModalState = {
    modalOpen: initialOpenState,
};

export const modalSlice = createSlice({
    name: 'modalOpen',
    initialState,
    reducers: {
        setModalOpen(state, {payload}: PayloadAction<Modals>) {
            state.modalOpen = {...initialOpenState, [payload]: true, globalOpen: true};
        },
        setModalClose(state) {
            state.modalOpen = initialOpenState;
        },
    },
});

export default modalSlice.reducer;

export const useModalActions = () => {
    return modalSlice.actions;
};

export const useModalState = () => {
    return useAppSelector((state) => state.modal);
};
