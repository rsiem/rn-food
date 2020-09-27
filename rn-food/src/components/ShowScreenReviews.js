import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ShowScreenReviews = () => {
    const [reviews, setReviews] = useState(null); 

    // const getReviews = async (id) => {
    //     const response = await yelp.get(`/${id}/reviews`);
    //     return setReviews(response.data);
    // };

    // useEffect(() => {
    //     getReviews(id);
    // }, []);

    // if (!reviews) {
    //     return null;
    // }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headerStyle}>Review Summary</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 18
    },
    viewStyle: {
        marginHorizontal: 7
    }
});

export default ShowScreenReviews;