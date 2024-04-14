import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD4gO4BHlkCgxMKq9uRHlzKOZglX3dME18',
  authDomain: 'evoto-expo.firebaseapp.com',
  projectId: 'evoto-expo',
  storageBucket: 'evoto-expo.appspot.com',
  messagingSenderId: '137046122811',
  appId: '1:137046122811:web:e19133c70a0f68f113971e',
  measurementId: 'G-PXH7RY6KXX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { db, auth };
