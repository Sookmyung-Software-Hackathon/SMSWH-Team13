import React from 'react';
import { Text, StyleSheet, View, Dimensions, ImageBackground } from 'react-native';


const MAX_HEIGHT = Dimensions.get('window').height;
const StaticCard = ({ value }) => {
  let imageURI = "";
  switch (value) {
    case 1: imageURI = "https://i.ibb.co/m6FKk7V/college-mascot-0301.jpg";
      break;
    case 2: imageURI = "https://i.ibb.co/bmcgjcv/college-mascot-0302.jpg";
      break;
    case 3: imageURI = "https://i.ibb.co/PhRx97D/college-mascot-0303.jpg";
      break;
    case 4: imageURI = "https://i.ibb.co/mR0bJHD/college-mascot-0304.jpg";
      break;
    case 5: imageURI = "https://i.ibb.co/wzVJwcv/college-mascot-0305.jpg";
      break;
    case 6: imageURI = "https://i.ibb.co/yVbNyhc/college-mascot-0306.jpg";
      break;
    case 7: imageURI = "https://i.ibb.co/MkpFb7D/college-mascot-0307.jpg";
      break;
    case 8: imageURI = "https://i.ibb.co/fxv53Mg/college-mascot-0308.jpg";
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground source={{ uri: imageURI }} resizeMode="cover" style={styles.image}>
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

  image: {
    flex: 1,
    height: 100,
    width: '100%',
    justifyContent: "center"
  }
});