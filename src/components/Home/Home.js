import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Home.style";
import images from '../../constants/images';
import Footer from "../footer/Footer";
import Location from "./Location/Location";

const Home = ({ navigation }) => {
    const handleButtonPress = (buttonName) => {
        // Handle button press, you can navigate to other screens or perform actions
        console.log(`Button pressed: ${buttonName}`);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={images.homeBG} resizeMode="cover" style={styles.bgImage} />
            <View style={styles.loginButtonContainer}>
                <View>
                    <Text style={{ color: "white", fontSize: 32, fontWeight: "700" }}>TIWARI</Text>
                    <Text style={{ color: "white", fontSize: 36, fontWeight: 700 }}>TRAVELS</Text>
                </View>
            </View>
           <Location navigation={navigation} />
            <Footer 
            item1={{image: images.home, name: "Home"}} 
            item2={{image: images.tickets, name: "My Tickets"}} 
            item3={{image: images.help, name: "Help"}} 
            item4={{image: images.account, name: "Account"}} />
        </View>
    );
}

export default Home;