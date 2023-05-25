import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";
import SummaryScreen from "./src/screens/SummaryScreen";
import TravelBuddyScreen from "./src/screens/TravelBuddyScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from 'react-native-vector-icons'
import store from './src/store/store'
import { Provider } from "react-redux";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name = "Index" 
        component={IndexScreen}
        options={{
          tabBarIcon: () => (
            <Feather name="list" size={24} />
          ),
          tabBarLabel:'',
          tabBarColor:'red'
        }} 
      />
      <Tab.Screen 
        name = "Buddy" 
        component={TravelBuddyScreen}
        options={{
          tabBarIcon: () => (
            <Feather name="list" size={24} />
          ),
          tabBarLabel:'',
          tabBarColor:'blue'
        }} 
      />
      <Tab.Screen 
        name = "Summary" 
        component={SummaryScreen}
        options={{
          tabBarIcon: () => (
            <Feather name="list" size={24} />
          ),
          tabBarLabel:'',
          tabBarColor:'green'
        }} 
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="MainStack" component={MainStack} />
        <Stack.Screen name = "Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}