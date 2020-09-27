import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
    return (
        <View style={styles.horizontalStyle}></View>
    );
};

const styles = StyleSheet.create({
    horizontalStyle: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        opacity: 0.7,
        marginVertical: 10,
        marginHorizontal: 7
    }
});

export default HorizontalLine;