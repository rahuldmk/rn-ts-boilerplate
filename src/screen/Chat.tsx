import React from 'react';
import { Text, View } from 'react-native';

interface ChatProps {
    title: string,
}


const Chat = ({ title }: ChatProps) => {
    return (
        <View>
            <Text>Chat{title}</Text>
        </View>
    )
}

export default Chat;