import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import ResultList from './ResultList';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image 
                style={styles.imageStyle} 
                source={result.image_url ? 
                        {uri: result.image_url} : 
                         require('../../assets/missing_image.png')}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles=StyleSheet.create({
    containerStyle: {
        marginLeft: 15
    },
    imageStyle: {
        width: 200,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        color: 'blue'
    }
});

export default ResultsDetail;