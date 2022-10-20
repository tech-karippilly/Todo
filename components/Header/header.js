import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


function Header() {
    return (
        <View style={style.header}>
            <Text style={style.title}>MyTodos</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#515A5A'
    },
    title: {
        paddingTop: 10,
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Header;