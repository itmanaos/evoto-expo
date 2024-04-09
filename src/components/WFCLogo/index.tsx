import { StyleSheet, Image, View } from 'react-native';
import React from 'react';

export default function WFCLogo() {
  return (
    <View style={styles.containerWfclogo}>
      <Image source={require('src/assets/wfclogo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerWfclogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
