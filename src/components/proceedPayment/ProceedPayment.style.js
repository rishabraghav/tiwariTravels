const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(243, 243, 243, 1)",
        height: "100%",
        marginTop: 30,
    },
    boardingDetailsCard: {
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingVertical: 15,
        marginHorizontal: 10,
        // bottom: 20,
        zIndex: 1,
    },
    boardingDetailsHeading: {
        fontSize: 12,
        fontWeight: 500,
        marginBottom: 8,
    },
    boardingDetailsText: {
        fontSize: 14,
        fontWeight: 400
    },  
    boardingDetailsDate: {
        fontSize: 12,
        fontWeight: 400,
        color: "rgba(101, 103, 106, 1)"
    },
    horizontalLine: {
        borderBottomColor: 'rgba(15, 33, 76, 0.35)', 
        borderBottomWidth: 0.5,
        marginVertical: 10       
    }
})

export default styles;