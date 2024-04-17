import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { ModalCategorias } from '@/components/ModalCategorias';
import { tipoOcorrencias } from '@/database/modals/tipoOcorrencias';

export default function SelectSubCategModal() {
  const navigation = useNavigation();

  const isPresented = navigation.canGoBack();

  const { categTitle, categkey } = useLocalSearchParams();

  console.log('select.16' + categTitle);
  console.log('select.17' + categkey);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerCategTitle}>{categTitle}</Text>
          <Text style={styles.headerTitle}>Selecione o Tipo de Ocorrência</Text>
        </View>
        <ModalCategorias
          onRequestClose={() => {
            navigation.goBack();
          }}
          listTipoCategories={tipoOcorrencias.filter((tipo) => tipo.categ === categkey)}
        />
        <View>
          <Button title="CANCELAR" color="#2FDBBC" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  headerCategTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    //flexDirection: 'row',
    //flexWrap: 'wrap',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCategoryText: {
    backgroundColor: '#fFF',
    // borderWidth: 1,
    borderColor: '#322153',
  },
});
