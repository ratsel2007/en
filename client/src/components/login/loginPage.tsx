import * as React from 'react';
import {FC, useState} from 'react';
import {Container, Stack, TextField, Button} from '@mui/material';
import {AuthDto} from '../../../../server/src/auth/dto/auth.dto';
import {useActions} from '../../hooks/useActions';
import {Link} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';

export const LoginPage: FC = () => {
    const {login, logout} = useActions();
    const {isAuth} = useTypedSelector((state) => state.auth);

    const [loginData, setLoginData] = useState<AuthDto>({
        email: '',
        password: '',
    });

    const handleChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.currentTarget.name]: e.currentTarget.value});
    };

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        if (!isAuth) {
            e.preventDefault();

            login(loginData);
        } else {
            logout();
        }
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
                <Link to='/'>Main</Link>
            </Container>
        </>
    );
};
