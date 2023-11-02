import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#0F214C', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        position: "relative" 
    },
    bgimage: { 
        zIndex: 0, 
        position: "absolute", 
        opacity: 0.2 
    },
    logoContainer: {
        zIndex: 1, 
        justifyContent: "center",
        alignItems: "center" 
    },
    logo: { 
        flexShrink: 0, 
        height: 197, 
        width: 335, 
        zIndex: 1 
    },
    logoTextContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    logoText1: {
        color: "white",
        fontSize: 28,
        fontWeight: '500',
        marginTop: 35
    },
    logoText2: {
        color: "white",
        fontWeight: '400',
        fontSize: 18,
    }

});

export default styles;