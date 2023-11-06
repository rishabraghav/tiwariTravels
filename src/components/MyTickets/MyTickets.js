import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tickets } from "../../constants/ticket";
import Ticket from "./Ticket";
import Footer from "../footer/Footer";
import images from "../../constants/images";

const MyTickets = ({ navigation, setActiveTab, activeTab }) => {

    console.log(tickets);
    return (
        <SafeAreaView style={{ backgroundColor: "#B2D1FF", flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", padding: 10, backgroundColor: "#0F214C" }}>
                <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 25, color: "white" }}>←</Text>
                </TouchableOpacity>
                <View style={{ alignItems: "center", width: "100%", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: 500, fontSize: 13 }}>My Tickets</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#F3F3F3"
                }}>
                    <TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderColor: "rgba(244, 48, 48, 1)", width: "50%", alignItems: "center" }}>
                        <Text style={{ color: "rgba(244, 48, 48, 1)" }}>COMPLETED</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: 100 }}>|</Text>
                    <TouchableOpacity style={{ padding: 15, width: "50%", alignItems: "center" }}>
                        <Text>DROPPING POINT</Text>
                    </TouchableOpacity>
                </View>

                <FlatList data={tickets} renderItem={({ item }) => (
                    <Ticket ticket={item} />
                )}>

                </FlatList>

            </View>
            <Footer
                navigation={navigation}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                item1={{ image: activeTab == "Home"? images.homeActive : images.home, name: "Home" }}
                item2={{ image: activeTab == "My Tickets"? images.ticketsActive : images.tickets, name: "My Tickets" }}
                item3={{ image: images.help, name: "Help" }}
                item4={{ image: images.account, name: "Account" }} />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(243, 243, 243, 1)",
        height: "100%",
    },
})
export default MyTickets;