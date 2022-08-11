import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar onTermChange={(newTerm) => setTerm(newTerm)} term={term} />
      <Text>Search screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
