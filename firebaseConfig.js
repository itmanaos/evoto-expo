import { initializeApp, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeFirestore, persistentLocalCache, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD4gO4BHlkCgxMKq9uRHlzKOZglX3dME18',
  authDomain: 'evoto-expo.firebaseapp.com',
  projectId: 'evoto-expo',
  storageBucket: 'evoto-expo.appspot.com',
  messagingSenderId: '137046122811',
  appId: '1:137046122811:web:e19133c70a0f68f113971e',
  measurementId: 'G-PXH7RY6KXX',
};

let app;
if (!app) {
  app = initializeApp(firebaseConfig);
}

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// persistentLocalCache is required to enable offline querying
// const db = initializeFirestore(app, {
//   experimentalForceLongPolling: !isProduction,
//   localCache: persistentLocalCache(/*settings*/ {}),
// });

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth, getApp, getAuth };
