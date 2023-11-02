// InitialScreen.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { images } from '../../constants/images';
import InitialSVG from '/Users/rishabhraghav/Desktop/projects/tiwariTravels/src/assests/images/InitialSVG.png'
import images from '../../constants/images';
import styles from './Login.style';

const Login = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
      <Image style={styles.bgimage} source={images.InitialSvg} resizeMode='cover' />
      <View style={styles.logoContainer}>
        <Text style={styles.logoText1}>TIWARI TRAVELLS</Text>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={styles.logoText2}>Online Bus Ticket Booking App</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('Login2')}>
            <Text style={styles.loginButtonText}>log in with mobile number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
