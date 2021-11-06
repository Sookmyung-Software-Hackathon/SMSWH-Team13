import React from 'react';
import { ImageBackground, Text, StyleSheet, View, Dimensions } from 'react-native';

const MAX_HEIGHT = Dimensions.get('window').height;
const StaticCard = ({ value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <ImageBackground source={{uri: 'https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0305.jpg'}} resizeMode="cover" style={styles.image}>
        <Text style={styles.cardText}>{value}</Text>
      </ImageBackground>
      </View>
    </View>
  );
};

export default StaticCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: MAX_HEIGHT / 7,
    marginTop: 10
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
    borderColor: 'white',
    borderWidth: 8,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  cardText: {
    fontSize: 40,
    color: '#000',
    fontWeight: '600',
  },
  image : {
    flex: 1,
    height: 100,
    width: '100%',
    justifyContent: "center"
  }
});
