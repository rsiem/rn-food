import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{title} ({results.length})</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetails result={item} />;
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 7,
        marginBottom: 3
    }
});

export default ResultsList;