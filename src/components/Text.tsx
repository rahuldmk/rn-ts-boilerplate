import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface TextProps {
    children: ReactNode,
    color?: any,
    center?: any,
    style?: any,
    size?: any,
    height?:any,
    spacing?:any,
    weight?:any
};

const styles = StyleSheet.create({
    text: {
    
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    }
});

const Typegraphy: React.FC<TextProps> = props => {

    const { color, center,height,spacing, children, size, style,weight } = props;
    const TextStyle = [
        styles.text,
        center && styles.center,
        color && { color },
        size && { fontSize:size },
        height && {lineHeight:height},
        spacing && {letterSpacing:spacing},
        weight && {fontWeight:weight},
        style
    ];
    return (
        <Text style={TextStyle}>{children}</Text>
    )
}

export default Typegraphy;