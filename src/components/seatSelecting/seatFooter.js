import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";


const SeatFooter = ({navigation, busName, boardingTime, droppingTime, boardingLocation, destination, selectedDate}) => {
    return (
        <View style={styles.footer}>
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "white" }}>
                <Text>2 seat | 9, L</Text>
                <Text>(Exclusive of text)  ₹900</Text>
            </View>
            <TouchableOpacity 
            style={{padding: 15, backgroundColor: "rgba(15, 33, 76, 1)", justifyContent: "center", alignItems: "center"}}
                
                onPress={() => navigation.push("BoardingPointSelection", {
                    busName, boardingTime, droppingTime, boardingLocation, destination, selectedDate
                })}
                >
                <Text style={{color: "white", fontSize: 14, fontWeight: 600}}>
                    Select Boarding & Dropping Place
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        bottom: 0,
        borderColor: "rgba(15, 33, 76, 1)",
        borderWidth: 1,
    }
})

export default SeatFooter;