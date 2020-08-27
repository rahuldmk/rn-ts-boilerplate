import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp,Onboarding } from '../screen/index'
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
)

export default AuthStackScreen;