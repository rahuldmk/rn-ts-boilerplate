import React from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import Text from './Text';
import * as theme from '../styles/theme';

const { width } = Dimensions.get('window');

interface InputProps {
    style?: any,
    password?: any,
    label?: string,
    full?: any,
    email?: any,
    number?: any,
    phone?: any,
};

const styles = StyleSheet.create({
    Input: {
        borderRadius: 5,
        borderColor:theme.colors.grey,
        borderWidth:1,
        backgroundColor: theme.colors.white,
        height:40
    },
    label: {
        marginBottom: 8,
        textTransform:'uppercase'
    },
    full: {
        width: width - 50,
    }
});

const Input: React.FC<InputProps> = props => {

    const { password, style, label, full, email, number, phone } = props;
    const inputType = email ? 'email-address' : number ? 'numeric' : phone ? 'phone-pad' : 'default';

    const InputStyle = [
        styles.Input,
        full && styles.full,
        style
    ];
    return (
        <View>
            <Text
                size={12}
                height={14}
                spacing={1.12}
                weight={'bold'}
                color={theme.colors.black}
                style={styles.label}
            >
                {label}
            </Text>
            <TextInput
                style={InputStyle}
                secureTextEntry={password}
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={inputType}
            />
        </View>
    )
}

export default Input;