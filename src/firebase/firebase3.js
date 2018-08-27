import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDhqIVMzfut21qYsOpfWbeOnZqZRUJ_Cis",
  authDomain: "hirokoymjdb.firebaseapp.com",
  databaseURL: "https://hirokoymjdb.firebaseio.com",
  projectId: "hirokoymjdb",
  storageBucket: "hirokoymjdb.appspot.com",
  messagingSenderId: "813097782928"
};
firebase.initializeApp(config);

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//export const auth = firebase.auth();
export default firebase;
  
