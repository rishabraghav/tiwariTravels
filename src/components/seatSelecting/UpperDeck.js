import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import images from '../../constants/images';

const screenWidth = Dimensions.get('window').width;

const UpperDeck = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>UPPER · ₹700</Text>
        <Image source={images.steeringWheel} />
      </View>
      <View style={styles.seatsContainer}>
        <View>
          <View style={styles.rowSeats}>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>2</Text></TouchableOpacity>
          </View>
          <View style={styles.rowSeats}>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>4</Text></TouchableOpacity>
          </View>
          <View style={styles.rowSeats}>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>6</Text></TouchableOpacity>
          </View>
          <View style={styles.rowSeats}>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>8</Text></TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.rowSeats}>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>11</Text></TouchableOpacity>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>12</Text></TouchableOpacity>
          </View>
          <View style={styles.rowSeats}>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>13</Text></TouchableOpacity>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>14</Text></TouchableOpacity>
          </View>
          <View style={styles.rowSeats}>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>15</Text></TouchableOpacity>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>16</Text></TouchableOpacity>
          </View>
          <View style={styles.rowSeats}>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>17</Text></TouchableOpacity>
            <TouchableOpacity style={styles.seat}><Text style={{ color: 'rgba(89, 86, 86, 1)' }}>18</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(214, 216, 228, 1)',
    borderRadius: 10,
    width: screenWidth - 50,
    marginHorizontal: 10,
    marginBottom: 10, // Adjusted marginBottom
    paddingTop: 5,
    paddingHorizontal: 30,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  seatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 80,
  },
  rowSeats: {
    flexDirection: 'row',
  },
  seat: {
    height: 72, // Adjusted height
    width: 42,
    borderRadius: 10,
    padding: 3,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(214, 216, 228, 1)',
  },
});

export default UpperDeck;
