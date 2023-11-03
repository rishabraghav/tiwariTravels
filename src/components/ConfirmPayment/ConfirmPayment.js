import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BoardingDetailsCard from "../proceedPayment/BoardingDetailsCard";
import TravellerDetails from './TravellerDetails';
import images from "../../constants/images";
import { useState } from "react";
import { Overlay } from "react-native-elements";
import PaymentGateway from "./PaymentGateway";

const data = [{
    name: "Siddhant Pandey",
    age: 23,
    gender: "Male",
    seat: "3C"
},
{
    name: "Malika Gaur",
    age: 37,
    gender: "Female",
    seat: "L"
}]

const ConfirmPayment = ({ navigation, route }) => {
    const { name } = route.params;
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <SafeAreaView style={{ backgroundColor: "#B2D1FF", flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#0F214C" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 25, color: "white" }}>←</Text>
                </TouchableOpacity>
                <View style={{ alignItems: "center", width: "100%", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: 500, fontSize: 13 }}>Confirm Details</Text>
                </View>
            </View>

            <ScrollView style={styles.container}>
                <View style={{ padding: 10 }}>
                    <Text style={{ margin: 10, fontSize: 13, fontWeight: 500 }}>Journey Details</Text>
                    <BoardingDetailsCard />
                </View>
                <View style={styles.horizontalLine} />

                <View style={{padding: 10}}>
                    <Text style={{ margin: 10, fontSize: 13, fontWeight: 500 }}>Traveller(s) Details</Text>
                    {data?.map((item) => (
                        <TravellerDetails item={item} />
                    ))}
                </View>

                <View style={styles.horizontalLine} />

                <View style={{padding: 10, paddingBottom: 30}}>
                    <Text style={{ margin: 10, fontSize: 13, fontWeight: 500 }}>TIckets will be sent on these details</Text>
                    <View style={{backgroundColor: "white", padding: 10, borderRadius: 15,}}>
                        <View style={{flexDirection: "row"}}>
                            <Image style={{marginHorizontal: 10, marginRight: 20}} source={images.phone} />
                            <Text style={{color: "#0F214C", fontSize: 10, fontWeight: 500}}>+91 91258963245</Text>
                        </View>
                        <View style={{flexDirection: "row", marginTop: 20}}>
                            <Image style={{marginHorizontal: 10, marginRight: 20}} source={images.mail} />
                            <Text style={{color: "#0F214C", fontSize: 10, fontWeight: 500}}>example@gmail.com</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <TouchableOpacity onPress={toggleOverlay} style={{bottom: 0, backgroundColor: "#0F214C", justifyContent: "center", alignItems: "center", padding: 20}}>
                        <Text style={{color: "white", fontSize: 14, fontWeight: 700}}>PAY NOW ₹820 →</Text>
            </TouchableOpacity>
            <Overlay isVisible={visible} overlayStyle={{borderRadius: 15}} onBackdropPress={toggleOverlay}>
                <PaymentGateway toggleOverlay={toggleOverlay} navigation={navigation} name={name} />
            </Overlay>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(243, 243, 243, 1)",
        height: "100%",
    },
    horizontalLine: {
        borderBottomColor: 'rgba(15, 33, 76, 0.35)',
        borderBottomWidth: 0.5,
        marginVertical: 10
    }
})

export default ConfirmPayment;