import * as React from 'react';
import {App} from './App';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {setupStore} from './store/store';
import {BrowserRouter} from 'react-router-dom';

import './index.scss';

const app = createRoot(document.getElementById('app'));

const store = setupStore();

app.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);
