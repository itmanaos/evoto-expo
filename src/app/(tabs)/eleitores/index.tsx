import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Tabs, router } from 'expo-router';
import { eleitores } from '@/database/modals/eleitores';
import { IEleitores } from '@/database/interfaces/IEleitores';
import { Feather } from '@expo/vector-icons';
import { Input } from '@/components/Input';

export default function Eleitores() {
  const [eleitorSelected, setEleitorSelected] = useState<IEleitores>();
  const [eleitoresList, setEleitoresList] = useState<IEleitores[]>(
    eleitores.sort((a, b) => a.nome.localeCompare(b.nome))
  );
  const [pesquisa, setPesquisa] = useState('');

  function handlePesquisa(text: string) {
    setPesquisa(text);
  }

  useEffect(() => {
    if (pesquisa.length > 0) {
      const newList = eleitores.filter((eleitor) =>
        eleitor.nome.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setEleitoresList(newList);
    } else {
      setEleitoresList(eleitores);
    }
  }, [pesquisa]);

  function handleSelectPesquisa(eleitor: IEleitores) {
    setEleitorSelected(eleitor);
    router.push({
      pathname: '/eleitores/deteleitor',
      params: {
        data: JSON.stringify(eleitor),
      },
    });
  }

  function addEleitor() {
    router.push('/eleitores/cadeleitores');
  }

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Tabs.Screen
        options={{
          headerShown: true,
          title: 'Cadastro de Eleitores',
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Pressable>
                <Feather name="refresh-ccw" size={30} color="#070707" style={{ marginRight: 15 }} />
              </Pressable>
              <Pressable onPress={addEleitor}>
                <Feather name="user-plus" size={30} color="#0b0b0b" style={{ marginRight: 5 }} />
              </Pressable>
            </View>
          ),
        }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
        <Feather name="search" size={30} color="#070707" style={{ marginRight: 15 }} />
        <Input
          placeholder="Nome a Pesquisar"
          autoCorrect={false}
          onChangeText={setPesquisa}
          value={pesquisa}
        />
      </View>
      <View style={styles.headerList}>
        <Text style={styles.headerText}>NOME</Text>
        <Text style={styles.headerText}>STATUS</Text>
      </View>

      <FlatList
        data={eleitoresList}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        horizontal={false}
        contentContainerStyle={{
          width: '100%',
        }}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} style={styles.container}>
            <View style={styles.inlineContent}>
              <Text style={styles.itemListText}> {item.nome}</Text>
              {item.status == 1 ? (
                <Feather name="user-check" size={20} color="#0000fa" />
              ) : (
                <Feather name="user-x" size={20} color="#ff0000" />
              )}
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    backgroundColor: '#fff',
    padding: 8,
  },
  headerList: {
    backgroundColor: '#2FDBBC',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  inlineContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemListText: {
    fontSize: 14,
  },
});
