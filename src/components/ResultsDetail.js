import { Image, StyleSheet, Text, View } from 'react-native';

const ResultsDetail = ({ result }) => {
  const { image_url, name, rating, review_count } = result;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 130,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ResultsDetail;
