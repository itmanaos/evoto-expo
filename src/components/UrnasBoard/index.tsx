import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

export default function UrnasBoard() {
  return (
    <View style={styles.content}>
      <View style={styles.lineContent}>
        <View style={styles.localContent}>
          <Text style={styles.titulo}>Você esta lotado na:</Text>
          <View style={styles.sessaoContent}>
            <Text style={styles.text}>Sessão: 999</Text>
            <Text style={styles.text}>Zona: 999</Text>
          </View>
        </View>
        <View style={styles.statusContent}>
          <Text style={styles.titulo}>Seu Status</Text>
          <Feather name="wifi" size={50} color="green" />
        </View>
      </View>
      <View style={styles.lineContent}>
        <View style={styles.enderecoContent}>
          <Text style={styles.titulo}>Localizado na:</Text>
          <Text style={styles.text}>Escola.... </Text>
          <Text style={styles.text}>Sala...</Text>
        </View>
        <View style={styles.horarioContent}>
          <View style={styles.horario}>
            <Text style={styles.titulo}>Abertura</Text>
            <Text style={styles.text}>07:00hs</Text>
          </View>
          <View style={styles.horario}>
            <Text style={styles.titulo}>Encerramento</Text>
            <Text style={styles.text}>17:00hs</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  localContent: {
    flex: 3,
    textAlign: 'center',
    alignItems: 'center',
  },
  sessaoContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  enderecoContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  horarioContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horario: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContent: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  titulo: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
