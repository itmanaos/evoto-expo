import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Bem Vindo' }} />
      <Stack.Screen name="newuser" options={{ headerShown: true, title: 'Novo Usuario' }} />
      <Stack.Screen name="newpass" options={{ headerShown: true, title: 'Redefinir Senha' }} />
    </Stack>
  );
}
