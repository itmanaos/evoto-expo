import { View, Text, Modal, Pressable, Alert, FlatList } from 'react-native';
import React, { Children, ComponentProps, PropsWithChildren } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { ITipoOcorrencia } from '@/database/interfaces/ITipoOcorrencias';
import { SelectCategoria } from '../SelectCategoria';
import { ScreenProps } from 'expo-router/build/views/Screen';

const modalVisible = false;

type Props = ScreenProps & {
  onRequestClose: () => void;
  listTipoCategories: ITipoOcorrencia[];
};

export function ModalCategorias({ listTipoCategories, onRequestClose, ...rest }: Props) {
  return (
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
  );
}
