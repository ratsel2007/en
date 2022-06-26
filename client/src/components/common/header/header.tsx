import * as React from 'react';
import {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {useActions} from '../../../hooks/useActions';
import {useNavigate} from 'react-router';
import {Link} from 'react-router-dom';

export const Header: FC = () => {
    const {currentUser, isAuth} = useTypedSelector((state) => state.auth);
    const navigate = useNavigate();
    const {logout} = useActions();

    const handleLogout = () => {
        if (!isAuth) {
            navigate('/login');
        }
        if (isAuth) {
            logout();
        }
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                        {currentUser.name}
                    </Typography>
                    <Link to='/add-game'>
                        <Button color='inherit' sx={{color: '#FFFFFF', textDecoration: 'none'}}>
                            Добавить игру
                        </Button>
                    </Link>
                    <Button color='inherit' onClick={handleLogout}>
                        {!isAuth ? 'Войти' : 'Выйти'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
