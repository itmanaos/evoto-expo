import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { router } from 'expo-router';
import { auth } from 'firebaseConfig';
import { AuthType, TokenType, UserDataType } from '@/database/interfaces/AuthTyped';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const AuthContext = createContext<AuthType>({} as AuthType);

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const SessionProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [token, setToken] = useState<TokenType | null>(null);

  // const unsub = onAuthStateChanged(auth, (user) => {
  //   setGlobalLoading(true);
  //   try {
  //     const UserDataLogged = {
  //       name: user.displayName,
  //       email: user.email,
  //       photo: user.email,
  //     } as UserDataType;
  //     setUserData(UserDataLogged);
  //     const TokenLogged = {
  //       refresh: user.refreshToken,
  //       token: user.refreshToken,
  //     };
  //     setToken(TokenLogged);
  //   } catch (error: any) {
  //     setUserData({} as UserDataType);
  //     setToken({} as TokenType);
  //     Alert.alert(error.message);
  //   } finally {
  //     setGlobalLoading(false);
  //   }
  // });

  useEffect(() => {
    AuthVerify();
  }, []);

  const AuthVerify = async () => {
    setGlobalLoading(true);
    try {
      const tokenStorage = await AsyncStorage.getItem('@token');
      const dataUserStorage = await AsyncStorage.getItem('@user');

      // console.log('ctx.AuthVerify.50' + tokenStorage);
      // console.log('ctx.AuthVerify.51' + dataUserStorage);

      setUserData(dataUserStorage != null ? JSON.parse(dataUserStorage) : null);
      setToken(tokenStorage != null ? JSON.parse(tokenStorage) : null);
    } catch (error: any) {
      setUserData(null);
      setToken(null);
      Alert.alert(error.message);
    } finally {
      setGlobalLoading(false);
    }
  };

  const logIn = async (email: string, password: string) => {
    setIsLoading(true);
    console.log('ctx.41' + 'Entrou no appSignIn');
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userToken = userCredential.user.refreshToken;
        if (user) {
          const UserDataLogged = {
            name: userCredential.user.displayName,
            email: userCredential.user.email,
            photo: userCredential.user.email,
          } as UserDataType;
          setUserData(UserDataLogged);
          const json_data = JSON.stringify(UserDataLogged);
          AsyncStorage.setItem('@user', json_data);
          console.log('ctx.LogIn.93 ' + json_data);
          const TokenLogged = {
            refresh: userCredential.user.refreshToken,
            token: userCredential.user.refreshToken,
          };
          setToken(TokenLogged);
          const json_token = JSON.stringify(TokenLogged);
          AsyncStorage.setItem('@token', json_token);
          console.log('ctx.LogIn.101 ' + json_token + ' Usuario Logado!!');
          router.replace('(tabs)/main/');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        setIsLoading(false);
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          alert('Usuário ou senha incorretos');
        } else if (error.code === 'auth/too-many-requests') {
          alert('Muitas tentativas, tente novamente mais tarde');
        } else {
          alert('Ocorreu um erro ao tentar fazer login, tente novamente mais tarde');
        }
      });
  };

  const logOut = async () => {
    setIsLoading(true);
    await signOut(auth)
      .then(() => {
        setUserData(null);
        setToken(null);
        AsyncStorage.removeItem('@token');
        AsyncStorage.removeItem('@user');
        console.log('ctx.119' + 'Usuário deslogado');
        router.push('/');
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        console.log(errorMessage);
      });
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        isLoading,
        userData,
        globalLoading,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthUse = () => {
  const context = useContext(AuthContext);
  return context;
};
