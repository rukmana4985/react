import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     document.getElementById('root'));
registerServiceWorker();
