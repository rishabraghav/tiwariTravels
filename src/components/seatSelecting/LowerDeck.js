import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../../constants/images";

const screenWidth = Dimensions.get('window').width;

const LowerDeck = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text>LOWER · ₹200</Text>
                <Image source={images.steeringWheel} />
            </View>
            <View style={styles.seatsContainer}>
                <View style={styles.coloumSeats}>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>2</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>4</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>6</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>7</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>8</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>9</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>10</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>11</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>12</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>13</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>14</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>15</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>16</Text></TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>17</Text></TouchableOpacity>
                <View style={styles.coloumSeats}>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>18</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>19</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>20</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>21</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>22</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>23</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>24</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>25</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>26</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>27</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>28</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>29</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>30</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>31</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rowSeats}>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>32</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.seat}><Text style={{color: "rgba(89, 86, 86, 1)"}}>33</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "rgba(214, 216, 228, 1)",
        borderRadius: 10,
        width: screenWidth - 50,
        marginHorizontal: 10,
        paddingVertical: 5,
    },
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingBottom: 10,
    },
    seatsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    rowSeats: {
        flexDirection: "row"
    },
    seat: {
        height: 42,
        width: 42,
        borderRadius: 10,
        padding: 3,
        margin: 3,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(214, 216, 228, 1)",
    },


})
export default LowerDeck;