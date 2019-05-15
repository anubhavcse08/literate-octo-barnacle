import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';

//Component
import './index.css';
// import Main from './container/main';
import rootReducer from './store/reducer';
import YoutubeContainer from './container/youtubeContainer';

const store = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={store(rootReducer)}>
        <YoutubeContainer />
    </Provider>,
document.getElementById('root'));