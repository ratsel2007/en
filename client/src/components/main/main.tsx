import * as React from 'react';
import {Link} from 'react-router-dom';

export const Main = () => {
    return (
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/add-game'>Add</Link>
        </div>
    );
};
