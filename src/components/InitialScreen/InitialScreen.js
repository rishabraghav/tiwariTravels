// InitialScreen.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { images } from '../../constants/images';
import InitialSVG from '/Users/rishabhraghav/Desktop/projects/tiwariTravels/src/assests/images/InitialSVG.png'
import images from '../../constants/images';
import styles from './InitialScreen.style';

const InitialScreen = ({ navigation }) => {
  const navigateToMainScreen = () => {
    navigation.navigate('Login');
  };
  useEffect(() => {
    const delay = 2000;
    const timeoutId = setTimeout(() => {
      navigateToMainScreen();
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.bgimage} source={images.InitialSvg} width={415} height={478} resizeMode='cover' />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={images.bus} resizeMode='contain' />
        <View style={styles.logoTextContainer} >
        <Text style={styles.logoText1}>Welcome!</Text>
        <Text style={styles.logoText2}>make my route</Text>
        </View>
      </View>
    </View>
  );
};

export default InitialScreen;
