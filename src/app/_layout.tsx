import { Stack } from 'expo-router';
import { SessionProvider } from '../context/ctx';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'dashboard' }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false, title: 'autentica' }} />
      </Stack>
    </SessionProvider>
  );
}
