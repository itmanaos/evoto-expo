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
      <Stack.Screen name="atividades" options={{ title: 'Atividades' }} />
      <Stack.Screen name="equipes" options={{ title: 'Equipes' }} />
      <Stack.Screen name="ocorrencias" options={{ title: 'Ocorrencias' }} />
      <Stack.Screen name="pesquisa" options={{ title: 'Pesquisa' }} />
      <Stack.Screen name="urnas" options={{ title: 'Urnas' }} />
    </Stack>
  );
}
