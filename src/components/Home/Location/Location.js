import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import styles from "./Location.style";
import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";
import images from "../../../constants/images";

const Location = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.locationContainer}>
                <View>
                    <VerticalLine />
                </View>
                <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ color: "#787C7B", fontSize: 12, fontWeight: 400 }}>From</Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 5 }}>Seoni</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <HorizontalLine />
                        <TouchableOpacity>
                            <Image source={images.reverse} />
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Text style={{ color: "#787C7B", fontSize: 12, fontWeight: 400 }}>To</Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 5 }}>Bhopal</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "60%", rowGap: 10 }}>
                        <TouchableOpacity disabled={true} style={styles.button}>
                            <Text style={styles.buttonText}>TODAY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={true} style={styles.button}>
                            <Text style={styles.buttonText}>TOMORROW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>





            <View style={styles.dateContainer}>
                <Image source={images.calender} />
                <View style={{flexDirection: "row", marginHorizontal: 8}}>
                <Text style={{color:"#787C7B"}}>Date of Journey: </Text>
                <Text>Thu, 25 May</Text>
                </View>
                
                <TouchableOpacity style={[styles.button, { marginRight: 0 }]} onPress={() => {navigation.push('BusBooking')}}>
                    <Text style={styles.buttonText}>GO</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Location;


