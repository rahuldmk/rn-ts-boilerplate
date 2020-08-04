import React from 'react';
import { View, Text,Button } from 'react-native';

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Button onPress={()=>console.log('PressMe')} title="Click Me" />
        </View>
    )
}

export default SignIn;