import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD4gO4BHlkCgxMKq9uRHlzKOZglX3dME18',
  authDomain: 'evoto-expo.firebaseapp.com',
  projectId: 'evoto-expo',
  storageBucket: 'evoto-expo.appspot.com',
  messagingSenderId: '137046122811',
  appId: '1:137046122811:web:e19133c70a0f68f113971e',
  measurementId: 'G-PXH7RY6KXX',
};

export const app = initializeApp(firebaseConfig);
//export const auth = getAuth(firebase);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
