import React from 'react';
import { Text, View } from 'react-native';

interface SettingsProps {
    title: string,
}


const Settings = ({ title }: SettingsProps) => {
    return (
        <View>
            <Text>Settings{title}</Text>
        </View>
    )
}

export default Settings;