import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
    label: string,
    right?: boolean
}

const styles = StyleSheet.create({
    container: {
        width,
        backgroundColor:'cyan'
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
    },
    sliderContainer: {
        flex: 1,
    }
})

const Slide = ({ label, right }: SlideProps) => {

    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 100 : -width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" }
    ]

    return (
        <View style={styles.container}>
            <View style={[styles.sliderContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    )
}

export default Slide;