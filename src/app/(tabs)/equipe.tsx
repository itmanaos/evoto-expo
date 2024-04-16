import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React from 'react';

export default function Equipe() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Equipe</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor: '#3D6DCC',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: 1,
    marginBottom: 8,
  },
});
