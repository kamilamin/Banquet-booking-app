import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';
import SignIn from './components/signin';
import SignUp from './components/signup';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { firebaseApp } from './firebase';
import reducer from './reducers'
import { logUser } from './actions';
import thunk from 'redux-thunk'
import user from './reducers/users';

firebaseApp.auth().onAuthStateChanged(users => {
    if(user) {
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/App');
    } else {
        history.replace('/signin');
    }
})

const middleware = compose(
    applyMiddleware(thunk)
);

const history = createBrowserHistory();
const store = createStore(reducer, middleware);


ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={history}>
            <div>
                <Route path='/app' component={App} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
