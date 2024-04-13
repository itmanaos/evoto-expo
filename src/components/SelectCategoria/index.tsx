import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';
import { ICategory } from '@/database/interfaces/ITipoOcorrencias';

interface SelectCategoriaPropos {
  categ: ICategory;
  onPress: () => void;
  styleSelect: StyleProp<ViewStyle>;
  categoryItemStyle: StyleProp<ViewStyle>;
}

export function SelectCategoria({
  categ,
  onPress,
  styleSelect,
  categoryItemStyle,
}: SelectCategoriaPropos) {
  return (
    <View style={[styles.categoryItem, categoryItemStyle]}>
      <TouchableOpacity onPress={onPress} style={styleSelect} key={categ.key}>
        <Image style={styles.categoryImage} source={categ.icon} />
        <Text style={styles.categoryText}>{categ.label}</Text>
      </TouchableOpacity>
    </View>
  );
}
