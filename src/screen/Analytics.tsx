import React from 'react';
import { Text, View } from 'react-native';

interface AnalyticsProps {
    title: string,
}


const Analytics = ({ title }: AnalyticsProps) => {
    return (
        <View>
            <Text>Analytics {title} </Text>
        </View>
    )
}

export default Analytics;