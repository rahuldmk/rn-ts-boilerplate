import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block,Text } from '../../components/index';


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logo:{
        width:100,
        height:100,
        resizeMode:'contain'
    }

})

const SignUp = () =>{
    return(
        <Block center middle>
            <Block middle center flex={1}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            </Block>
            <Block center flex={1}>
                <Text size={28}>Sign in to AirVerticals</Text>
                <Text size={15}>Please enter your credentials to proceed</Text>
            </Block>
            
            <Block>
                <Block>
                <Text>Email Or Mobile No</Text>
                </Block>
                <Block>
                    <Text>
                        Password
                    </Text>
                </Block>
                
            </Block>
        </Block>
    );
}

export default SignUp;