import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import images from "../../constants/images";

const Traveller = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "rgba(214, 216, 228, 1)" }}>
                <Text style={{ margin: 10, fontSize: 10, fontWeight: 500 }}>Traveller: {item}</Text>
                <View style={styles.seatNumberContainer}>
                    <Text style={styles.seatNumberText}>Seat: 3C</Text>
                </View>
            </View>
            <View style={styles.nameConatiner}>
                <TextInput style={{ height: 40, padding: 10 }} placeholder="Full Name" />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.ageConatiner}>
                    <TextInput style={{ height: 40, padding: 10 }} placeholder="Age" />
                </View>
                <View style={styles.genderContainer}>
                    <TouchableOpacity style={styles.genderButton}>
                        <Image style={styles.imageCard} source={images.female} resizeMode="contain" />
                        <Text style={styles.genderButtonText}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.genderButton}>
                        <Image style={styles.imageCard} source={images.male} resizeMode="contain" />
                        <Text style={styles.genderButtonText}>Male</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: "white",
        margin: 10
    },
    seatNumberText: {
        fontSize: 12,
        fontWeight: 400,
        color: "black",
    },
    seatNumberContainer: {
        fontSize: 12,
        fontWeight: 400,
        padding: 10,
        backgroundColor: "#D8D9DA",
        borderTopRightRadius: 10,
    },
    nameConatiner: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(163, 163, 163, 1)",
        margin: 15,
    },
    ageConatiner: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(163, 163, 163, 1)",
        margin: 15,
        width: "30%"
    },
    genderContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(163, 163, 163, 1)",
        margin: 15,
        width: "50%",
        flexDirection: "row"
    },
    genderButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "45%",
        margin: 5,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "rgba(159, 159, 159, 1)"
    },
    genderButtonText: {
        fontSize: 10,
        fontWeight: 400,
        margin: 4
    },
    imageCard: {
        height: 25,
        borderWidth: 1,
        width: 25,
        borderRadius: 100,
        borderColor: "rgba(159, 159, 159, 1)",
        margin: 4,
    }

})
export default Traveller;