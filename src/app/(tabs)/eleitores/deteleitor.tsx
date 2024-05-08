import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';

import { IEleitores } from '@/database/interfaces/IEleitores';

export default function DetEleitor() {
  const navigation = useNavigation();

  const isPresented = navigation.canGoBack();

  const params = useLocalSearchParams();

  console.log('deteleitor.13 ' + params);
  const eleitor = JSON.parse(params.data);

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Stack.Screen options={{ headerShown: true, title: 'Eleitor nº ' + eleitor.id }} />
      <View>
        <Text>Titulo: {eleitor.nome}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
