import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../header/Header";
import styles from "./ProceedPayment.style";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Traveller from "./Traveller";
import BoardingDetailsCard from "./BoardingDetailsCard";
import UserInfoCard from "./UserInfoCard";
import OffersCard from "./OffersCard";
// import { CheckBox } from "react-native-elements";
import { useState } from "react";
import { CheckBox } from '@rneui/themed';
import { Overlay } from 'react-native-elements';
import PriceBreakup from "./PriceBreakup";

const data = [1, 2]

const ProceesPayment = ({ navigation, route }) => {
    const { name, boardingTime, droppingTime } = route.params;
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <SafeAreaView style={{ backgroundColor: "#B2D1FF", flex: 1 }}>
            <Header navigation={navigation} item1={name} item2={`${boardingTime} - ${droppingTime}`} item3={"26 MAY"} item4={"Varanasi - Indore"} />

            <ScrollView>
                <View style={styles.container}>
                    <View style={{bottom: 20}}>
                    <BoardingDetailsCard />
                    </View>
                   

                    <View style={styles.horizontalLine} />
                    <View>
                        <Text style={{ margin: 10 }}>Total Traveller(s): {data.length}</Text>
                        <FlatList data={data} renderItem={({ item }) => (
                            <Traveller item={item} />
                        )} />
                    </View>

                    <View style={styles.horizontalLine} />
                    <UserInfoCard />
                    <View style={styles.horizontalLine} />

                    <OffersCard />
                    <View style={styles.horizontalLine} />

                    <View style={{ flexDirection: "row", backgroundColor: "white", alignItems: "center" }}>
                        <CheckBox
                            checked={checked}
                            onPress={toggleCheckbox}
                            iconType="material-community"
                            checkedIcon="checkbox-marked"
                            uncheckedIcon="checkbox-blank-outline"
                            checkedColor="teal"
                        />
                        <Text style={{ fontSize: 10, fontWeight: 500 }}>
                            I agree to privacy policy & Terms and Conditions
                        </Text>
                    </View>

                    <View style={{ backgroundColor: "white", borderTopWidth: 1, padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 500 }}>Amount to be Paid</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text>₹820</Text>
                                <TouchableOpacity onPress={toggleOverlay} style={{ margin: 7, padding: 5, backgroundColor: "rgba(217, 217, 217, 1)", borderRadius: 20, width: 25, justifyContent: "center", alignItems: "center" }}>
                                    <Text >i</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TouchableOpacity onPress={() => navigation.push("ConfirmPayment", { name, boardingTime, droppingTime })} style={{ backgroundColor: "rgba(15, 33, 76, 1)", padding: 10, borderRadius: 5 }}>
                                <Text style={{ color: "white" }}>PAY NOW →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Overlay isVisible={visible} overlayStyle={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} onBackdropPress={toggleOverlay}>
                           <PriceBreakup toggleOverlay={toggleOverlay} />
                    </Overlay>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

export default ProceesPayment;