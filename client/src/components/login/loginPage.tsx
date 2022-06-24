import * as React from 'react';
import {FC, useState} from 'react';
import {Container, Stack, TextField, Button} from '@mui/material';
import {AuthDto} from '../../../../server/src/auth/dto/auth.dto';
import {useActions} from '../../hooks/useActions';
import {Link} from 'react-router-dom';

export const LoginPage: FC = () => {
    const {login} = useActions();

    const [loginData, setLoginData] = useState<AuthDto>({
        email: '',
        password: '',
    });

    const handleChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.currentTarget.name]: e.currentTarget.value});
    };

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        login(loginData);
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
                            Войти
                        </Button>
                    </Stack>
                </form>
                <Link to='/'>Main</Link>
            </Container>
        </>
    );
};
