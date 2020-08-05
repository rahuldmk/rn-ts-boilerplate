import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Slide, { SLIDE_HEIGHT } from './Slide';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor:"cyan",
        borderBottomRightRadius:75
    },
    footer: {
        flex: 1,
    },
    footerOuter: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "cyan"
    },
    footerInner: {
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius:75
    }

})

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <ScrollView horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}>
                    <Slide label="Relaxed" right />
                    <Slide label="Playful" />
                    <Slide label="Excentric" right />
                    <Slide label="Funky" />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerOuter}>
                    <View style={styles.footerInner}>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Onboarding;