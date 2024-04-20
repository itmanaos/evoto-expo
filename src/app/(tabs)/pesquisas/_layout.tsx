import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Pesquisas' }} />
      <Stack.Screen name="pesqdetail" options={{ headerShown: true, presentation: 'modal' }} />
    </Stack>
  );
}
