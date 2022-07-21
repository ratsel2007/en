import * as React from 'react';
import {FC} from 'react';
import {useAppDispatch} from '../../../hooks/redux';
import {useAuthState} from '../../../store/reducers/authSlice';
import {logout} from '../../../store/action-creators/auth';
import {useNavigate} from 'react-router';
import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Header: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {authUser, isAuth} = useAuthState();

    const handleLogout = () => {
        if (!isAuth) {
            navigate('/login');
        }
        if (isAuth) {
            dispatch(logout());
            navigate('/');
        }
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                        {authUser?.name} ({authUser?.team.title})
                    </Typography>

                    {authUser?.author && (
                        <Link to='/add-game'>
                            <Button color='inherit' sx={{color: '#FFFFFF', textDecoration: 'none'}}>
                                Добавить игру
                            </Button>
                        </Link>
                    )}

                    <Button color='inherit' onClick={handleLogout}>
                        {!isAuth ? 'Войти' : 'Выйти'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
