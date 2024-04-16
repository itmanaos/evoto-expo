import { View, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react';
import { categorias } from '@/database/modals/categorias';
import { tipoOcorrencias } from '@/database/modals/tipoOcorrencias';
import { ICategory } from '@/database/interfaces/ITipoOcorrencias';
import { SelectCategoria } from '@/components/SelectCategoria';
import { ModalCategorias } from '@/components/ModalCategorias';

export interface IMarker {
  category: string;
  contact: string;
  description: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

export default function Denuncias() {
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(categorias[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  //console.log('denuncias.28 - ' + categorias.length);

  return (
    <>
      <SafeAreaView style={styles.background}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -3.07246642073,
            longitude: -59.9899985551,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: -3.07246642073,
              longitude: -59.9899985551,
            }}
          />
        </MapView>
        <View style={styles.categoryContainer}>
          <FlatList
            data={categorias}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}
            renderItem={({ item }) => (
              <SelectCategoria
                itemKey={item.key}
                categ={item}
                onPress={() => {
                  setSelectedCategory(item);
                  toggleModal();
                }}
                styleSelect={[styles.categoryItem]}
                categoryItemStyle={[
                  {
                    height: 80,
                    //backgroundColor: 'transparent',
                    width: 80,
                  },
                ]}
              />
            )}
          />
        </View>
      </SafeAreaView>

      <ModalCategorias
        headerTitle="Selecione o Tipo de Ocorrência"
        categTitle={selectedCategory.label}
        onRequestClose={toggleModal}
        modalVisible={modalVisible}
        listTipoCategories={tipoOcorrencias.filter((tipo) => tipo.categ === selectedCategory?.key)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
    marginTop: StatusBar.currentHeight || 0,
  },
  map: {
    flex: 5,
    width: '100%',
    height: '100%',
  },
  categoryContainer: {
    position: 'absolute',
    top: 0,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    height: 80,
    backgroundColor: '',
    width: 80,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
  selectedCategory: {
    backgroundColor: '#000',
  },
  selectedCategoryText: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    borderColor: '#322153',
  },
  unSelectedCategoryText: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});
