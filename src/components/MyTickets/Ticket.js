import { StyleSheet, Text, View } from "react-native";

const Ticket = ({ ticket }) => {
    return (
        <View style={styles.card}>
            <View style={{ margin: 15 }}>
                <Text style={{ color: "#23C53D", fontSize: 10, fontWeight: 400, marginBottom: 10 }}>
                    CONFIRM
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 400, }}>
                    {`${ticket.boardingLocation} to ${ticket.destination}`}
                </Text>
                <Text style={{ fontSize: 10, fontWeight: 400, }}>
                    {ticket.busName}
                </Text>
                <Text style={{ fontSize: 9, fontWeight: 400, marginTop: 5 }}>
                    Boarding: {ticket.boardingLocation}
                </Text>
            </View>
            <View style={{ backgroundColor: "#87C4FF", padding: 20, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 14, fontWeight: 400, }}>
                    {ticket.selectedDate}
                </Text>
                <Text style={{ fontSize: 10, fontWeight: 400, }}>{ticket.boardingTime}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: "white",
        margin: 10,
        flexDirection: "row",
        // padding: 15,
        justifyContent: "space-between",
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    }
})

export default Ticket;