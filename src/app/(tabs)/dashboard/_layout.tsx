import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Painel',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="tags" color={color} size={size} />;
            }
            return <FontAwesome name="tag" color={color} size={size / 1.5} />;
          },
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          headerShown: false,
          title: 'Painel',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="tags" color={color} size={size} />;
            }
            return <FontAwesome name="tag" color={color} size={size / 1.5} />;
          },
        }}
      />
    </Tabs>
  );
}
