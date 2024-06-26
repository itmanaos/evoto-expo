import { View, Text, Modal, Pressable, Alert, FlatList } from 'react-native';
import React, { PropsWithRef } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { ITipoOcorrencia } from '@/database/interfaces/ITipoOcorrencias';
import { SelectCategoria } from '../SelectCategoria';

interface ModalCategoriasProps {
  categTitle: string;
  headerTitle: string;
  onRequestClose: () => void;
  listTipoCategories: ITipoOcorrencia[];
}

export function ModalCategorias({
  categTitle,
  headerTitle,
  onRequestClose,
  listTipoCategories,
}: PropsWithRef<ModalCategoriasProps>) {
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <View style={styles.header}>
          <Text style={styles.headerCategTitle}>{categTitle}</Text>
          <Text style={styles.headerTitle}>{headerTitle}</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={listTipoCategories}
            numColumns={3}
            horizontal={false}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <SelectCategoria
                categ={item}
                itemKey={item.key}
                onPress={() => {
                  onRequestClose();
                }}
                styleSelect={[styles.categoryItem]}
                categoryItemStyle={[
                  {
                    height: 100,
                    backgroundColor: '#FFF',
                    width: 105,
                    padding: 4,
                    borderRadius: 10,
                  },
                ]}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
            columnWrapperStyle={{
              justifyContent: 'center',
            }}
          />
        </View>
        <View>
          <Pressable
            style={[styles.button]}
            onPress={() => {
              onRequestClose();
            }}
          >
            <Ionicons name="close" size={26} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
