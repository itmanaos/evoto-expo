import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Cadastro de Eleitores', headerShown: true }} />
      <Stack.Screen
        name="caddocseleitores"
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Stack.Screen name="cadeleitores" options={{ headerShown: false, presentation: 'modal' }} />
      <Stack.Screen name="deteleitor" options={{ headerShown: false, presentation: 'modal' }} />
      <Stack.Screen
        name="cadinfoeleitores"
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Stack.Screen
        name="cadfichaeleitor"
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Stack.Screen name="fichaeleitor" options={{ headerShown: false }} />
    </Stack>
  );
}
