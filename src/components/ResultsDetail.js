import { Image, StyleSheet, Text, View } from 'react-native';

const ResultsDetail = ({ result }) => {
  const { image_url, name, rating, review_count } = result;
  return (
    <View>
      <Image style={styles.imgStyle} source={{ uri: image_url }} />
      <Text style={styles.nameStyle}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    height: 130,
    width: 250,
    borderRadius: 4,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ResultsDetail;
