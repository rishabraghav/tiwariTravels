import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../header/Header";
import Unorderedlist from 'react-native-unordered-list';

const screenWidth = Dimensions.get('window').width;

const BoardingPointSelection = ({ navigation, route }) => {
    const { name, boardingTime, droppingTime } = route.params;
    const handleItemPress = (item) => {
        // Handle the press of a list item
        console.log(`Selected: ${item}`);
    };
    return (
        <SafeAreaView style={{backgroundColor: "#B2D1FF", flex: 1,}}>
            <Header navigation={navigation} item1={name} item2={`${boardingTime} - ${droppingTime}`} item3={"26 MAY"} item4={"Varanasi - Indore"} />
            <View style={{backgroundColor: "white", height: "100%"}}>
                <View style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "rgba(214, 216, 228, 1)",
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>
                    <TouchableOpacity style={{ padding: 15 }}>
                        <Text style={{ color: "rgba(244, 48, 48, 1)" }}>BOARDING POINT</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: 100 }}>|</Text>
                    <TouchableOpacity style={{ padding: 15 }}>
                        <Text>DROPPING POINT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => handleItemPress('Item 1')}>
                        <View style={styles.listItemContainer}>
                            <Unorderedlist bulletUnicode={0x29BF} color="red" style={{ fontSize: 25 }}>
                                <Text style={styles.listItem}>Sarwate Bus Stand</Text>
                            </Unorderedlist>
                        </View>
                        <Text style={{fontSize: 12, fontWeight: 600}}>21:30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={true} style={styles.button} onPress={() => handleItemPress('Item 2')}>
                        <View style={styles.listItemContainer}>
                            <Unorderedlist bulletUnicode={0x29BE} style={{ fontSize: 25 }}>
                                <Text style={styles.listItem}>Sarwate Bus Stand</Text>
                            </Unorderedlist>
                        </View>
                        <Text style={{fontSize: 12, fontWeight: 600}}>21:30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={true} style={styles.button} onPress={() => handleItemPress('Item 3')}>
                        <View style={styles.listItemContainer}>
                            <Unorderedlist bulletUnicode={0x29BE} style={{ fontSize: 25 }}>
                                <Text style={styles.listItem}>Sarwate Bus Stand</Text>
                            </Unorderedlist>
                        </View>
                        <Text style={{fontSize: 12, fontWeight: 600}}>21:30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={true} style={styles.button} onPress={() => handleItemPress('Item 3')}>
                        <View style={styles.listItemContainer}>
                            <Unorderedlist bulletUnicode={0x29BE} style={{ fontSize: 25 }}>
                                <Text style={styles.listItem}>Sarwate Bus Stand</Text>
                            </Unorderedlist>
                        </View>
                        <Text style={{fontSize: 12, fontWeight: 600}}>21:30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={true} style={styles.button} onPress={() => handleItemPress('Item 3')}>
                        <View style={styles.listItemContainer}>
                            <Unorderedlist bulletUnicode={0x29BE} style={{ fontSize: 25 }}>
                                <Text style={styles.listItem}>Sarwate Bus Stand</Text>
                            </Unorderedlist>
                        </View>
                        <Text style={{fontSize: 12, fontWeight: 600}}>21:30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={true} style={styles.button} onPress={() => handleItemPress('Item 3')}>
                        <View style={styles.listItemContainer}>
                            <Unorderedlist bulletUnicode={0x29BE} style={{ fontSize: 25 }}>
                                <Text style={styles.listItem}>Sarwate Bus Stand</Text>
                            </Unorderedlist>
                        </View>
                        <Text style={{fontSize: 12, fontWeight: 600}}>21:30</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{bottom: 0, position: "absolute", padding: 30, backgroundColor:"rgba(15, 33, 76, 1)", width: screenWidth, justifyContent:"center", alignItems:"center"}}
                onPress={() => navigation.push("ProceedPayment",{ name, boardingTime, droppingTime })}
                >
                <Text style={{color: "white", fontWeight: 600, fontSize: 14}}>
                PROCEED
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%"
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
    listItem: {
        fontSize: 15,
        color: "rgba(48, 49, 51, 1)",
        fontWeight: 400,
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10,
        paddingHorizontal: 30,
        width: screenWidth,
        borderBottomWidth: 1,
        borderColor: "rgba(214, 216, 228, 1)",
        // flexWrap: "wrap"
        
    }
});

export default BoardingPointSelection;