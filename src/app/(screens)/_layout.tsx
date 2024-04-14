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
      <Stack.Screen name="atividades" options={{ title: 'Atividades', headerShown: true }} />
      <Stack.Screen name="equipes" options={{ title: 'Equipes', headerShown: false }} />
      <Stack.Screen name="ocorrencias" options={{ title: 'Ocorrencias', headerShown: false }} />
      <Stack.Screen name="pesquisa" options={{ title: 'Pesquisa', headerShown: false }} />
      <Stack.Screen name="urnas" options={{ title: 'Urnas', headerShown: false }} />
    </Stack>
  );
}
