import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ShowScreenReviews from '../components/ShowScreenReviews';
import HorizontalLine from '../components/HorizontalLine';
import yelp from '../api/yelp';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const ResultsShowScreen = ({ navigation }) => {
    // when we expect the data to be an object, we use 'null'
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        return setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    const stars = [];
    const rating = result.rating;
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars.push(
                <FontAwesome name="star" style={styles.iconStyle} />
            )
        } else {
            if (rating % 1 != 0) {
                stars.push(
                    <FontAwesome name="star-half-full" style={styles.iconStyle} />
                )
            } else {
                stars.push(
                    <FontAwesome name="star-o" style={styles.iconStyle} />
                )
            }
        }
    }

    return (
        <>
            <Text style={styles.titleStyle}>{result.name}</Text>
            <Text style={styles.contentStyle}>
                {result.rating} { stars }, {result.review_count} Reviews
            </Text>
            <Text style={styles.contentStyle}>{result.price} <Entypo name="dot-single" style={styles.iconStyle} /> Restaurant</Text>
            <HorizontalLine />
            {/* TODO: configure how to add address and hours open to the show screen */}
            {/* <Text style={styles.contentStyle}>Address: {result.location}</Text>
            <Text style={styles.contentStyle}>Hours:</Text> */}
            <Text style={styles.contentStyle}>Phone: {result.display_phone}</Text>
            <Text style={styles.headerStyle}>Photos:</Text>
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={styles.imageStyle} source={{ uri: item }} />
                    }}
                />
            </View>
            <HorizontalLine />
            <ShowScreenReviews />
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 220,
        height: 120,
        borderRadius: 5,
        marginBottom: 3,
        marginHorizontal: 7
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 7
    },
    headerStyle: {
        fontSize: 16,
        marginHorizontal: 7
    },
    contentStyle: {
        marginHorizontal: 7,
        fontSize: 16
    },
    iconStyle: {
        fontSize: 16,
        marginHorizontal: 7
    }
});

export default ResultsShowScreen;