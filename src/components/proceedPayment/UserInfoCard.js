import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import images from "../../constants/images";

const UserInfoCard = () => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                <Image style={{ margin: 5 }} source={images.tickets} resizeMode="contain" />
                <Text style={{ margin: 5, fontWeight: 500, fontSize: 10 }}>Your ticket info will be sent here</Text>
            </View>
            <View style={styles.emailContainer}>
                <TextInput style={{ height: 40, padding: 10 }} placeholder="Email Address" />
            </View>
            <View style={styles.phoneNumberContainer}>
                <Text style={{paddingHorizontal: 10, color: "rgba(15, 33, 76, 1)"}}>+91</Text>
                <TextInput style={{ height: 40, padding: 10, borderLeftWidth: 1, borderColor: "rgba(163, 163, 163, 1)" }} placeholder="9999999999" />
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
    emailContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(163, 163, 163, 1)",
        margin: 15,
    },
    phoneNumberContainer: {
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(163, 163, 163, 1)",
        margin: 15,
        alignItems: "center",
    },
})

export default UserInfoCard;