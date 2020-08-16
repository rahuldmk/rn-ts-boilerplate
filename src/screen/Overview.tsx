import React from 'react';
import { Text, View } from 'react-native';

interface OverviewProps {
    title: string,
}


const Overview = ({ title }: OverviewProps) => {
    return (
        <View>
            <Text>Overview{title}</Text>
        </View>
    )
}

export default Overview;