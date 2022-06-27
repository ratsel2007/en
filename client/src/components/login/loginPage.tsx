import * as React from 'react';
import {FC, useState} from 'react';
import {useAppDispatch} from '../../hooks/redux';
import {useAuthState} from '../../store/reducers/authSlice';
import {login} from '../../store/action-creators/auth';
import {useLocation, useNavigate} from 'react-router-dom';

import {Container, Stack, TextField, Button} from '@mui/material';
import {AuthDto} from '../../../../server/src/auth/dto/auth.dto';

export const LoginPage: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isAuth} = useAuthState();

    const fromPage = location.state?.from?.pathname;

    const [loginData, setLoginData] = useState<AuthDto>({
        email: '',
        password: '',
    });

    const handleChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.currentTarget.name]: e.currentTarget.value});
    };

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await dispatch(login(loginData));

        fromPage ? navigate(fromPage) : navigate('/');
    };

    return (
        <>
            <Container>
                <form onSubmit={handleSubmitForm}>
                    <Stack>
                        <TextField
                            type='email'
                            name='email'
                            label='Электронная почта'
                            variant='outlined'
                            sx={{mb: '10px'}}
                            onChange={handleChangeLoginData}
                        />
                        <TextField
                            type='password'
                            name='password'
                            label='Пароль'
                            variant='outlined'
                            sx={{mb: '10px'}}
                            onChange={handleChangeLoginData}
                        />
                        <Button variant='contained' type='submit'>
                            {!isAuth ? 'Войти' : 'Выйти'}
                        </Button>
                    </Stack>
                </form>
            </Container>
        </>
    );
};
