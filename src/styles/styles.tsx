import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0f0f0',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 6,
    padding: 10,
  },
  textLink: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  btnSubmit: {
    backgroundColor: '#2FDBBC',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 6,
  },
  textSubmit: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  textSubButton: {
    color: '#2FDBBC',
    fontSize: 15,
    fontWeight: 'bold',
  },
  errText: {
    color: 'red',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    display: 'none',
  },
});
