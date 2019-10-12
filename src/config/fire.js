import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC9hV62sXniJMHOyrUCBY-1lPPCGMFhZlM",
    authDomain: "authenticate-ed1f7.firebaseapp.com",
    databaseURL: "https://authenticate-ed1f7.firebaseio.com",
    projectId: "authenticate-ed1f7",
    storageBucket: "authenticate-ed1f7.appspot.com",
    messagingSenderId: "626400878004",
    appId: "1:626400878004:web:1f582a3435acd476cd26e1",
    measurementId: "G-NJG07XHFNS"
  };
const fire = firebase.initializeApp(config);
export default fire;