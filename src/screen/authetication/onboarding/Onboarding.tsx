import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Slide, { SLIDE_HEIGHT } from './Slide';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: '#cccccc'
    },
    footer: {
        flex: 1
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

            </View>
        </View>
    )
}

export default Onboarding;