import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/store';

const app = createRoot(document.getElementById('app'));

app.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);
