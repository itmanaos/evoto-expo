import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerShown: true, title: 'Bem Vindo' }} />
    </Stack>
  );
}
