import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from 'react-native-vector-icons'
import store from './src/store/store'
import { Provider } from "react-redux";

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
      </Tab.Navigator>
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