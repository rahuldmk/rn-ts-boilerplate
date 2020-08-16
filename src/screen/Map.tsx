import React from 'react';
import { Text, View } from 'react-native';

interface MapProps {
    title: string,
}


const Map = ({ title }: MapProps) => {
    return (
        <View>
            <Text>Map{title}</Text>
        </View>
    )
}

export default Map;