import React from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import Text from './Text';

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
        borderRadius: 2,
        backgroundColor: '#CCCCCC'
    },
    label: {
        marginBottom: 2
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
                weight={'500'}
                color="#B0BAC9"
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