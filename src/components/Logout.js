import React from 'react';
import {Button} from 'react-bootstrap';
import firebase from '../firebase/firebase3';

/**
 * Logout component
 */
export default class Logout extends React.Component{
  logout = ()=>{
    firebase.auth().signOut().then(() => {
    }).catch((error)=>{
      var errorMessage = error.message;
      console.log(`Failed to logout. Err: ${errorMessage}`)
    })    
  }
  render(){
    return (
        <Button onClick={this.logout} className="logout">Log out</Button>
    )
  }
}

