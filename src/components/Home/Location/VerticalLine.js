import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const VerticalLine = ({ height, color, thickness }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "#B2D1FF", fontSize: 16 }}>o</Text>
            <Text style={styles.text}>------</Text>
            <Text style={{ color: "black", fontSize: 16 }}>o</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        height: 100, // Set the desired height
        width: 30,
        transform: [{ rotate: '90deg' }], // Rotate the text by 90 degrees
    },
    text: {
        color: 'black', // Set the desired color
        fontSize: 16,
        width: 45, // Set the desired font size
    },
});


export default VerticalLine;