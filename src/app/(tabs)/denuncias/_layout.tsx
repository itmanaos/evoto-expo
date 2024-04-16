import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'dashboard' }} />
      <Stack.Screen
        name="select-subcateg"
        options={{
          // Set the presentation mode to modal for our modal route.
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
