import { FlatList, SafeAreaView, StyleSheet, View, ListRenderItemInfo } from 'react-native';
import React, { useState } from 'react';
import CardPesquisa from '@/components/CardPesquisa';

import { pesquisas } from '@/database/modals/pesquisas';
import { IPesquisas } from '@/database/interfaces/IPesquisas';
import { Tabs, router } from 'expo-router';

export default function Pesquisas() {
  const [pesquisaSelected, setPesquisaSelected] = useState<IPesquisas>();

  function handleSelectPesquisa(pesquisa: IPesquisas) {
    setPesquisaSelected(pesquisa);
    console.log('pesquisas.14 ' + pesquisa.nome);
    router.push({
      pathname: '/pesquisas/pesqdetail',
      params: {
        data: JSON.stringify(pesquisa),
      },
    });
  }
  function renderItem({ item }: ListRenderItemInfo<IPesquisas>) {
    return (
      <CardPesquisa
        pesq={item}
        onPress={() => {
          handleSelectPesquisa(item);
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Tabs.Screen
        options={{
          headerShown: true,
          title: 'Pesquisas',
        }}
      />
      <FlatList
        data={pesquisas}
        keyExtractor={(item) => item.key.toString()}
        numColumns={1}
        horizontal={false}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
