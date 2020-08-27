import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text, Input, Button } from '../../components/index';
import * as theme from '../../styles/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
    logo: {
        height: 42,
        resizeMode: 'contain'
    }
})

interface Sprops  {
    navigation?: any
};

const SignUp: React.FC<Sprops> = props => {

    const { navigation } = props;
    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <Block center middle background="white">
                <Block center>
                    <Block middle center style={{ marginBottom: 10, marginTop: 5 }}>
                        <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
                    </Block>

                    <Text h3 style={{ marginBottom: 6 }}>
                        Get started for free
                    </Text>
                    <Text paragraph style={{ marginBottom: 5 }}>
                        Free forever. No credit card needed.
                    </Text>

                    <Block row space="around" style={{ marginHorizontal: 28, marginTop: 20, }}>
                        <Block center middle style={{ borderRadius: 5, borderWidth: 1, height: 175, marginRight: 20 }}>
                            <Text h4>Administrator</Text>
                            <Text paragraph color="grey" center>Full access to all setting</Text>
                        </Block>
                        <Block center middle style={{ borderRadius: 4, borderWidth: 1, height: 175 }}>
                            <Text h4>Operator</Text>
                            <Text paragraph color="grey" center>Service desk and chat permission</Text>
                        </Block>
                    </Block>

                    <Block center style={{ marginTop: 20, marginBottom: 10 }}>
                        <Input style={{ marginBottom: 15 }} label="Full Name" full />
                        <Input style={{ marginBottom: 15 }} label="EMAIL ADDRESS" email full />
                        <Input style={{ marginBottom: 20 }} label="PASSWORD" password={true} full />
                        <Button color={theme.colors.blue} style={{ marginBottom: 12 }} full onPress={() => console.log('Hello')}>
                            <Text paragraph color='white' center weight={'bold'}>Create account</Text>
                        </Button>
                        <Text color="grey" paragraph>Already have an account? <Text color="blue" onPress={() => navigation.navigate('SignIn')}>Sign up</Text></Text>
                    </Block>
                </Block>
            </Block>
        </KeyboardAwareScrollView>
    );
}

export default SignUp;