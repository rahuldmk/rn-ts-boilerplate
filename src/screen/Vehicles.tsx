import React from 'react';
import { Text, View } from 'react-native';

interface VehiclesProps {
    title: string,
}


const Vehicles = ({ title }: VehiclesProps) => {
    return (
        <View>
            <Text>Vehicles{title}</Text>
        </View>
    )
}

export default Vehicles;