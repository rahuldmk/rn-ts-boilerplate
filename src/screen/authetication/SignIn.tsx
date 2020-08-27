import React from 'react';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Block, Text, Input, Button } from '../../components/index';
import * as theme from '../../styles/theme';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 56,
        height: 56,
        resizeMode: 'contain'
    }

})

const SignIn = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='height' enabled>
            <Block center middle background="white">
                <Block center>
                    <Block middle flex={0.3}>
                        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                    </Block>

                    <Text h1 style={{ marginBottom: 6 }}>
                        Sign in to DP
                </Text>
                    <Text paragraph style={{ marginBottom: 44 }}>
                        Please enter your credentials to proceed
                </Text>


                    <Block center >
                        <Input style={{ marginBottom: 20 }} label="EMAIL ADDRESS" email full />
                        <Input style={{ marginBottom: 20 }} label="PASSWORD" password={true} full />
                        <Button color={theme.colors.blue} style={{ marginBottom: 12 }} full onPress={() => console.log('Hello')}>
                            <Text paragraph color='white' center weight={'bold'}>Sign in</Text>
                        </Button>
                        <Text color="grey" paragraph>Don't have an account? <Text color="blue" onPress={() => console.log("Hi fiv")}>Sign up</Text></Text>
                    </Block>
                </Block>
            </Block>
        </KeyboardAvoidingView>
    );
}

export default SignIn;