import { View, Text, Modal, Pressable, Alert } from 'react-native';
import React, { Children, PropsWithChildren } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { ITipoOcorrencia } from '@/database/interfaces/ITipoOcorrencias';
import { SelectCategoria } from '../SelectCategoria';

const modalVisible = false;

interface ModalCategoriasProps {
  modalVisible: boolean;
  categTitle: string;
  headerTitle: string;
  onRequestClose: () => void;
  listTipoCategories: ITipoOcorrencia[];
}

export function ModalCategorias({
  modalVisible,
  categTitle,
  headerTitle,
  onRequestClose,
  listTipoCategories,
  children,
}: PropsWithChildren<ModalCategoriasProps>) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onRequestClose();
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.headerCategTitle}>{categTitle}</Text>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
          </View>
          <View style={styles.content}>
            {listTipoCategories.map((item, k) => (
              <SelectCategoria
                categ={item}
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
            ))}
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
    </Modal>
  );
}
