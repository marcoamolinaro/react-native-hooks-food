import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import ResultList from './ResultList';

const ResultsDetail = ({ result }) => {
    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    );
};

const styles=StyleSheet.create({});

export default ResultsDetail;