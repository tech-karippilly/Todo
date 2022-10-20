import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



function TodoList({ todo, handleTodo }) {
    return (
        <TouchableOpacity onPress={() => { handleTodo(todo.id) }}>
            <Text style={style.item}>{todo.text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    item: {
        borderColor: '#5D6D7E',
        borderWidth: 1,
        backgroundColor: '#CCD1D1',
        padding: 15,
        marginTop: 10,
        textAlign: 'center',
        textTransform: "uppercase",
        borderRadius: 10,
        borderStyle: 'dashed',
        color: '#17202A'
    }
})

export default TodoList;