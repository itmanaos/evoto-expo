import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import { Tabs, router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { comunicados } from '@/database/modals/comunicados';
import { IComunicados } from '@/database/interfaces/IComunicados';

export default function Equipe() {
  const showTeam = () => {
    router.push({
      pathname: '/equipe/listequipe',
    });
  };

  function renderItem({ item }: ListRenderItemInfo<IComunicados>) {
    return (
      <TouchableOpacity key={item.id} style={styles.comunicadosBody}>
        <View style={styles.comunicadosContent}>
          <View style={styles.comunicadosAssunto}>
            <Text style={styles.comunicadosDataText}>{item.data}</Text>
            <Text style={styles.comunicadosAssuntoText}>{item.assunto}</Text>
          </View>
          <View style={styles.comunicadosContent}>
            {item.status == 0 ? (
              <Feather name="book-open" size={20} color="#070707" style={{ marginRight: 15 }} />
            ) : (
              <Feather name="book" size={20} color="#070707" style={{ marginRight: 15 }} />
            )}

            {item.categoria == 0 ? (
              <Feather name="globe" size={20} color="#070707" style={{ marginRight: 15 }} />
            ) : (
              <Feather name="users" size={20} color="#070707" style={{ marginRight: 15 }} />
            )}
          </View>
        </View>
        <Text style={styles.comunicadoText}>{item.texto}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Tabs.Screen
        options={{
          headerShown: true,
          title: 'Painel da Equipe',
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Pressable onPress={showTeam}>
                <Feather name="users" size={30} color="#0b0b0b" style={{ marginRight: 5 }} />
              </Pressable>
            </View>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Olá Wilkens,</Text>
        <View style={styles.equipeCard}>
          <Text style={styles.equipeCardTitulo}>Você faz parte da Equipe:</Text>
          <Text style={styles.equipeCardText}>NUMERO - NOME DA EQUIPE:</Text>
        </View>
        <View style={styles.coordenadorCard}>
          <Text style={styles.coordenadorCardTitulo}>Coordenador da sua Equipe: </Text>
          <Text style={styles.coordenadorCardText}>Nome: </Text>
          <Text style={styles.coordenadorCardText}>Email: </Text>
          <Text style={styles.coordenadorCardText}>Telefone: </Text>
        </View>
      </View>
      <FlatList
        ListHeaderComponent={
          <View style={styles.comunicadosCard}>
            <Text style={styles.comuicadosCardTitulo}>Comunicados</Text>
          </View>
        }
        data={comunicados}
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
    margin: 8,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  equipeCard: {
    elevation: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#2FDBBC',
    borderWidth: 2,
    shadowColor: '#000',
  },
  equipeCardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  equipeCardText: {
    fontSize: 20,
    paddingVertical: 4,
    textAlign: 'center',
  },
  coordenadorCard: {
    elevation: 1,
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#2FDBBC',
    borderWidth: 2,
    shadowColor: '#000',
  },
  coordenadorCardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  coordenadorCardText: {
    fontSize: 20,
  },
  comunicadosCard: {
    elevation: 1,
    padding: 10,
    borderRadius: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
  },
  comuicadosCardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#2FDBBC',
  },
  comunicadoCardListText: {
    fontSize: 18,
  },
  comunicadosBody: {
    justifyContent: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2FDBBC',
    backgroundColor: '#fff',
  },
  comunicadosContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  comunicadosAssunto: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  comunicadosDataText: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  comunicadosAssuntoText: {
    fontStyle: 'italic',
    fontSize: 18,
  },
  comunicadoText: {
    fontSize: 14,
  },
});
