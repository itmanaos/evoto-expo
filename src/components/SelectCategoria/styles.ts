import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  categoryItem: {
    height: 80,
    backgroundColor: '',
    width: 80,
    borderRadius: 8,
    marginBottom: 8,
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
    alignItems: 'center',
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
