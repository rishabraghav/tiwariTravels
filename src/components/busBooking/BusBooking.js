
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import images from "../../constants/images";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Bus from "../bus/Bus";
import { removeDayFromDate } from "../../constants/dateConvert";

const busesInfo = [
    {
      name: "Hans Travels Pvt Ltd",
      type: "AC Sleeper",
      seats: 28,
      boardingTime: "17:00",
      droppingTime: "10:00",
      price: 2065
    },
    {
      name: "Ramashiv Travels",
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
      name: "Mumbai Express",
      type: "Non-AC Seater",
      seats: 15,
      boardingTime: "19:45",
      droppingTime: "12:30",
      price: 1500
    },
    {
      name: "Deluxe Tours",
      type: "Sleeper",
      seats: 20,
      boardingTime: "22:15",
      droppingTime: "14:30",
      price: 1800
    },
    {
      name: "Speedy Travels",
      type: "AC Sleeper",
      seats: 0,
      boardingTime: "20:30",
      droppingTime: "08:15",
      price: 2200
    },
    {
      name: "Royal Coaches",
      type: "AC Seater",
      seats: 35,
      boardingTime: "18:45",
      droppingTime: "11:30",
      price: 1800
    },
    {
      name: "Green Lines",
      type: "Non-AC Sleeper",
      seats: 0,
      boardingTime: "21:00",
      droppingTime: "09:30",
      price: 1900
    },
    {
      name: "Sunrise Travels",
      type: "Sleeper",
      seats: 12,
      boardingTime: "23:30",
      droppingTime: "13:15",
      price: 2000
    }
  ];

const BusBooking = ({ navigation, route }) => {
    const{boardingLocation, destination, selectedDate} = route.params;


    return (
        <SafeAreaView style={{ backgroundColor: "#B2D1FF", flex: 1 }}>
            <Header navigation={navigation} item1={`${boardingLocation} to ${destination}`} item2={selectedDate} item3={`${busesInfo.length} Buses`} />

            <ScrollView style={{backgroundColor: "#F5F5F5", flex: 1, marginTop: 30, }}>
                <FlatList style={{paddingBottom: 80, marginTop: 10}} data={busesInfo} renderItem={({item}) => (
                    <Bus   
                    navigation={navigation} 
                    busName={item.name} 
                    type={item.type} 
                    seats={item.seats}
                    boardingTime={item.boardingTime} 
                    droppingTime={item.droppingTime}
                    price={item.price}
                    boardingLocation={boardingLocation}
                    destination={destination}
                    selectedDate={selectedDate}
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