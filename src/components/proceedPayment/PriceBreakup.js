import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../../constants/images";

const PriceBreakup = ({ toggleOverlay }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={toggleOverlay} style={{ alignItems: "flex-end" }} >
                    <Image source={images.close} style={{ alignItems: "flex-end" }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Price Breakup</Text>
            </View>
            <View style={styles.horizontalLine} />
            
            <View>
                <Text>
                    Base Fare
                </Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text>1 x (Lower Seat)</Text>
                    <Text>₹200</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text>1 x (Upper Seat)</Text>
                    <Text>₹700</Text>
                </View>
            </View>
            <View style={styles.horizontalLine} />
            <View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text>GST Charges</Text>
                    <Text>₹20</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                    <Text style={{color: "rgba(0, 182, 109, 1)"}}>Discount</Text>
                    <Text style={{color: "rgba(0, 182, 109, 1)"}}>₹100</Text>
                </View>
            </View>
            <View style={styles.horizontalLine} />
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                <Text>Payable Amount</Text>
                <Text>₹820</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalLine: {
        borderBottomColor: 'rgba(15, 33, 76, 0.35)', 
        borderBottomWidth: 0.5,
        marginVertical: 10,
    }
})

export default PriceBreakup;