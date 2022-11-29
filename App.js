import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native"
import HomeScreen from './screens/HomeScreen';
import ChatRoom from './screens/ChatRoom';
import Notfication from './Notfication';

const App = () => {
const Stack = createStackNavigator();

  return (
    // <NavigationContainer>
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="chatRoom" component={ChatRoom} />
     
    // </Stack.Navigator>
    // </NavigationContainer>
    <Notfication/>
  )
}

export default App




