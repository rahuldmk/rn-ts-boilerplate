import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface TextProps {
    children: ReactNode,
    color?: any,
    center?: any,
    style?: any,
    size?: any,
};

const styles = StyleSheet.create({
    text: {
        flex: 1
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    }
});

const Typegraphy: React.FC<TextProps> = props => {

    const { color, center, children, size, style } = props;
    const TextStyle = [
        styles.text,
        center && styles.center,
        color && { color },
        size && { fontSize:size },
        style
    ];
    return (
        <Text style={TextStyle}>{children}</Text>
    )
}

export default Typegraphy;