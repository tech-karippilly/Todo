import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'



const TodoForm = ({ handleAddTodo }) => {

    const [text, setText] = useState()
    const [err, setErr] = useState(false)

    const changeHandler = (val) => {
        setText(val)

    }

    const handleText = () => {

        console.log("text", text.length);
        if (text.length === 0) {
            setErr(true)
        } else {
            handleAddTodo({ id: Math.random(), text })
            setText('')
        }

    }

    console.log('err', err);
    return (
        <View>
            <TextInput
                style={err ? style.inputErr : style.input}
                placeholder='New Todo..'
                onChangeText={changeHandler}
                value={text}
            />
            <View style={style.btn}>
                <Button
                    onPress={handleText}
                    color='#34495E'
                    title='Add Todo'
                />
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#283747',
        padding: 6,

    },
    inputErr: {
        borderBottomWidth: 1,
        borderColor: '#CB4335'
    },
    btn: {
        padding: 20,
        marginTop: 20,

    }
})

export default TodoForm;