import { Image, Text, View } from "react-native";
import images from "../../constants/images";

const TravellerDetails = ({item}) => {
    return (
            <View style={{flexDirection: "row", backgroundColor: "white", margin: 10, borderRadius: 15, justifyContent: "space-between"}}>
                <View style={{padding: 10}}>
                    <Image style={{height: 60, borderWidth:0.5, borderRadius: 50, width: 60}} source={images.male} resizeMode="contain"/>
                </View>
                <View style={{flexDirection: "row", padding: 10}}>
                    <View>
                        <Text style={{fontSize: 10, fontWeight: 400, color: "#65676A", margin: 5}}>Name:</Text>
                        <Text style={{fontSize: 10, fontWeight: 400, color: "#65676A", margin: 5}}>Age:</Text>
                        <Text style={{fontSize: 10, fontWeight: 400, color: "#65676A", margin: 5}}>Gender:</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 10, fontWeight: 500, color: "#65676A", margin: 5}}>{item.name}</Text>
                        <Text style={{fontSize: 10, fontWeight: 500, color: "#65676A", margin: 5}}>{item.age}</Text>
                        <Text style={{fontSize: 10, fontWeight: 500, color: "#65676A", margin: 5}}>{item.gender}</Text>
                    </View>
                </View>
                <View style={{backgroundColor: "#D8D9DA", borderTopRightRadius: 15, borderBottomRightRadius: 15, padding: 10, justifyContent: "center", width: "25%", alignItems: "center"}}>
                        <Text style={{color: "#0F214C", fontSize: 12, fontWeight: 600}}>Seat: {item.seat}</Text>
                </View>
            </View>
     );
}
 
export default TravellerDetails;