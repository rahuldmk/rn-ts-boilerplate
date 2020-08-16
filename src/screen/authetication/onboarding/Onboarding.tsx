import React from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import Slide, { SLIDE_HEIGHT } from './Slide';
import {useValue, onScrollEvent, interpolateColor } from 'react-native-redash';
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
    const x = useValue(0);
    const onScroll = onScrollEvent({x});
    const backgroundColor = interpolateColor(x,{
        inputRange:[0,width,width*2,width*3],
        outputRange:["#BFEAF5","#BEECC4","#CCCCCC","#FFCCCF"]
    });
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Animated.ScrollView horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...{onScroll}}
                    >
                    <Slide label="Relaxed" right />
                    <Slide label="Playful" />
                    <Slide label="Excentric" right />
                    <Slide label="Funky" />
                </Animated.ScrollView>
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