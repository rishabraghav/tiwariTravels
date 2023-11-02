import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.horizontalLine} />;
};

const styles = StyleSheet.create({
  horizontalLine: {
    width: 226,
    borderBottomWidth: 1, // or any other width you desire
    borderBottomColor: '#F1F0F0', // or any color you desire
    marginVertical: 10, // optional, adjust as needed
  },
});

export default HorizontalLine;