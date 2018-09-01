import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import firebase from "./firebase/firebase3";
// Redux
import { createStore } from 'redux';
import authReducer from './reducers/authReducer';
import {login, logout} from './actions/auth';
import { Provider } from 'react-redux';
//CSS
import 'normalize.css/normalize.css';
import './styles/hirokoymj.scss';
import 'react-toastify/dist/ReactToastify.css';


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
    history.push('/admin/categoryControlPage');
  } else {
    console.log('log out');
    store.dispatch(logout());
    history.push('/');
  }
});



