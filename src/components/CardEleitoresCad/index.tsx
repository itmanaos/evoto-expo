import { View, Text, Pressable, PressableProps } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
type Props = PressableProps & {
  title?: string;
  cadastrados: number;
  onPress: () => void;
  color?: string;
};
export default function CardEleitoresCad({ title, cadastrados, onPress, color, ...rest }: Props) {
  return (
    <Pressable {...rest} onPress={onPress}>
      <View style={{ alignItems: 'center' }}>
        <Feather name="users" size={80} color={color} style={{ marginRight: 15 }} />
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 22 }}>{cadastrados}</Text>
      </View>
    </Pressable>
  );
}
