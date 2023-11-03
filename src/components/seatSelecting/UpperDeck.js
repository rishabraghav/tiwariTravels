import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import images from "../../constants/images";

const screenWidth = Dimensions.get('window').width;

const UpperDeck = () => {
    return ( 
        <View style={styles.container}>
             <View style={styles.heading}>
                <Text>UPPER · ₹700</Text>
                <Image source={images.steeringWheel} />
            </View>
        </View>
     );
}
 

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "rgba(214, 216, 228, 1)",
        borderRadius: 10,
        width: screenWidth - 50,
        marginHorizontal: 10,
        marginBottom: 90,
        paddingTop: 5,
        paddingHorizontal: 30,
    },
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
    },
})
export default UpperDeck;