import { Text, View } from "react-native";
import styles from "./ProceedPayment.style";
const boardingDetailsCard = () => {
    return ( 
        <View style={styles.boardingDetailsCard}>
                    <View style={{alignItems: "flex-start"}}>
                        <Text style={styles.boardingDetailsHeading}>Boarding Point</Text>
                        <Text style={styles.boardingDetailsText}>Sarwate Bus Stand</Text>
                        <Text style={styles.boardingDetailsDate}>20:00, 26 May 2023</Text>
                    </View>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={styles.boardingDetailsHeading}>Dropping Point</Text>
                        <Text style={styles.boardingDetailsText}>Laal Pani Bus Stand</Text>
                        <Text style={styles.boardingDetailsDate}>09:00, 27 May 2023</Text>
                    </View>
                </View>
     );
}
 
export default boardingDetailsCard;