import { StyleSheet, Text, View } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEE',
  },
});

export default SearchBar;
