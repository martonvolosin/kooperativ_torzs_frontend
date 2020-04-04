import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQm3a-uVA6vQ57dVU9dDV5vCu3-5QsMos',
  authDomain: 'kooperativ-torzs.firebaseapp.com',
  databaseURL: 'https://kooperativ-torzs.firebaseio.com',
  projectId: 'kooperativ-torzs',
  storageBucket: 'kooperativ-torzs.appspot.com',
  messagingSenderId: '883672724817',
  appId: '1:883672724817:web:08bdc9ef03128ab77f4f70',
  measurementId: 'G-3RK4VRS12F',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

export { auth };
