import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from "./Store/reducer";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import axios from 'axios';

axios.defaults.baseURL = "https://kn4f3kklu4.execute-api.eu-west-1.amazonaws.com/default/jstasks";

// MiddleWare
const logger = store => {

    return next => {
        return action => {
            // console.log('this is Logger (Middleware)', action);
            const result =  next(action);
            // console.log('Middleware next state', store.getState());
            return result;
        }
    }
};

const store = createStore(reducer,applyMiddleware(logger,thunk));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
