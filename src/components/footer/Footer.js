import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./Footer.style";
import images from "../../constants/images";

const Footer = ({item1, item2, item3, item4, sort}) => {
    return ( 

        <View style={styles.footer(sort)}>
                <TouchableOpacity style={styles.buttons} onPress={() => handleButtonPress('Button 1')}>
                    <Image style={{height: 30}} source={item1.image} />
                    <Text style={{ color: '#0F214C', fontSize: 10 }}>{item1.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons} onPress={() => handleButtonPress('Button 2')}>
                    <Image source={item2.image} />
                    <Text style={{ color: '#0F214C', fontSize: 10 }}>{item2.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons} onPress={() => handleButtonPress('Button 3')}>
                <Image style={{height: 30}} source={item3.image} />
                    <Text style={{ color: '#0F214C', fontSize: 10 }}>{item3.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons} onPress={() => handleButtonPress('Button 4')}>
                <Image style={{height: 30}} source={item4.image} />
                    <Text style={{ color: '#0F214C', fontSize: 10 }}>{item4.name}</Text>
                </TouchableOpacity>
               {sort && <TouchableOpacity style={{ backgroundColor: "#0F214C", height: "100%", justifyContent: "center", alignItems: "center",}}>
                    <Text style={{color: "white", fontSize: 14, fontWeight: 600, padding: 20}}>SORT & {"\n"}FILTER</Text>
                </TouchableOpacity>}
            </View>
     );
}
 
export default Footer;