import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import { useState } from "react";
import Unorderedlist from 'react-native-unordered-list';

const ChooseCity = ({navigation, route}) => {

    const {setBoardingLocation, setDestination, buttonIdentifier } = route.params;
    const setCity= (name) => {
        if(buttonIdentifier == 'From') {
            setBoardingLocation(name)
        } else {
            setDestination(name);
        }
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView style={{ backgroundColor: "#B2D1FF", flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", padding: 10, backgroundColor: "#0F214C" }}>
                <TouchableOpacity style={{paddingLeft: 10}} onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 25, color: "white" }}>←</Text>
                </TouchableOpacity>
                <View style={{ alignItems: "center", width: "100%", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: 500, fontSize: 13 }}>Choose City</Text>
                </View>
            </View>

            <ScrollView style={styles.container}>
                <View style={styles.searchConatiner}>
                    <Image source={images.search} />
                    <TextInput placeholder="Search City" />
                </View>

                <View>
                    <View style={{ backgroundColor: "#0F214C", padding: 15 }}>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: "white" }}>Recently Search</Text>
                    </View>
                    <TouchableOpacity onPress={() => setCity('Seoni')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Seoni</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => setCity('Balaghat')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Balaghat</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCity('Bhopal')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Bhopal</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                </View>
                <View>
                <View style={{ backgroundColor: "#0F214C", padding: 15 }}>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: "white" }}>Popular Cities</Text>
                    </View>
                    <TouchableOpacity onPress={() => setCity('Bhopal')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Bhopal</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCity('Indore')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Indore</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCity('Jabalpur')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Jabalpur</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCity('Pune')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Pune</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCity('New Delhi')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>New Delhi</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCity('Bengaluru')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Bengaluru</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCity('Mumbai')} style={{justifyContent: "center", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor:"#DCDFE2"}}>
                        <Unorderedlist bulletUnicode={0x29BE} style={{fontSize: 25}}>
                            <Text style={{ fontSize: 14, fontWeight: 500}}>Mumbai</Text>
                        </Unorderedlist>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        marginTop: 30,
    },
    searchConatiner: {
        flexDirection: "row",
        margin: 10,
        marginVertical: 20,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#DCDFE2"
    }
})

export default ChooseCity;