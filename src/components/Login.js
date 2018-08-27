import React from 'react';
import {Button} from 'react-bootstrap';
import firebase, {googleAuthProvider} from '../firebase/firebase3';
import { history } from '../routers/AppRouter';

/**
 * Login component.
 */
export default class Login extends React.Component{
  login = ()=>{
    firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
      console.log('signInWithPopup');
      //console.log(history.location.pathname);

      }).catch((error)=>{
        var errorMessage = error.message;
        console.log(`Failed to login. Err: ${errorMessage}`)
      });
  }
  render(){
    return (
        <Button onClick={this.login} className="login">Log in with Google</Button>
    )
  }
}

