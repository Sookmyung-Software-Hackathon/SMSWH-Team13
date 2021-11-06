import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, FlatList, View, StyleSheet, Alert, Text, ImageBackground } from 'react-native';
import FlippableCard from '../common/FlippableCard';

import { startGame, selectItem } from '../../store/game';
import StaticCard from '../common/StaticCard';
import PrimaryButton from '../common/PrimaryButton';
import CounterText from '../common/CounterText';
import ErrorScreen from './ErrorScreen';
import TotalCardScreen from './TotalCardScreen';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const GameScreen = () => {
  const dispatch = useDispatch();
  const { data: items, totalSteps, won, error } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  const handleTouch = (item) => () => dispatch(selectItem(item));

  const renderCard = (item) => {
    if (item.matched) return <StaticCard value={item.value} />;
    return <FlippableCard hiddenValue={item.value} onTouch={handleTouch(item)} remainOpen={item.selected} />;
  };

  const handleResetGame = () => Alert.alert('다시 시작하기', '다시 시작하시겠습니까? \n모든 데이터가 리셋됩니다.', [{ text: 'Yes', onPress: () => dispatch(startGame()) }, { text: 'No' }]);

  const showWonAlert = () => Alert.alert('축하합니다!', `송이는 ${totalSteps} 번만에 모든 눈송이 그림을 맞추었습니다!`,
    [{ text: '다시 시작하기', onPress: () => dispatch(startGame()) }]);

  if (error) return <ErrorScreen />;

  if (won) showWonAlert();

  return (
    <View style={styles.gameScreen}>
      <View style={styles.headerContainer}>
        <PrimaryButton onPress={handleResetGame} text="Reset Game" />
        <CounterText count={totalSteps} />
      </View>
      <FlatList keyExtractor={(item) => item.id} data={items} renderItem={({ item }) => renderCard(item)} numColumns={4} style={styles.flatList} />
      <TouchableOpacity>
      <ImageBackground source={{ uri: "https://i.ibb.co/WP5mwMM/noon-Song-Head.png" }} resizeMode="cover" style={styles.buttonStyle}/>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    marginHorizontal: 10,
    flexGrow: 1,
    marginTop: 50
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  flatList: {
    flex: 10,
  },
  buttonStyle: {
    marginBottom: 50,
    marginLeft: '42%',
    width: 50,
    height: 50
  },
});
