
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/Screens/LoginScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AdvertisementsScreen } from './src/Screens/AdvertisementsScreen';
import { MyPlantsScreen } from './src/Screens/MyPlantsScreen';
import { AccountScreen } from './src/Screens/AccountScreen';
import { HomeScreen } from './src/Screens/HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';


const Drawer = createDrawerNavigator()



export default function App() {
  return (


    <NavigationContainer>
     
      <Drawer.Navigator  screenOptions={{headerTransparent: true} }
      initialRouteName='Login'
      drawerStyle={{
        backgroundColor:"#19B859",
        
        borderTopRightRadius:30}}
      component={LoginScreen}
      options={{title: 'Login'}}>
       
       <Drawer.Screen
        name='MyPlantsScreen'
        component={MyPlantsScreen}
        options={{title: 'MyPlantsScreen'}}>
        </Drawer.Screen>
        <Drawer.Screen
        name='AdvertisementsScreen'
        component={AdvertisementsScreen}
        options={{title: 'AdvertisementsScreen'}}>
        </Drawer.Screen>
        <Drawer.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{title: 'HomeScreen'}}>
        </Drawer.Screen>
        
        <Drawer.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{title: 'AccountScreen'}}>
        </Drawer.Screen>
        <Drawer.Screen
        name='Login'
        component={LoginScreen}
        options={{title: 'Login'}}>
        </Drawer.Screen>
        <Drawer.Screen
        name='Registration'
        component={RegistrationScreen}>
          
        </Drawer.Screen>
      </Drawer.Navigator>
 
      
     
    </NavigationContainer>
   
    
  );
}


