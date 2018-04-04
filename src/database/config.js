import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCXGZS6mmfvDYIQ3UbH1UxedeoBElbcdps',
  authDomain: 'photowall-36b28.firebaseapp.com',
  databaseURL: 'https://photowall-36b28.firebaseio.com',
  projectId: 'photowall-36b28',
  storageBucket: 'photowall-36b28.appspot.com',
  messagingSenderId: '334915883509'
};

firebase.initializeApp(config);

const database = firebase.database();
export { database }