import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ResultsDetails = ({ result }) => {

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
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} { stars }, {result.review_count} Reviews</Text>
            {/* <FontAwesome name="star" style={styles.iconStyle} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        marginLeft: 7,
        marginRight: 7,
        marginTop: 3,
        marginBottom: 5
    },
    imageStyle: {
        width: 220,
        height: 120,
        borderRadius: 5,
        marginBottom: 3
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default ResultsDetails;