import { Alert, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CardPesquisa from '@/components/CardPesquisa';

import { pesquisas } from '@/database/modals/pesquisas';
import { IPesquisas } from '@/database/interfaces/IPesquisas';

export default function Pesquisas() {
  const [pesquisaSelected, setPesquisaSelected] = useState<IPesquisas>();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pesquisas}
        keyExtractor={(item) => item.key.toString()}
        numColumns={1}
        horizontal={false}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        renderItem={({ item }) => (
          <CardPesquisa
            pesq={item}
            onPress={() => {
              setPesquisaSelected(item);
              Alert.alert('Item Selecionado ' + item.key);
            }}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
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
