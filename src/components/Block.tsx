import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface BlockProps {
    children: ReactNode,
    flex?: any,
    center?: any,
    middle?: any,
    style?: any,
    background?: any,
};

const styles = StyleSheet.create({
    block: {
        flex: 1
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center',

    }
});

const Block: React.FC<BlockProps> = props => {

    const { flex, center, middle, children, style, background } = props;
    const blockStyle = [
        styles.block,
        flex && { flex },
        center && styles.center,
        middle && styles.middle,
        background && { backgroundColor: background },
        style
    ];
    return (
        <View style={[blockStyle]}>
            {children}
        </View>
    )
}

export default Block;