import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface BlockProps {
    children: ReactNode,
    flex?: any,
    center?: any,
    middle?: any,
    row?:any,
    column?:any,
    style?: any,
    background?: any,
    space?:any
};

const styles = StyleSheet.create({
    block: {
        flex: 1
    },
    row:{
        flexDirection:'row'
    },
    column:{
        flexDirection:'column'
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center',
    }
});

const Block: React.FC<BlockProps> = props => {

    const { flex, center, middle, children, style, background,row,column,space } = props;
    const blockStyle = [
        styles.block,
        flex && { flex },
        center && styles.center,
        middle && styles.middle,
        row && styles.row,
        column && styles.column,
        space && {justifyContent:`space-${space}`},
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