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
      <Stack.Screen name="index" options={{ title: 'Bem Vindo' }} />
      <Stack.Screen name="atividades/index" options={{ title: 'Atividades' }} />
      <Stack.Screen name="equipes/index" options={{ title: 'Equipes' }} />
      <Stack.Screen name="ocorrencias/index" options={{ title: 'Ocorrencias' }} />
      <Stack.Screen name="pesquisa/index" options={{ title: 'Pesquisa' }} />
      <Stack.Screen name="urnas/index" options={{ title: 'Urnas' }} />
      <Stack.Screen name="signin/index" options={{ title: 'Login' }} />

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
