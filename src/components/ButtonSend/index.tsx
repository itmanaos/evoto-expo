import { PressableProps, View } from 'react-native';
import React from 'react';
import { Button } from '@/components/Button';
import { styles } from './styles';

type Props = PressableProps & {
  title: string;
  //   onPress: () => void;
  btnSend: boolean;
};

export function ButtonSend({ btnSend, title, ...rest }: Props) {
  return (
    <View style={styles.container}>
      {btnSend ? (
        <Button title={title} color="#2FDBBC" {...rest} />
      ) : (
        <Button title={title} color="gray" onPress={() => {}} />
      )}
    </View>
  );
}
