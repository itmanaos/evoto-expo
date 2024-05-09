import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { IEleitoresForm } from '@/database/interfaces/IEleitoresForm';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

export default function Cadeleitores() {
  function sendSubmit(data: IEleitoresForm) {
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Tabs.Screen
        options={{
          headerShown: true,
          title: 'Novo Eleitor',
        }}
      />
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 50,
  },
});
