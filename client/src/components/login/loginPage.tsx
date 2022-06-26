import * as React from 'react';
import {FC, useState} from 'react';
import {Container, Stack, TextField, Button} from '@mui/material';
import {AuthDto} from '../../../../server/src/auth/dto/auth.dto';
import {useActions} from '../../hooks/useActions';
import {useLocation, useNavigate} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';

export const LoginPage: FC = () => {
    const {login} = useActions();
    const {isAuth} = useTypedSelector((state) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();

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

        await login(loginData);

        navigate(fromPage);
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
