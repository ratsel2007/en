import * as React from 'react';
import {Button, Container, Stack, Typography} from '@mui/material';
import {useGameState} from '../../store/reducers/gameSlice';
import {useAuthState} from '../../store/reducers/authSlice';
import {Link} from 'react-router-dom';

export const MainDashboard = () => {
    const {nextGame} = useGameState();
    const {authUser} = useAuthState();

    if (!nextGame) {
        return <h2>Loading...</h2>;
    }

    const userTeamInGame = nextGame[0].teamInGame.includes(authUser?.team);

    return (
        <Container sx={{paddingTop: '20px'}}>
            <Stack>
                {nextGame[0] && (
                    <Typography variant='h4' component='h2' sx={{mb: '20px'}}>
                        {nextGame[0]?.title}
                    </Typography>
                )}

                {nextGame[0].image && (
                    <img className='game-image' src={`${nextGame[0].image}`} alt={nextGame[0].title} />
                )}

                <Typography variant='h5' component='p' sx={{mb: '20px', whiteSpace: 'pre'}}>
                    {nextGame[0]?.text}
                </Typography>

                {userTeamInGame && (
                    <Button variant='contained' sx={{mb: '20px'}}>
                        Войти в игру
                    </Button>
                )}

                {authUser?.name === nextGame[0].gameAuthor && (
                    <Link to='/add-tasks'>
                        <Button variant='contained' sx={{mb: '20px'}}>
                            Редактировать игру
                        </Button>
                    </Link>
                )}
            </Stack>
        </Container>
    );
};
