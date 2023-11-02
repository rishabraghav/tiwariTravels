import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Login2.style";
import { useState } from "react";

const Login2 = ({navigation}) => {
    const [mobileNumber, setMobileNumber] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.logoText1}>TIWARI TRAVELLS</Text>
                <Text style={styles.logoText2}>Online Bus Ticket Booking App</Text>
            </View>

            <View style={styles.OTPContainer}>
                <Text style={styles.otpText}>enter  mobile number </Text>

                <View style={styles.numberInputContainer}>
                    <Text style={styles.prefixText}>91  -  </Text>
                    <TextInput style={styles.numberInput}
                        placeholder="0000   000    000"
                        placeholderTextColor="white"
                        value={mobileNumber}
                        keyboardType="numeric"
                        onChangeText={(text) => { setMobileNumber(text) }}
                    />
                </View>
                <View style={styles.loginButtonContainer}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('Login3')}>
                            <Text style={styles.loginButtonText}>Send OTP</Text>
                        </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default Login2;