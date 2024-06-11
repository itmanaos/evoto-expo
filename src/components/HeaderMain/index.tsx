import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const PlaceholderImage = require('src/assets/evoto.png');

type Props = TouchableOpacityProps & {
  name: string;
  //onPress: () => void;
};

export default function HeaderMain({ name, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoRow}>
          <Image source={PlaceholderImage} style={styles.image} />
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} {...rest}>
            <Feather name="log-out" size={30} color="#0b0b0b" style={{ marginRight: 5 }} />
          </TouchableOpacity>
        </View>

        <Text style={styles.wellcome}>Bem Vindo</Text>
        <Text style={styles.username}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingBottom: 12,
  },
  logoRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingTop: 16,
  },
  wellcome: {
    paddingTop: 18,
    fontWeight: 'bold',
    fontSize: 18,
  },
  username: {
    fontSize: 16,
  },
  buttonUser: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
  },
});
