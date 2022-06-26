import * as React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../common/header/header';

export const Main = () => {
    return (
        <>
            <Header />
            <div>
                <Link to='/login'>Login</Link>
                <Link to='/add-game'>Add</Link>
            </div>
        </>
    );
};
