import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="home" color={color} size={size} />;
            }
            return <FontAwesome name="home" color={color} size={size / 1.5} />;
          },
        }}
      />
      <Tabs.Screen
        name="eleitores"
        options={{
          headerShown: false,
          title: 'Eleitores',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="user" color={color} size={size} />;
            }
            return <FontAwesome name="user" color={color} size={size / 1.5} />;
          },
        }}
      />
      <Tabs.Screen
        name="denuncias"
        options={{
          headerShown: false,
          title: 'Denuncias',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="home" color={color} size={size} />;
            }
            return <FontAwesome name="home" color={color} size={size / 1.5} />;
          },
        }}
      />
      <Tabs.Screen
        name="pesquisas"
        options={{
          headerShown: false,
          title: 'Pesquisas',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="home" color={color} size={size} />;
            }
            return <FontAwesome name="home" color={color} size={size / 1.5} />;
          },
        }}
      />
      <Tabs.Screen
        name="equipe"
        options={{
          headerShown: false,
          title: 'Equipe',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="home" color={color} size={size} />;
            }
            return <FontAwesome name="home" color={color} size={size / 1.5} />;
          },
        }}
      />
    </Tabs>
  );
}
