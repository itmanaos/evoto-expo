import { View, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react';
import { categorias } from '@/database/modals/categorias';
import { ICategory } from '@/database/interfaces/ITipoOcorrencias';
import { SelectCategoria } from '@/components/SelectCategoria';
import { router, useNavigation } from 'expo-router';
import { IMarker } from '@/database/interfaces/IMarker';

export default function Denuncias() {
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(categorias[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  //console.log('denuncias.28 - ' + categorias.length);

  function handleSelectCategory(category: ICategory) {
    setSelectedCategory(category);
    router.push({
      pathname: '/denuncias/selectsubcateg',
      params: {
        categTitle: category.label,
        categkey: category?.key,
      },
    });
  }

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
                  handleSelectCategory(item);
                }}
                styleSelect={[styles.categoryItem]}
                categoryItemStyle={[
                  {
                    height: 80,
                    width: 80,
                  },
                ]}
              />
            )}
          />
        </View>
      </SafeAreaView>
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
