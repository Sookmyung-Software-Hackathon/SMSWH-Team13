import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,ImageBackground } from 'react-native'
import FlipCard from 'react-native-flip-card';
export default function TaroCardScreen() {

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%' }}>
            <View style={styles.view}>
                <Text style={styles.text}>오늘의 운세를 확인해보세요!</Text>
            </View>
            <View style={styles.flipCardViewStyle}>
                <FlipCard>
                    {/* Face Side */}
                    <View style={styles.face}>
                    <ImageBackground source={{ uri: "https://i.ibb.co/xhcwvJ8/Face.jpg" }} resizeMode="cover" style={styles.songFace} />
                    </View>
                    {/* Back Side */}
                    <View style={styles.back}>
                        <Text>The Back</Text>
                    </View>
                </FlipCard>
            </View>


        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
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
        backgroundColor: '#263672',
        borderRadius: 20,
        shadowOffset: {width: 1, height: 1},
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
        shadowOffset: {width: 1, height: 1},
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
    }
});
