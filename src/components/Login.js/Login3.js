import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Login3.style";
import { useState } from "react";

const Login3 = ({navigation}) => {
    const [mobileNumber, setMobileNumber] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.logoText1}>TIWARI TRAVELLS</Text>
                <Text style={styles.logoText2}>Online Bus Ticket Booking App</Text>
            </View>

            <View style={styles.OTPContainer}>
                <Text style={styles.otpText}>OTP Verification</Text>

                <View style={styles.numberInputContainer}>
                    <TextInput style={styles.numberInput}
                        placeholder="OTP"
                        placeholderTextColor="white"
                        value={mobileNumber}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => { console.log(text) }}
                    />
                     <TextInput style={styles.numberInput}
                        placeholder="OTP"
                        placeholderTextColor="white"
                        value={mobileNumber}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => { console.log(text) }}
                    />
                     <TextInput style={styles.numberInput}
                        placeholder="OTP"
                        placeholderTextColor="white"
                        value={mobileNumber}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => { console.log(text) }}
                    />
                     <TextInput style={styles.numberInput}
                        placeholder="OTP"
                        placeholderTextColor="white"
                        value={mobileNumber}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => { console.log(text) }}
                    />
                </View>
                <View style={styles.loginButtonContainer}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => {navigation.navigate('Home')}}>
                            <Text style={styles.loginButtonText}>Verify</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.resendOTP}>Didn’t get otp?? </Text>
                            <TouchableOpacity>
                            <Text style={styles.resendOTP}>Resend OTP</Text>
                            </TouchableOpacity>
                        </View>
                        
                </View>
            </View>

        </View>
    );
}

export default Login3;