import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../header/Header";
import styles from "./seatSelecting.style";
import LowerDeck from "./LowerDeck";
import UpperDeck from "./UpperDeck";
import SeatFooter from "./seatFooter";
import { useState } from "react";

const screenWidth = Dimensions.get('window').width;

const SeatSelecting = ({ navigation, route }) => {

    const { busName, seats, boardingTime, droppingTime, price, boardingLocation, destination, selectedDate } = route.params;
    const [selectedSeats, setSelectedSeats] = useState(null);

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView>
                <Header navigation={navigation} item1={busName} item2={`${boardingTime} - ${droppingTime}`} item3={selectedDate} item4={`${boardingLocation} - ${destination}`} />
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
                <ScrollView style={{ height: "auto", width: "100%", overflow: "scroll" }} horizontal contentContainerStyle={{ columnGap: 10 }}>
                    <LowerDeck />
                    <UpperDeck />
                </ScrollView>


            </ScrollView>
            <SeatFooter
                navigation={navigation}
                busName={busName}
                boardingTime={boardingTime}
                droppingTime={droppingTime}
                boardingLocation={boardingLocation}
                destination={destination}
                selectedDate={selectedDate}
            />
        </SafeAreaView>
    );
}

export default SeatSelecting;