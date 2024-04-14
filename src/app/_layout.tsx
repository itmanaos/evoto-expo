import { Slot, Stack } from 'expo-router';
import { SessionProvider } from './login/ctx';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>

    // <Stack
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#F5F5F5',
    //     },
    //     headerTintColor: 'black',
    //     headerTitleStyle: { fontWeight: 'bold' },
    //   }}
    // >
    //   <Stack.Screen name="index" options={{ title: 'Bem Vindo', headerShown: false }} />
    //   <Stack.Screen name="signin" options={{ headerShown: false, title: 'Bem Vindo' }} />

    //   <Stack.Screen name="dashboard" options={{ headerShown: false }} />
    //   <Stack.Screen name="login" options={{ headerShown: false }} />
    //   <Stack.Screen name="(screens)" options={{ headerShown: false }} />
    // </Stack>
  );
}
