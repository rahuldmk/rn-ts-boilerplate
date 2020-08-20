import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text, Input, Button } from '../../components/index';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }

})

const SignUp = () => {
    return (
        <Block center middle background="white">
            <Block center>
            <Block middle flex={0.3}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            </Block>
            
                <Text
                    size={28}
                    spacing={0}
                    height={32}
                    weight={'300'}
                    style={{ marginBottom: 6 }}
                >
                    Sign in to DP
                    </Text>
                <Text
                    size={15}
                    spacing={0}
                    height={22}
                    weight={'300'}
                    color='gray'
                    style={{marginBottom:44}}
                >
                    Please enter your credentials to proceed
                </Text>
            

            <Block center >
                    <Input style={{ marginBottom: 20 }} label="EMAIL ADDRESS" email full />
                    <Input style={{ marginBottom: 20 }} label="PASSWORD" password={true} full />
                    <Button color={'#2E5BFF'} style={{ marginBottom: 12 }} full onPress={() => console.log('Hello')}>
                        <Text height={21} spacing={0} color={'white'} center weight={'bold'}>Sign in</Text>
                    </Button>
                    <Text color="#8798AD" height={22}>Don't hava an account? <Text color={'#2E5BFF'}>Sign up</Text></Text>
                    </Block>
            </Block>
        </Block>
    );
}

export default SignUp;