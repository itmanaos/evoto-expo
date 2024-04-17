import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'dashboard' }} />
      <Stack.Screen name="selectsubcateg" options={{ headerShown: false, presentation: 'modal' }} />
    </Stack>
  );
}
