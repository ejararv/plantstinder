import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddItem } from './src/AddItem';
import {Navbar} from './src/Navbar'
import { Login } from './src/Login';


export default function App() {
  return (
    
    <View style={styles.container}>
       <Navbar title="Text">
       <AddItem></AddItem>
      <Text  >Пидарасы</Text>
      <StatusBar style="auto" />
      </Navbar>
      <Login></Login>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
