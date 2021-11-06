import React, { useRef, useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, Animated, Dimensions, ImageBackground } from 'react-native';

// const imageURI="https://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/college_mascot_0305.jpg"


const MAX_HEIGHT = Dimensions.get('window').height;
const FlippableCard = ({ hiddenValue, onTouch, remainOpen = false }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [disabled, setDisabled] = useState(false);

  let imageURI=""; 
  switch(hiddenValue){
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

  useEffect(() => {
    if (!remainOpen && animatedValue._value >= 90) {
      setDisabled(false);
      flipBack();
    }
  });

  const frontAnimatedStyle = () => {
    const frontInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    return { transform: [{ rotateY: frontInterpolate }] };
  };

  const backAnimatedStyle = () => {
    const backInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
    return { transform: [{ rotateY: backInterpolate }] };
  };

  const popoutAnimationStyle = () => {
    const popInterpolate = animatedValue.interpolate({
      inputRange: [0, 90, 180],
      outputRange: [0, -5, 0],
    });
    return { top: popInterpolate };
  };

  const flipCard = () => {
    setDisabled(true);
    Animated.timing(animatedValue, {
      toValue: 180,
      duration: 500,
    }).start(onTouch);
  };

  const flipBack = () => {
    if (!remainOpen) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 250,
      }).start();
    }
  };

  return (
    <TouchableOpacity onPress={flipCard} style={styles.container} disabled={disabled}>
      <Animated.View style={[styles.flipCard, styles.flipCardFront, popoutAnimationStyle(), frontAnimatedStyle()]}>
        <Text style={styles.flipTextFront}>?</Text>
      </Animated.View>
      <Animated.View style={[styles.flipCard, styles.flipCardBack, popoutAnimationStyle(), backAnimatedStyle()]}>
        <ImageBackground source={{uri: imageURI}} resizeMode="cover" style={styles.image}>
          <Text style={styles.flipTextBack}></Text>
        </ImageBackground>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default FlippableCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: MAX_HEIGHT / 7,
    marginTop: 10
  },
  flipCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
    borderColor: 'white',
    borderWidth: 8,
    backgroundColor: '#0009C4',
    transform: [{ perspective: 2000 }],
    borderRadius: 20,
  },
  flipCardBack: {
    position: 'absolute',
    backgroundColor: '#fff',
  },
  flipTextFront: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '600',
  },
  flipTextBack: {
    fontSize: 40,
    fontWeight: '600',
  },
  image : {
    flex: 1,
    height: 100,
    width: '100%',
    justifyContent: "center"
  }
});