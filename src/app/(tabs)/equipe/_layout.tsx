import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Painel da Equipe', headerShown: true }} />
      <Stack.Screen
        name="listequipe"
        options={{ headerShown: true, title: 'Equipe', presentation: 'modal' }}
      />
    </Stack>
  );
}
