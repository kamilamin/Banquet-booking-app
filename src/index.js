import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';
import SignIn from './components/signin';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { firebaseApp } from './firebase';
import reducer from './reducers'
import { logUser } from './actions';
import thunk from 'redux-thunk'
import users from './reducers/users';

firebaseApp.auth().onAuthStateChanged(users => {
    if(user) {
        const { email } = user
    }
})

ReactDOM.render(
    <SignIn />, 
    document.getElementById('root')
);
registerServiceWorker();
