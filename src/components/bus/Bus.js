import { Text, View, Platform, TouchableOpacity } from 'react-native';
import calculateTimeDifference from '../../constants/calculateTimeDifference';
// import { Dimensions } from 'react-native';
// const screenWidth = Dimensions.get('window').width;

const Bus = ({ navigation, busName, type, seats, boardingTime, droppingTime, price, boardingLocation, destination, selectedDate }) => {
    // Common styles
    const containerStyle = {
        backgroundColor: 'white',
        width: "90%",
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 0,
        zIndex: 1,
    };

    const rowContainerStyle = {
        flexDirection: 'row',
        justifyContent: 'space-between',
    };

    const textContainerStyle = {
        // margin: 20,
        marginHorizontal: 20
    };

    const seatContainerStyle = {
        backgroundColor: 'rgba(178, 209, 255, 1)',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
    };

    const seatTextStyle = {
        color: 'rgba(44, 47, 46, 1)',
        fontSize: 12,
        fontWeight: 600,
    };

    const timeContainerStyle = {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    };

    const timeTextStyle = {
        fontWeight: 500,
        fontSize: 14,
    };

    const differenceContainerStyle = {
        backgroundColor: "rgba(241, 240, 240, 1)",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        overflow: "hidden",
    };

    const differenceTextStyle = {
        color: "rgba(44, 47, 46, 1)",
        fontSize: 14,
    };

    const priceContainerStyle = {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: seats == 0 ? "rgba(255, 94, 94, 1)" : "rgba(178, 209, 255, 1)",
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    };

    const priceTextStyle = {
        fontSize: 16,
        fontWeight: 500,
        color: "rgba(44, 47, 46, 1)",
    };

    const arrowTextStyle = {
        fontSize: 20,
        color: seats == 0 ? "white" : "black",
        fontWeight: seats == 0 ? 500 : 700,

    };

    const difference = calculateTimeDifference(boardingTime, droppingTime);

    const handlePress = () => {
        navigation.push('SeatSelecting', {
            busName, 
            seats,
            boardingTime,
            droppingTime,
            price,
            boardingLocation,
            destination, selectedDate,
        })
    }

    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 20,
                height: 20,
                top: 8,
                alignItems: "flex-end",
                shadowColor: '#000',
                shadowOffset: { height: -2, width: -1 },
                shadowOpacity: 0.1,
                shadowRadius: 0
            }}>
                <View style={{ padding: 15.5, borderTopRightRadius: 15 }}></View>
            </View>
            <View style={containerStyle}>
                <View style={rowContainerStyle}>
                    <View style={textContainerStyle}>
                        <Text style={{ color: 'rgba(44, 47, 46, 1)', fontSize: 14 }}>{busName}</Text>
                        <Text style={{ color: 'rgba(120, 124, 123, 1)', fontSize: 12, fontWeight: '400' }}>{type}</Text>
                    </View>
                    <View style={seatContainerStyle}>
                        <Text style={seatTextStyle}>
                            {seats}
                            {'\n'}
                            Seats
                        </Text>
                    </View>
                </View>

                <View style={timeContainerStyle}>
                    <Text style={timeTextStyle}>{boardingTime}</Text>
                    <Text style={{ color: "rgba(241, 240, 240, 1)", fontSize: 20 }}>-------</Text>
                    <Text style={differenceContainerStyle}>
                        <Text style={differenceTextStyle}>
                            {difference.hours}hrs{difference.minutes !== 0 && ` ${difference.minutes} mins`}
                        </Text>
                    </Text>
                    <Text style={{ color: "rgba(241, 240, 240, 1)", fontSize: 20 }}>-------</Text>
                    <Text style={timeTextStyle}>{droppingTime}</Text>
                </View>

                <TouchableOpacity disabled={seats == 0} onPress={handlePress} style={priceContainerStyle}>
                    <Text style={priceTextStyle}>₹{price}</Text>
                    <TouchableOpacity disabled={seats == 0} onPress={handlePress}>
                        <Text style={arrowTextStyle}>
                            {seats == 0 ? "SOLD OUT" : "→"}
                        </Text>
                    </TouchableOpacity>

                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: seats == 0 ? "rgba(255, 94, 94, 1)" : "rgba(178, 209, 255, 1)",
                width: "80%",
                borderRadius: 20,
                height: 20,
                bottom: 10,
                alignItems: "flex-end",
                shadowColor: '#000',
                shadowOffset: { height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2
            }}>
                <View style={{ padding: 15.5, borderTopRightRadius: 15 }}></View>
            </View>
        </View>

    );
};

export default Bus;
