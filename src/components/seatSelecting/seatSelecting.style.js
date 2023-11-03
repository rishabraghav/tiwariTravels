const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    filter: {
       flexDirection: "row",
    //    backgroundColor: "red",
       padding: 10,
       justifyContent: "space-evenly"
    },
    filterButton: (activeFilter) => ({
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 23 ,
        backgroundColor: activeFilter? "rgba(255, 94, 94, 1)": "white",
        borderWidth: 0.5,
        borderColor: "rgba(214, 216, 228, 1)"
    }),
    filterButtonText:(activeFilter)=>({
        color: activeFilter? "white": "black",
        fontSize: 12,
    })
})

export default styles