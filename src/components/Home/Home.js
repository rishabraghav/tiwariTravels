import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Home.style";
import images from '../../constants/images';
import Footer from "../footer/Footer";
import Location from "./Location/Location";
import { useState } from "react";
import MyTickets from "../MyTickets/MyTickets";

const Home = ({ navigation }) => {
    
    const [activeTab, setActiveTab] = useState("Home")

    return (
        <>
        {activeTab == "Home"? <View style={styles.container}>
            <ImageBackground source={images.homeBG} resizeMode="cover" style={styles.bgImage} />
            <View style={styles.loginButtonContainer}>
                <View>
                    <Text style={{ color: "white", fontSize: 32, fontWeight: "700" }}>TIWARI</Text>
                    <Text style={{ color: "white", fontSize: 36, fontWeight: 700 }}>TRAVELS</Text>
                </View>
            </View>
           <Location navigation={navigation} />
            <Footer 
            navigation={navigation}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            item1={{ image: activeTab == "Home"? images.homeActive : images.home, name: "Home" }}
            item2={{ image: activeTab == "My Tickets"? images.ticketsActive : images.tickets, name: "My Tickets" }}
            item3={{image: images.help, name: "Help"}} 
            item4={{image: images.account, name: "Account"}} />
        </View>: <MyTickets navigation={navigation} setActiveTab={setActiveTab} activeTab={activeTab}/>}
        </>
    );
}

export default Home;