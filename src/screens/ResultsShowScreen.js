import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yesp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yesp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    
    return (
        <>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <FlatList
                data={result.photos} 
                keyExtractor={photo=>photo}
                renderItem={({item}) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }}/>
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 180,
        width: 300,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        color: 'blue'
    }
});

export default ResultsShowScreen;