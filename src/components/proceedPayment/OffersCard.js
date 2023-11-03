import { Image, StyleSheet, Text, View } from "react-native";
import images from "../../constants/images";
import Unorderedlist from 'react-native-unordered-list';

const OffersCard = () => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                <Image style={{ margin: 5 }} source={images.offers} resizeMode="contain" />
                <Text style={{ margin: 5, fontWeight: 500, fontSize: 10 }}>Offers</Text>
            </View>
            <View style={styles.offers}>
                <View>
                    <Text style={{fontSize: 10}}><Text style={{fontWeight: 700}}>TTBESTBUS</Text>: Get upto 500 OFF on First Booking</Text>
                </View>
                <Unorderedlist bulletUnicode={0x29BF} style={{ fontSize: 20, }} />
            </View>
            <View style={styles.offers}>
                <View>
                    <Text style={{fontSize: 10}}><Text style={{fontWeight: 700}}>TTBESTBUS</Text>: Get upto 500 OFF on First Booking</Text>
                </View>
                <Unorderedlist bulletUnicode={0x29BE} style={{ fontSize: 20, }} />
            </View>
            <View style={styles.offers}>
                <View>
                    <Text style={{fontSize: 10}}><Text style={{fontWeight: 700}}>TTBESTBUS</Text>: Get upto 500 OFF on First Booking</Text>
                </View>
                <Unorderedlist bulletUnicode={0x29BE} style={{ fontSize: 20, }} />
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
    offers: {
        flexDirection: "row", 
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "rgba(163, 163, 163, 1)",
        margin: 10,
        borderRadius: 10,
        padding: 10
    }
})

export default OffersCard;