const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: { 
      backgroundColor: '#0F214C', 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    bgimage: { 
      zIndex: 0, 
      position: "absolute", 
      opacity: 0.2,
      width: 415,
      height: 478, 
    },
    logoContainer: {
      zIndex: 1, 
      justifyContent: "center",
      alignItems: "center",
    },
    logoText1: {
      color: "white",
      fontSize: 28,
      fontWeight: '500',
      marginTop: 35,
    },
    logoText2: {
      color: "white",
      fontWeight: '400',
      fontSize: 18,
    },
    loginButtonContainer: {
      position: 'absolute',
      bottom: 80, // Adjust as needed
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
    },
  });
  

export default styles;