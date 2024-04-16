import React, { createContext, useContext, useState } from 'react';
import { useStorageState } from './useStorageState';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Redirect, router } from 'expo-router';
import { auth } from 'firebaseConfig';

export const AuthContext = createContext<{
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
  userName: string | null;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
  userName: null,
});

//export const AuthContext = createContext({});

// interface UserName {
//   userEmail?: string | null;
//   status: boolean;
//   name?: string | null;
//   userDisplayName?: string | null;
//   userID?: string | null;
// }

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  //const [[isLoading, session, username], setSession] = useStorageState('session');
  const [session, setSession] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUsername] = useState<string | null>(null);

  // const unsub = onAuthStateChanged(auth, (user) => {
  //   setSession('usuario');
  //   setIsLoading(false);
  //   setUsername({
  //     userEmail: user?.email,
  //     status: true,
  //     name: user?.email,
  //     userDisplayName: user?.displayName,
  //     userID: user?.uid,
  //   });
  // });

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email, password) => {
          setIsLoading(true);
          console.log('ctx.41' + 'Entrou no appSignIn');
          await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              if (user) {
                console.log('ctx.72' + 'Usuário logado');
                //setSession('ok');
                //console.log('ctx.74' + session);
                setIsLoading(false);
                setUsername(user.email);
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
        },
        signOut: async () => {
          setIsLoading(true);
          const logOut = await signOut(auth)
            .then(() => {
              setSession(null);
              setIsLoading(false);
              setUsername(null);
              router.push('/');
            })
            .catch((error) => {
              const errorMessage = error.errorMessage;
              console.log(errorMessage);
            });
        },
        session,
        isLoading,
        userName,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
