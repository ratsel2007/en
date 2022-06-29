import * as React from 'react';
import {FC, ReactNode, useEffect, useMemo} from 'react';
import {useAppDispatch} from '../../../hooks/redux';
import {createPortal} from 'react-dom';
import {useModalActions, useModalState} from '../../../store/reducers/modalSlice';
import {Modal, Box} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const modalRootElement = document.querySelector('body');

type ModalProps = {
    children: ReactNode;
};

export const ModalWindow: FC<ModalProps> = ({children}) => {
    const element = useMemo(() => document.createElement('div'), []);

    const {modalOpen} = useModalState();
    const {setModalClose} = useModalActions();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (modalOpen) {
            modalRootElement.appendChild(element);

            return () => {
                modalRootElement.removeChild(element);
            };
        }
    });

    const handleModalClose = () => {
        dispatch(setModalClose());
    };

    if (!modalOpen) {
        return null;
    }

    return createPortal(
        <Modal
            open={modalOpen.globalOpen}
            onClose={handleModalClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>{children}</Box>
        </Modal>,
        element,
    );
};
