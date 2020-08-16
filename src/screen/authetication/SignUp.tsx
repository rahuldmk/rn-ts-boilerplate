import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Block } from '../../components/index';


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

const SignUp = () =>{
    return(
        <Block center middle>
            <Text>SignUp</Text>
        </Block>
    );
}

export default SignUp;