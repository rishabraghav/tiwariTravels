import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const { View, Text } = require("react-native")

const PaymentGateway = ({navigation, toggleOverlay, busName, boardingTime, droppingTime, boardingLocation, destination, selectedDate}) => {

    useEffect(() => {
        setTimeout(()=> {
            toggleOverlay();
            navigation.navigate("Tickets", {busName,   boardingTime, droppingTime, boardingLocation, destination, selectedDate})
        }, 3000)
    }, [])
    return ( 
        <View>
            <Text style={{fontSize: 10, fontWeight: 600}}>
                PAYMENT GATEWAY
            </Text>
            <View>
                <ActivityIndicator style={{padding: 50}} color={"#0F214C"} size="large" />
                <Text>Processing your payment</Text>
                <Text>Please wait...</Text>
            </View>
        </View>
     );
}
 
export default PaymentGateway;