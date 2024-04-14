import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F5F5F5',
        },
        headerTintColor: 'black',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Bem Vindo', headerShown: false }} />

      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="(login)" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
    </Stack>
  );
}
