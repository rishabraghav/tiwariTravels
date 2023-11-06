import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import formatDate from '../../constants/dateConvert';

const Calender = ({navigation, route}) => {

    const [selected, setSelected] = useState('');
    const{setSelectedDate} = route.params;


    return (
        <SafeAreaView style={{ backgroundColor: "#B2D1FF", flex: 1 }}>
        <View style={styles.container}>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                    setSelectedDate(formatDate(day.dateString));
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
                theme={{backgroundColor: "red"}}
            />
        </View>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.footer}>
                        <Text style={{color: "white", fontSize: 14, fontWeight: 700}}>Done</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container : {
        height: "100%",
        marginTop: 30,
        backgroundColor: "white",
        paddingTop: 10,
    },
    footer: {
        bottom: 0, 
        backgroundColor: "#0F214C", 
        justifyContent: "center", 
        alignItems: "center", 
        padding: 20, 
        position: "absolute",
        width: "100%"
    }
})

export default Calender;