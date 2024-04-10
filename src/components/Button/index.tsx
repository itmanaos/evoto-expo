import { Pressable, PressableProps, Text } from 'react-native';

import { styles } from './styles';

type Props = PressableProps & {
  title: string;
  //   onPress: () => void;
  color: string;
};

export function Button({ title, color, ...rest }: Props) {
  return (
    <Pressable style={[styles.container, { backgroundColor: color }]} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
