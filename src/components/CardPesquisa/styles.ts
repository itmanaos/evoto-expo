import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    maxWidth: 350,
    borderRadius: 10,
    padding: 0,
    margin: 10,
  },
  qtdeline: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textTitulo: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSubtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    borderTopColor: '#000',
    borderColor: '#000',
    borderTopWidth: 1,
    marginTop: 10,
    textAlign: 'center',
  },
  textContent: {
    fontSize: 12,
    textAlign: 'center',
  },
});