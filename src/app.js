import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/hirokoymj.scss';
import firebase from "./firebase/firebase3";
import { createStore } from 'redux';
import authReducer from './reducers/authReducer';
import {login, logout} from './actions/auth';
import { Provider } from 'react-redux';


const store = createStore(authReducer);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
    store.dispatch(login({uid: user.uid, displayName: user.displayName}));
    //console.log(store.getState());
  } else {
    console.log('log out');
    store.dispatch(logout());
    history.push('/');
  }
});



