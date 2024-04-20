import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';

export default function Pesqdetail() {
  const navigation = useNavigation();

  const isPresented = navigation.canGoBack();

  const params = useLocalSearchParams();

  console.log('pesqdetail.13 ' + params);
  const pesquisa = JSON.parse(params.data);

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Stack.Screen options={{ headerShown: true, title: 'Pesquisa nº ' + pesquisa.key }} />
      <View>
        <Text>Titulo: {pesquisa.nome}</Text>
        <Text>{pesquisa.descricao}</Text>
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
