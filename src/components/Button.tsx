import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Text from './Text';
const { width } = Dimensions.get('window');

interface ButtonProps {
    style?: any,
    full?: any,
    opacity?: any,
    color?:any,
    onPress?:any,
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        borderColor: '#B0BAC9',
        borderWidth: 1,
        height: 50,
        paddingVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },
    label: {
        marginBottom: 2
    },
    full: {
        width: width - 50,
    }
});

const Button: React.FC<ButtonProps> = props => {

    const { style, full, opacity, children,color,onPress } = props;

    const buttonStyle = [
        styles.button,
        full && styles.full,
        color && { backgroundColor: color },
        style
    ];
    return (
        <TouchableOpacity style={buttonStyle} activeOpacity={opacity || 0.8} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

export default Button;