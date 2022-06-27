import * as React from 'react';
import {Header} from '../common/header/header';
import {Link} from 'react-router-dom';

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
