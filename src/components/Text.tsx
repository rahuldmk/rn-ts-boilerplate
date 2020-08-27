import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import * as theme from '../styles/theme';
interface TextProps {
    h1?: any,
    h2?: any,
    h3?: any,
    h4?: any,
    paragraph?: any,
    caption?: any,
    medium?: any,
    bold?: any,
    italic?: any,
    color?: any,
    center?: any,
    style?: any,
    size?: any,
    height?: any,
    spacing?: any,
    weight?: any,
    onPress?:()=> void,
    children: ReactNode,
};

const styles = StyleSheet.create({
    text: {
        fontSize: theme.size.font
    },
    center: {
        textAlign: 'center'
    },
    middle: {
        justifyContent: 'center'
    },
    h1: theme.fonts.h1,
    h2: theme.fonts.h2,
    h3: theme.fonts.h3,
    h4: theme.fonts.h4,
    paragraph: theme.fonts.paragraph,
    blue: { color: theme.colors.blue },
    lightblue: { color: theme.colors.lightblue },
    green: { color: theme.colors.green },
    yellow: { color: theme.colors.yellow },
    red: { color: theme.colors.red },
    teal: { color: theme.colors.teal },
    black: { color: theme.colors.black },
    black2: { color: theme.colors.black2 },
    black3: { color: theme.colors.black3 },
    white: { color: theme.colors.white },
    grey: { color: theme.colors.grey },
    grey2: { color: theme.colors.grey2 },
    grey3: { color: theme.colors.grey3 },
    caption: { color: theme.colors.caption },
    input: { color: theme.colors.input },
});

const Typegraphy: React.FC<TextProps> = props => {

    const { color, center, height, spacing, children, size, style, weight, h1, h2, h3, h4, paragraph, bold, italic, medium, caption, onPress } = props;
    const TextStyle = [
        styles.text,
        center && styles.center,
        color && { color },
        color && color == 'blue' && styles.blue,
        color && color == 'lightblue' && styles.lightblue,
        color && color == 'green' && styles.green,
        color && color == 'yellow' && styles.yellow,
        color && color == 'red' && styles.red,
        color && color == 'teal' && styles.teal,
        color && color == 'black' && styles.black,
        color && color == 'black2' && styles.black2,
        color && color == 'black3' && styles.black3,
        color && color == 'white' && styles.white,
        color && color == 'grey' && styles.grey,
        color && color == 'grey2' && styles.grey2,
        color && color == 'grey3' && styles.grey3,
        size && { fontSize: size },
        height && { lineHeight: height },
        spacing && { letterSpacing: spacing },
        weight && { fontWeight: weight },
        style,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        paragraph && styles.paragraph,
    ];
    return (
        <Text style={TextStyle} onPress={onPress}>{children}</Text>
    )
}

export default Typegraphy;