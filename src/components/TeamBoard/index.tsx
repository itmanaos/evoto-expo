import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

export default function TeamBoard() {
  return (
    <View style={styles.container}>
      <View style={styles.lineContent}>
        <View style={styles.equipeCard}>
          <Text style={styles.equipeCardTitulo}>Você faz parte da Equipe:</Text>
          <Text style={styles.equipeCardText}>NUMERO - NOME DA EQUIPE:</Text>
        </View>
        <View style={styles.statusContent}>
          <Text style={styles.titulo}>Seu Status</Text>
          <Feather name="wifi" size={50} color="green" />
        </View>
      </View>

      <View style={styles.coordenadorCard}>
        <Text style={styles.coordenadorCardTitulo}>Coordenador da sua Equipe: </Text>
        <Text style={styles.coordenadorCardText}>Nome: </Text>
        <Text style={styles.coordenadorCardText}>Email: </Text>
        <Text style={styles.coordenadorCardText}>Telefone: </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  statusContent: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  titulo: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  lineContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  equipeCard: {},
  equipeCardTitulo: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  equipeCardText: {
    fontSize: 14,
    textAlign: 'center',
  },
  coordenadorCard: {},
  coordenadorCardTitulo: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  coordenadorCardText: {
    fontSize: 14,
  },
});
