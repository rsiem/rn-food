import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text style={styles.termStyle}>Showing results for "{term}"</Text> */}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
                <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    termStyle: {
        fontSize: 15,
        marginLeft: 7,
        marginVertical: 5
    }
});

export default SearchScreen;