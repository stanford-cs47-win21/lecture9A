import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage"
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOvJT5eSqFj8ieP6dX2xCb9APATX0pL3w",
  authDomain: "lecture-9a.firebaseapp.com",
  databaseURL: "https://lecture-9a.firebaseio.com",
  projectId: "lecture-9a",
  storageBucket: "lecture-9a.appspot.com",
  messagingSenderId: "753511253227",
  appId: "1:753511253227:web:cb17d1d0d64e6cc25aeaae",
  measurementId: "G-54GD36XTPS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
var storage = firebase.storage();

export default storage