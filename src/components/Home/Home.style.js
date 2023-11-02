const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
    bgImage: {
        flex: 1,
        width: "100%"
    },  
 
    loginButtonContainer: {
        left: 0,
        right: 0,
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        height: "60%",
        backgroundColor: "#0F214C",
        zIndex: 1
    },
})

export default styles;