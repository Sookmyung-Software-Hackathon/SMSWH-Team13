import React from 'react';
import { Text, StyleSheet, View, Dimensions, ImageBackground } from 'react-native';


const MAX_HEIGHT = Dimensions.get('window').height;
const StaticCard = ({ value }) => {
  let imageURI="";
    switch(value){
      case 1: imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0305.jpg";
        break;
      case 2: imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0301.jpg";
        break;
      case 3: imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0302.jpg";
        break;
      case 4: imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0303.jpg";
        break;
      case 5: imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0304.jpg";
        break;
      case 6: imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0306.jpg";
        break;
      case 7: imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0307.jpg";
        break;
      case 8: imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0308.jpg";
        break;
    }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <ImageBackground source={{uri: imageURI}} resizeMode="cover" style={styles.image}>
        <Text style={styles.cardText}></Text>
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