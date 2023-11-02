const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    footer: (sort)=> ({ 
        flexDirection: 'row', 
        justifyContent: sort? 'space-between': 'space-around', 
        width: '100%', 
        backgroundColor: "white",
        height: "auto",
        alignItems: "center", 
        position: "absolute",
        bottom: 0,
        zIndex: 1,
    }),
    buttons: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    }
})

export default styles;