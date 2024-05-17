import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { useNavigation } from 'expo-router';
import { membros } from '@/database/modals/membros';
import { Feather } from '@expo/vector-icons';
import { Input } from '@/components/Input';
import { useEffect, useState } from 'react';
import { IMembros } from '@/database/interfaces/IMembros';

export default function SelectSubCategModal() {
  const navigation = useNavigation();

  const isPresented = navigation.canGoBack();
  const [membrosList, setMembrosList] = useState<IMembros[]>(
    membros.sort((a, b) => a.nome.localeCompare(b.nome))
  );

  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    if (pesquisa.length > 0) {
      const newList = membros.filter((eleitor) =>
        eleitor.nome.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setMembrosList(newList);
    } else {
      setMembrosList(membros.sort((a, b) => a.nome.localeCompare(b.nome)));
    }
  }, [pesquisa]);

  function handlePesquisa(text: string) {
    setPesquisa(text);
  }

  function renderItem({ item }: ListRenderItemInfo<IMembros>) {
    return (
      <TouchableOpacity key={item.id} style={styles.membrosContent}>
        <Text style={styles.membrosListText}>{item.nome}</Text>
        <Text style={styles.membrosListText}>{item.celular}</Text>

        {item.status == 0 ? (
          <Feather name="user-check" size={20} color="#0c9400" style={{ marginRight: 15 }} />
        ) : (
          <Feather name="user-x" size={20} color="#f80606" style={{ marginRight: 15 }} />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
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
      <View style={styles.membrosCard}>
        <Text style={styles.membrosCardTitulo}>Lista de Membros</Text>
      </View>
      <FlatList
        data={membrosList}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        horizontal={false}
        contentContainerStyle={{
          width: '100%',
        }}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  membrosCard: {
    elevation: 1,
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
  },
  membrosCardTitulo: {
    fontSize: 18,
    paddingVertical: 4,
    borderBottomWidth: 1,
  },
  membrosContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  membrosListText: {
    fontSize: 16,
    paddingVertical: 8,
  },
});
