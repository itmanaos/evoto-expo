import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '95%',
    //maxWidth: 350,
    borderRadius: 10,
    padding: 0,
    margin: 10,
  },
  inlineContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  qtdeline: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  headerText: {
    fontSize: 16,
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
    marginTop: 10,
    textAlign: 'center',
  },
  textContent: {
    fontSize: 12,
    textAlign: 'center',
  },
  status: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
