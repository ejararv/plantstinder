import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {View, Text, SafeAreaView,StyleSheet, TouchableOpacity} from 'react-native'
import { AccountScreen } from './Screens/AccountScreen'
import { MyPlantsScreen } from './Screens/MyPlantsScreem'
import { AdvertisementsScreen } from './Screens/AdvertisementsScreen'

const DrawerNav = createDrawerNavigator()

const DrawerRoutes = () => {
    return(
        <NavigationContainer>
            <DrawerNav.Navigator>
                <DrawerNav.Screen 
                component={AdvertisementsScreen}
                name="AdvertisementsScreen">

                </DrawerNav.Screen>
                <DrawerNav.Screen component={MyPlantsScreen}
                name="MyPlantsScreen">

                </DrawerNav.Screen>
                <DrawerNav.Screen component={AccountScreen}
                name="AccountScreen">

                </DrawerNav.Screen>
            </DrawerNav.Navigator>
        </NavigationContainer>
    )
}

export const Drawer = (props) => {
    
    
    return(
        <View style={styles.container}>
            <SafeAreaView style ={{flex: 1}}>
                <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
                
                >
                    
                </TouchableOpacity>
                <View style={{ flex:1, alignItems:"center", justifyContent: "center"}}>
                    <Text>Screen</Text>
                </View>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#FFF"
    }
})