import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
