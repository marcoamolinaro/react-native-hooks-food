import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import ResultList from './ResultList';

const ResultsDetail = ({ result }) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles=StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 120,
        borderRadius: 4
    },
    nameStyle: {
        fontWeight: 'bold',
        color: 'blue'
    }
});

export default ResultsDetail;