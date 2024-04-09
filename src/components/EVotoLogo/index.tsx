import { StyleSheet, Image, View } from 'react-native';
import React from 'react';

export default function EVotoLogo() {
  return (
    <View style={styles.containerLogo}>
      <Image source={require('src/assets/evoto.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
});
