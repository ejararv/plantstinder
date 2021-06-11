import React from 'react'
import {TextInput, StyleSheet,View, Text,Button } from 'react-native'


export const  Login = () => {

    return (
        <View>
            <Text/>
            <View>
                <TextInput 
                    placeholder="Email"
                    style={styles.input}
                    autoCapitalize="none">
                    
                </TextInput>
                <TextInput 
                    placeholder="Password"
                    style={styles.input}
                    autoCapitalize="none">
                    
                </TextInput>
                <Button
                    
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Login"
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width: '100%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'blue'
    }
})