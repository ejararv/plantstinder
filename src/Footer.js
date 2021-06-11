import React from 'react'
import {View, StyleSheet,Text} from 'react-native'

export const Footer = () => {


    return (
        <View style={styles.footer}>


        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: 'green',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30, 
        marginTop: '60%'
    }
})