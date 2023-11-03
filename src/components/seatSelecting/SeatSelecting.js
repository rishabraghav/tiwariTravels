import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../header/Header";
import styles from "./seatSelecting.style";
import LowerDeck from "./LowerDeck";
import UpperDeck from "./UpperDeck";
import SeatFooter from "./seatFooter";

const screenWidth = Dimensions.get('window').width;

const SeatSelecting = ({ navigation, route }) => {

    const { name, seats, boardingTime, droppingTime, price } = route.params;

    return (
        <SafeAreaView style={{backgroundColor: "white"}}>
        <ScrollView>
            <Header navigation={navigation} item1={name} item2={`${boardingTime} - ${droppingTime}`} item3={"26 MAY"} item4={"Varanasi - Indore"} />
            <View style={styles.filter}>
                <TouchableOpacity style={styles.filterButton(true)} >
                    <Text style={styles.filterButtonText(true)}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton(false)} >
                    <Text style={styles.filterButtonText(false)}>₹200</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton(false)} >
                    <Text style={styles.filterButtonText(false)}>₹700</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{height: "auto", width: "100%", overflow:"scroll"}} horizontal contentContainerStyle={{columnGap: 10}}>
                <LowerDeck />
                <UpperDeck />
            </ScrollView>

            
            </ScrollView>
            <SeatFooter navigation={navigation} name={name} boardingTime={boardingTime} droppingTime={droppingTime} />
        </SafeAreaView>
    );
}

export default SeatSelecting;