
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import images from "../../constants/images";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Bus from "../bus/Bus";

const busesInfo = [
    {
        name: "Hans Travels Pvt Ltd ",
        type: "AC Sleeper",
        seats: 28,
        boardingTime: "17:00",
        droppingTime: "10:00",
        price: 2065
    },
    {
        name: "Ramashiv Travels  ",
        type: "AC Sleeper/Sleeper",
        seats: 0,
        boardingTime: "15:30",
        droppingTime: "06:45",
        price: 2065
    },
    {
        name: "Bhopal Travels",
        type: "AC Sleeper",
        seats: 4,
        boardingTime: "17:00",
        droppingTime: "10:00",
        price: 2065
    },
    {
        name: "Hans Travels Pvt Ltd ",
        type: "AC Sleeper",
        seats: 28,
        boardingTime: "17:00",
        droppingTime: "10:00",
        price: 2065
    }
];

const BusBooking = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#B2D1FF", flex: 1 }}>
            <Header navigation={navigation} item1={"Bhopal to Seoni"} item2={"3 June"} item3={"142 Buses"} />

            <ScrollView style={{backgroundColor: "#F5F5F5", flex: 1, marginTop: 30, }}>
                <FlatList style={{paddingBottom: 80, marginTop: 10}} data={busesInfo} renderItem={({item}) => (
                    <Bus   
                    navigation={navigation} 
                    name={item.name} 
                    type={item.type} 
                    seats={item.seats}
                    boardingTime={item.boardingTime} 
                    droppingTime={item.droppingTime}
                    price={item.price}
                />
                )}
                keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>



            <Footer
                item1={{ image: images.ac, name: "AC" }}
                item2={{ image: images.seater, name: "seater" }}
                item3={{ image: images.sleeper, name: "sleeper" }}
                item4={{ image: images.nonAC, name: "Non AC" }}
                sort={true}
            />
        </SafeAreaView>
    );
}

export default BusBooking;