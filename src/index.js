import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'font-awesome/css/font-awesome.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { counterReducer } from './reducers/Counter';

let store = createStore(counterReducer)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
