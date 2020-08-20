import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block,Text,Input } from '../../components/index';


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
        <Block center middle background="white">
            <Block middle>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            </Block>
            <Block center flex={1}>
                <Text 
                size={28} 
                spacing={0} 
                height={32} 
                weight={'300'}
                style={{marginBottom:6}}
                >Sign in to DP</Text>
                <Text size={15} spacing={0} height={22} weight={'300'} color='gray'>Please enter your credentials to proceed</Text>
            </Block>
            
            <Block flex={1.5} center>
                <Block>
                <Input style={{marginBottom:20}} label="Email Or Mobile No." email full />
                <Input style={{marginBottom:25}} label="Password" password={true} full />
                </Block>
            </Block>

            <Block flex={2.5} center>
                <Block flex={false}>
                </Block>
            </Block>
        </Block>
    );
}

export default SignUp;