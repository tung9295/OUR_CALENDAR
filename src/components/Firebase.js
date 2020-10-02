import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCw_qLapK4Da0TWy-sfU7rVFKmCMQ7GEhs",
  authDomain: "our-calendar-dc8af.firebaseapp.com",
  databaseURL: "https://our-calendar-dc8af.firebaseio.com",
  projectId: "our-calendar-dc8af",
  storageBucket: "our-calendar-dc8af.appspot.com",
  messagingSenderId: "28755367242",
  appId: "1:28755367242:web:fb15625d26722aec5cddb3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();