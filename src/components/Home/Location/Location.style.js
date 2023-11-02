const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        zIndex: 1,
        // top: 100,
        bottom: 150,
    },
    locationContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        height: "50%",
        padding: 5,
        flexShrink: 0,
        width: "100%",
        zIndex: 2,
        flexDirection: "row",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    dateContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: "row",
        marginTop: 10,
        zIndex: 2,
        justifyContent: "space-between",
        alignItems:"center",
        padding: 6,
    },
    button: {
        backgroundColor: '#B2D1FF',
        padding: 10,
        borderRadius: 10,
        height:36,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop:5,
        marginRight: 30,
        // shadowColor: 'rgba(0, 0, 0, 0.25)',
        // shadowOffset: {
        //   width: 0,
        //   height: 4,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 9,
        elevation: 2,
        alignItems: 'center',
      },
      
      buttonText: {
        color: '#0F214C',
        fontSize: 12,
        fontWeight: "700",
      },
})

export default styles;