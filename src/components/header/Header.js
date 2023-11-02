import { Text, TouchableOpacity, View } from "react-native";



const Header = ({navigation, item1, item2, item3, item4}) => {
    return ( 
        <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#0F214C"}}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Text style={{fontSize: 25, color: "white"}}>←</Text>
                </TouchableOpacity>
                <View style={{alignItems: "flex-end"}}>
                    <Text style={{fontSize: 13, color: "white"}} >{item1}</Text>
                    <Text style={{fontSize: 12, color: "white"}} >{item2}</Text>
                    <Text style={{fontSize: 12, color: "white"}} >{item3}</Text>
                    {item4 && <Text style={{fontSize: 12, color: "white"}} >{item4}</Text>}
                </View>
            </View>
     );
}
 
export default Header;