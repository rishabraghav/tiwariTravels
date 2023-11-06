import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import styles from "./Location.style";
import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";
import images from "../../../constants/images";
import { useState } from "react";
import formatDate, { getTomorrowDate } from "../../../constants/dateConvert";

const Location = ({navigation}) => {
    const [boardingLocation, setBoardingLocation] = useState("Seoni");
    const [destination, setDestination] = useState("Bhopal");
    const [selectedDate, setSelectedDate] = useState(formatDate(new Date()))


    const handleReverse = () => {
        const temp = boardingLocation;
        setBoardingLocation(destination);
        setDestination(temp);
    }

    return (
        <View style={styles.container}>

            <View style={styles.locationContainer}>
                <View>
                    <VerticalLine />
                </View>
                <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={()=> navigation.navigate("ChooseCity", {setBoardingLocation, setDestination, buttonIdentifier: "From" })}>
                        <Text style={{ color: "#787C7B", fontSize: 12, fontWeight: 400 }}>From</Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 5 }}>{boardingLocation}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <HorizontalLine />
                        <TouchableOpacity onPress={handleReverse}>
                            <Image source={images.reverse} />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate("ChooseCity", {setBoardingLocation, setDestination, buttonIdentifier: "To" })}>
                        <Text style={{ color: "#787C7B", fontSize: 12, fontWeight: 400 }}>To</Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 5 }}>{destination}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "60%", rowGap: 10 }}>
                        <TouchableOpacity onPress={() => {
                            const dateObj = new Date();
                            setSelectedDate(formatDate(dateObj));
                        }} style={styles.button}>
                            <Text style={styles.buttonText}>TODAY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setSelectedDate(formatDate(getTomorrowDate()));
                        }} style={styles.button}>
                            <Text style={styles.buttonText}>TOMORROW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>





            <TouchableOpacity onPress={() => {navigation.push('Calender', {setSelectedDate})}} style={styles.dateContainer}>
                <Image source={images.calender} />
                <View style={{flexDirection: "row", marginHorizontal: 8}}>
                <Text style={{color:"#787C7B"}}>Date of Journey: </Text>
                <Text>{selectedDate}</Text>
                </View>
                
                <TouchableOpacity style={[styles.button, { marginRight: 0 }]} onPress={() => {navigation.push('BusBooking', {boardingLocation, destination, selectedDate})}}>
                    <Text style={styles.buttonText}>GO</Text>
                </TouchableOpacity>
            </TouchableOpacity>

        </View>
    );
}

export default Location;


