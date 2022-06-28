import * as React from 'react';
import {Button, Container, Stack, Typography} from '@mui/material';
import {useGameState} from '../../store/reducers/gameSlice';
import {useAuthState} from '../../store/reducers/authSlice';

export const MainDashboard = () => {
    const {nextGame} = useGameState();
    const {authUser} = useAuthState();

    if (!nextGame) {
        return <h2>Loading...</h2>;
    }

    return (
        <Container sx={{paddingTop: '20px'}}>
            <Stack>
                <Typography variant='h4' component='h2' sx={{mb: '20px'}}>
                    {nextGame[0].title}
                </Typography>
                <img className='game-image' src={`${nextGame[0].image}`} alt={nextGame[0].title} />
                <Button variant='contained' sx={{mb: '20px'}}>
                    Войти в игру
                </Button>
                {authUser?.name === nextGame[0].gameAuthor && (
                    <Button variant='contained' sx={{mb: '20px'}}>
                        Редактировать игру
                    </Button>
                )}
            </Stack>
        </Container>
    );
};
