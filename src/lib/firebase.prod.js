import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCCqBOaWzIIdljkdY5xP6_B4YiBwau12OA",
  authDomain: "e-barber-5189e.firebaseapp.com",
  databaseURL: "https://e-barber-5189e.firebaseio.com",
  projectId: "e-barber-5189e",
  storageBucket: "e-barber-5189e.appspot.com",
  messagingSenderId: "76155334709",
  appId: "1:76155334709:web:5c5bb941a2e67049d9017c",
  measurementId: "G-R5GSC13MDT"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
