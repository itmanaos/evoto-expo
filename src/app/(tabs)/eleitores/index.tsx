import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Pressable,
  ListRenderItemInfo,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Tabs, router } from 'expo-router';
import { eleitores } from '@/database/modals/eleitores';
import { IEleitores } from '@/database/interfaces/IEleitores';
import { Feather } from '@expo/vector-icons';
import { Input } from '@/components/Input';
import CardEleitoresCad from '@/components/CardEleitoresCad';

export default function Eleitores() {
  const [eleitorSelected, setEleitorSelected] = useState<IEleitores>();
  const [eleitoresList, setEleitoresList] = useState<IEleitores[]>(
    eleitores.sort((a, b) => a.nome.localeCompare(b.nome)).filter((eleitor) => eleitor.status == 1)
  );
  const [eleitoresListBase, setEleitoresListBase] = useState<IEleitores[]>(eleitoresList);

  const [pesquisa, setPesquisa] = useState('');

  const totCadastrados = eleitores.filter((eleitor) => eleitor.status == 1).length;
  const totEmCadastro = eleitores.filter((eleitor) => eleitor.status == 0).length;

  useEffect(() => {
    if (pesquisa.length > 0) {
      const newList = eleitoresListBase.filter((eleitor) =>
        eleitor.nome.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setEleitoresList(newList);
    } else {
      setEleitoresList(eleitoresListBase);
    }
  }, [pesquisa]);

  function handlePesquisa(text: string) {
    setPesquisa(text);
  }

  function handleSelectPesquisa(eleitor: IEleitores) {
    setEleitorSelected(eleitor);
    router.push({
      pathname: '/eleitores/deteleitor',
      params: {
        data: JSON.stringify(eleitor),
      },
    });
  }

  function setListCadastrados() {
    const listBase = eleitores
      .sort((a, b) => a.nome.localeCompare(b.nome))
      .filter((eleitor) => eleitor.status == 1);
    setEleitoresListBase(listBase);
    setEleitoresList(listBase);
  }
  function setListEmCadastro() {
    const listBase = eleitores
      .sort((a, b) => a.nome.localeCompare(b.nome))
      .filter((eleitor) => eleitor.status == 0);
    setEleitoresListBase(listBase);
    setEleitoresList(listBase);
  }

  function addEleitor() {
    router.push('/eleitores/cadeleitores');
  }

  function renderItem({ item }: ListRenderItemInfo<IEleitores>) {
    return (
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
    );
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginVertical: 8,
          marginHorizontal: 15,
          borderColor: '#2FDBBC',
          borderWidth: 2,
          borderRadius: 10,
        }}
      >
        <CardEleitoresCad
          title="CADASTRADOS"
          cadastrados={totCadastrados}
          color="#0000fa"
          onPress={setListCadastrados}
        />

        <CardEleitoresCad
          title="PENDENTES"
          cadastrados={totEmCadastro}
          color="#ff0000"
          onPress={setListEmCadastro}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          alignItems: 'center',
          marginHorizontal: 15,
          marginBottom: 6,
        }}
      >
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
