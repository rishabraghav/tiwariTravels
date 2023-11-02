import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../header/Header";

const SeatSelecting = ({navigation, route}) => {

    const {name, seats, boardingTime, droppingTime, price} = route.params;

    return ( 
        <SafeAreaView>
        <Header navigation={navigation} item1={name} item2={`${boardingTime} - ${droppingTime}`} item3={"26 MAY"} item4={"Varanasi - Indore"}/>
            <View><Text>HEYYYY</Text></View>
        </SafeAreaView>
     );
}
 
export default SeatSelecting;