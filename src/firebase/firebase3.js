//import * as firebase from 'firebase';
//import firebase from 'firebase/app';
//import 'firebase/<PACKAGE>';
import firebase from 'firebase/app';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyDhqIVMzfut21qYsOpfWbeOnZqZRUJ_Cis",
  authDomain: "hirokoymjdb.firebaseapp.com",
  databaseURL: "https://hirokoymjdb.firebaseio.com",
  projectId: "hirokoymjdb",
  storageBucket: "hirokoymjdb.appspot.com",
  messagingSenderId: "813097782928"
};
firebase.initializeApp(config);
export default firebase;
  
