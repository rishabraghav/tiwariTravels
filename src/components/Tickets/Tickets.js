import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QRCode from 'react-native-qrcode-svg';
import images from "../../constants/images";
import { tickets } from "../../constants/ticket";
const Tickets = ({navigation, route}) => {
    const { busName, boardingTime, droppingTime, boardingLocation, destination, selectedDate } = route.params;
    return (
        <SafeAreaView style={{ backgroundColor: "#B2D1FF", flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Confirm Details</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.QRcontainer}>
                   <Image style={{height: 300, width: 300}} source={images.QR} resizeMode="contain"/>
                   <Text style={{marginBottom: 20, bottom: 10, fontSize: 16, fontWeight: 500}}>Your Ticket Booked Successfully!</Text>
                </View>

                <View style={styles.horizontalLine} />


                <View style={{padding: 10, paddingBottom: 40}}>
                    <Text>
                        Your Ticket
                    </Text>
                    <View style={styles.ticket}>
                        <Text style={{fontSize: 16, fontWeight: 500}}>{busName}</Text>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 12}}>
                            <View>
                                <Text style={{fontSize: 10, fontWeight: 700}}>{boardingLocation}</Text>
                                <Text style={{fontSize: 10, fontWeight: 500}}>{`${selectedDate}, ${boardingTime}`}</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                <Text style={{left: 10, color: "#C7C7C7"}}>o------</Text>
                                <Image source={images.busLogo} />
                                <Text style={{right: 10, color: "#C7C7C7"}}>------o</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 10, fontWeight: 700}}>{destination}</Text>
                                <Text style={{fontSize: 10, fontWeight: 500}}>{`${selectedDate}, ${droppingTime}`}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "space-between", right: 30}}>
                        <View style={[styles.balls, {borderRightWidth: 1}]} />
                        <View style={styles.horizontalLine} />
                        <View style={[styles.balls, {borderLeftWidth: 1}]} />
                        </View>


                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <View>
                                <Text style={{color: "#7D7D7D", fontSize: 10, fontWeight: 500, margin: 5}}>Primary Traveller</Text>
                                <Text style={{color: "#042F40", fontSize: 10, fontWeight: 400, margin: 5}}>Pratham Sharma</Text>
                            </View>
                            <View>
                                <Text style={{color: "#7D7D7D", fontSize: 10, fontWeight: 500, margin: 5}}>Ticket fare</Text>
                                <Text style={{color: "#042F40", fontSize: 10, fontWeight: 400, margin: 5}}>₹820</Text>
                            </View>
                            <View>
                                <Text style={{color: "#7D7D7D", fontSize: 10, fontWeight: 500, margin: 5}}>Seat no.</Text>
                                <Text style={{color: "#042F40", fontSize: 10, fontWeight: 400, margin: 5}}>S11,W10.. +2 more</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <TouchableOpacity onPress={()=> {navigation.navigate("Home"); tickets.push({busName, boardingTime, droppingTime, boardingLocation, destination, selectedDate})}} style={{bottom: 0, backgroundColor: "#0F214C", justifyContent: "center", alignItems: "center", padding: 20}}>
                        <Text style={{color: "white", fontSize: 14, fontWeight: 700}}>Go To Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    header: {
        top: 0,
        backgroundColor: "#0F214C",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "white",
    },
    container: {
        backgroundColor: "rgba(243, 243, 243, 1)",
        height: "100%",
    },
    QRcontainer: {
        backgroundColor: "white",
        margin: 20,
        width: "auto",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#5C5C5C1A",
        borderWidth: 1,
    },
    horizontalLine: {
        borderBottomColor: 'rgba(15, 33, 76, 0.35)', 
        borderBottomWidth: 0.5,
        marginVertical: 10,
        width: "100%"    
    },
    ticket: {
        backgroundColor: "white",
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(15, 33, 76, 0.35)",
        margin: 10,
        borderRadius: 23
    },
    balls: {
        backgroundColor: "rgba(243, 243, 243, 1)", 
        height: 20, 
        width: 30, 
        borderRadius: 50,
        borderColor: "rgba(15, 33, 76, 0.35)",
    },


})

export default Tickets;