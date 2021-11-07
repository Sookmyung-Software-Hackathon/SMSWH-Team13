import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import FlipCard from 'react-native-flip-card';
import * as Font from 'expo-font';


export default function TaroCardScreen() {
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(async () => {
        await Font.loadAsync({
            'IM_Hyemin-Regular': require('../../../assets/fonts/IM_Hyemin-Regular.ttf'),
            'IM_Hyemin-Bold': require('../../../assets/fonts/IM_Hyemin-Bold.ttf')

        });
        setFontLoaded(true);
    }, []);

    let cardTitle = "";
    let cardDetail = "";
    let cardImg = "";

    const r = Math.floor(Math.random() * 6) + 1;

    switch (r) {
        case 1: {
            cardTitle = "심판 카드"
            cardDetail = "부활을 상징하는 심판 카드를 뽑으셨군요. 이는 노력한 만큼의 결과를 얻게 될 거라는 메시지입니다. 새로운 소식을 듣게 되기도 하며 기다리던 연락을 받게 되기도 합니다. 혹시라도 기다리던 연락이 있다면 적극적으로 움직이세요. 만나고 싶은 사람이 있다면 연락을 취하세요. 만날 수 있는 날입니다.  이 카드의 핵심은 준비하지 않으면 아무것도 이룰 수 없다는 것입니다. 포기했거나 진행이 어려웠던 일에 대해서 한번의 기회가 더 주어지는 경우도 있습니다. 이 카드는 재생된 새로운 기회의 카드이며 그 기회는 내가 준비했던 만큼 주어진다는 이야기를 하고 있습니다."
            cardImg = "https://i.ibb.co/WGwk9qd/image.png"
            break;
        }
        case 2: {
            cardTitle = "월드 카드"
            cardDetail = "완성을 상징하는 월드카드를 뽑으셨습니다. 이 카드는 자신만의 세상을 구축하게 되는 카드입니다. 여기서 안주할 수도 있으며 더 나아갈 수도 있습니다. 결과는 모두 긍정입니다. 모든 것을 갖춘 카드이니 오늘 하루는 뜻한 바를 이룰 수 있는 날이 되겠군요. 스스로 만족할 만한 일들이 일어날 것입니다. 즐겁고 유쾌한 하루가 될 수도 있지만 편안하고 안락한 하루가 되기도 한다는 뜻입니다. 무엇을 하든 자신이 하고자 하는 일은 할 수 있게 됩니다. 다만 현재의 상황에서 더 발전된 것을 원한다면 매듭을 푸는 최소한의 노력은 있어야 합니다. 자신감을 가져도 좋은 하루입니다."
            cardImg = "https://i.ibb.co/k1xMkJP/image.png"
            break;
        }
        case 3: {
            cardTitle = "별 카드"
            cardDetail = "희망을 상징하는 별카드를 뽑으셨군요. 이 카드는 먼 목표를 세우는 카드입니다. 밝고 명랑한 카드지만 목표까지는 다소 시간이 걸리는 카드지요. 낭비나 사치하는 일이 생길 수도 있군요. 먼 목표를 두고 현재 너무 많은 것을 소모하는 것이 아닌가 하는 생각이 들기도 합니다. 마음은 차분한 하루입니다. 생각이 들 뜨지는 않네요. 마음은 순수하게 하루를 보내게 됩니다. 희망이 있으니 당장 이루지 못해도 실망하지는 않겠군요. 무언가 새로운 마음이 들기 시작하는 하루입니다. 새롭게 마음 먹거나 다짐을 하게 되는 하루입니다."
            cardImg = "https://i.ibb.co/bLXV1Ry/image.png"
            break;
        }
        case 4: {
            cardTitle = "마법사 카드"
            cardDetail = "매력과 새로운 창의력을 상징하는 1번카드를 뽑으셨습니다. 계획한 일이 있다면 긍정적으로 진행이 될 겁니다. 무한의 힘과 지혜도 있으니 이루지 못할 일이 없지요. 즐거운 일들이 생기게 됩니다. 원하는 일들이 일어날 것입니다. 매력이 있는 카드이며 나를 중심으로 사람들이 모이는 카드입니다. 인기가 있는 카드이니 중요한 역할을 하게 되거나 이야기의 중심에 서게 됩니다. 마음에 드는 상대를 만날 수도 있으며 새로운 일을 강하게 추진하게 되는 경우도 있습니다. 즐겁고 강한 에너지가 느껴지는 카드입니다."
            cardImg = "https://i.ibb.co/J7hfpWc/1.png"
            break;
        }
        case 5: {
            cardTitle = "여황제 카드"
            cardDetail = "풍요를 상징하는 카드를 뽑으셨습니다. 마음에 여유가 느껴지는 하루가 될 것입니다. 돈이 들어올 수도 있고 선물을 받을 수도 있으며 마음에 드는 사람에게 실속 있는 선물을 하게 되는 경우도 있습니다. 물질의 의미가 강한 카드여서 물질적으로 좋은 느낌을 갖게 됩니다. 매력이 있는 카드이니 새로운 사람을 만나게 되면 즐거운 자리를 가질 수 있습니다. 내가 있었으면 하는 자리가 생길 겁니다. 즐거운 일들이 생길 것이며 내가 돋보이는 하루가 될 것입니다. 새로운 계획을 세우는 것이 좋으며 지루하게 보내기에는 아까운 하루가 될 것입니다. 어느 자리에 참여해도 충분히 유쾌한 일들이 일어날 것입니다."
            cardImg = "https://i.ibb.co/NKh7k45/image.png"

            break;
        }
        case 6: {
            cardTitle = "전차 카드"
            cardDetail = "승리와 추진력을 상징하는 전차카드를 뽑으셨습니다. 성과를 올리는 카드이며 젊고 강인하고 패기가 넘치는 카드지요. 추진력이 강한 카드이니 마음먹은 일이 있다면 그대로 밀고 나가도 무방합니다. 이 카드는 행동하는 카드입니다. 뒤로 물러서는 법이 없지요. 무언가를 얻기 위해 노력해야 하는 일이 생길 것입니다. 그리고 노력한 대가는 얻을 수 있습니다. 몸도 마음도 분주한 하루가 되겠군요. 결국에는 자신이 얻은 것으로 인해 만족하는 하루가 될 것입니다."
            cardImg = "https://i.ibb.co/3p814HG/image.png"
            break;
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%' }}>
            <View style={styles.view}>
                <Text style={styles.text}>오늘의 운세를 확인해보세요!</Text>
            </View>
            <View style={styles.flipCardViewStyle}>
                <FlipCard>
                    {/* Face Side */}
                    <View style={styles.face}>
                        <ImageBackground source={{ uri: "https://i.ibb.co/61ZZvNg/face02.jpg" }} resizeMode="cover" style={styles.songFace} /></View>
                    {/* Back Side */}
                    <View style={styles.back}>
                        <ImageBackground source={{ uri: cardImg }} resizeMode="stretch" style={styles.imgBG}>
                            <View style={styles.in}>
                                <Text style={styles.title}>{cardTitle}</Text>
                                <Text style={styles.detail}>{cardDetail}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </FlipCard>
            </View>


        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'IM_Hyemin-Bold'
    },
    title: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        opacity: 1,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 40,
        fontFamily: 'IM_Hyemin-Bold'
    },
    detail: {
        marginTop: 50,
        fontSize: 17,
        textAlign: 'center',
        marginLeft: 15,
        fontWeight: "bold",
        fontFamily: 'IM_Hyemin-Regular'
    },
    view: {
        backgroundColor: 'skyblue',
        borderRadius: 20,
        width: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        padding: 10,
    },
    card: {
        backgroundColor: 'orange'
    },
    cardContainer: {
        backgroundColor: 'red'
    },
    face: {
        width: 300,
        height: 550,
        borderColor: 'white',
        borderWidth: 10,
        backgroundColor: '#2c439b',
        borderRadius: 20,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#595959',
        shadowRadius: 5,
        shadowOpacity: 0.6
    },
    back: {
        width: 300,
        height: 550,
        borderColor: 'white',
        borderWidth: 10,
        backgroundColor: '#EEEEEE',
        borderRadius: 20,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#595959',
        shadowRadius: 5,
        shadowOpacity: 0.6
    },
    flipCardViewStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 50
    },
    songFace: {
        width: '100%',
        height: 250,
        marginTop: 125
    },
    imgBG: {
        width: 260,
        height: 510,
        borderColor: 'white',
        borderWidth: 10,
    },
});