const { StyleSheet } = require("react-native");
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B2D1FF",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },
    textContainer: {
        height: "60%",
        alignItems: "center",
        justifyContent: "center",
    },
    logoText1: {
        color: "black",
        fontSize: 28,
        fontWeight: '500',
        marginTop: 35,
    },
    logoText2: {
        color: "black",
        fontWeight: '400',
        fontSize: 18,
    },
    OTPContainer: {
        backgroundColor: "#0F214C",
        width: screenWidth,
        height: "40%",
        justifyContent: "space-between", // Align content vertically in the center
        padding: 50,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    otpText: {
        color: "white",
        fontSize: 14,
        fontWeight: "400"
    },
    numberInputContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        margin: 4,
        width: "auto",
        height: 50,
        justifyContent:"space-between",
    },
    prefixText: {
        color: "white",
        fontSize: 16,
        fontWeight: "400",
    },
    numberInput: {
        color: "black",
        fontSize: 16,
        backgroundColor: "white",
        borderRadius: 5,
        fontWeight: "400",
        paddingLeft: 10
    },
    loginButtonContainer: {
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      },
  
      loginButton: {
        backgroundColor: '#B2D1FF',
        padding: 10,
        borderRadius: 23,
        height:47,
        width: 303,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 9,
        elevation: 2,
        alignItems: 'center',
      },
      
      loginButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: "400"
      },
      resendOTP: {
        color: "white",
        fontSize: 12,
        fontWeight: "400",
        marginTop: 10
      }


})

export default styles;