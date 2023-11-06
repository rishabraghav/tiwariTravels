import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import InitialScreen from './src/components/InitialScreen/InitialScreen';
import Login from './src/components/Login.js/Login';
import Login2 from './src/components/Login.js/Login2';
import Login3 from './src/components/Login.js/Login3';
import Home from './src/components/Home/Home';
import BusBooking from './src/components/busBooking/BusBooking';
import SeatSelecting from './src/components/seatSelecting/SeatSelecting';
import BoardingPointSelection from './src/components/boardingPointSelection/BoardingPointSelection';
import ProceesPayment from './src/components/proceedPayment/ProceedPayment';
import ConfirmPayment from './src/components/ConfirmPayment/ConfirmPayment';
import Tickets from './src/components/Tickets/Tickets';
import ChooseCity from './src/components/ChooseCity/ChooseCity';
import Calender from './src/components/Calender/Calender';
import MyTickets from './src/components/MyTickets/MyTickets';



const Stack = createStackNavigator();
function App() {


  return (

    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="InitialScreen" component={InitialScreen} 
          options={{
              title: 'Welcome',
              headerStyle: {
                backgroundColor: 'black',
                borderBottomWidth: 0,
                borderBottomColor: "transparent" ,
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Login2" component={Login2} />
          <Stack.Screen name="Login3" component={Login3} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BusBooking" component={BusBooking} />
          <Stack.Screen name="SeatSelecting" component={SeatSelecting} />
          <Stack.Screen name="BoardingPointSelection" component={BoardingPointSelection} />
          <Stack.Screen name="ProceedPayment" component={ProceesPayment} />
          <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
          <Stack.Screen name="Tickets" component={Tickets} />
          <Stack.Screen name="ChooseCity" component={ChooseCity} />
          <Stack.Screen name="Calender" component={Calender} />
          <Stack.Screen name="MyTickets" component={MyTickets} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
