import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Header from '../Header/header';
import TodoForm from '../TodoForm/todoForm';
import TodoList from '../Todolist/todo_List';
import { useSelector, useDispatch } from 'react-redux';
import { todoAdd, deleteTodo, showTodo } from '../../src/reducer/todoReducer';



const Home = () => {


    const todo = useSelector(showTodo)


    const dispatch = useDispatch()



    const [todoErr, setTodoErr] = useState(false)

    useEffect(() => {
        if (todo.payload.todos.length === 0) {
            setTodoErr(true)
        } else {
            setTodoErr(false)
        }
    }, [todo])

    const handleTodo = (key) => {
        if (key === undefined) {
            Alert.alert('ERROR', 'ADD NEW TODOS', [
                { text: 'ok' }
            ])
        } else {

            dispatch(deleteTodo(key))

            Alert.alert('SUCESS', 'Todo Deleted ', [
                { text: 'ok' }
            ])
        }
    }

    const addTodo = (todo) => {
        dispatch(todoAdd({
            id: Math.random(),
            text: todo
        }))

        Alert.alert('SUCESS', 'Todo added sucessfully', [
            { text: 'ok' }
        ])
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={style.container}>
                <Header />
                <View style={style.contend}>
                    <TodoForm addTodo={addTodo} />
                    <View style={style.list}>
                        {todoErr ?
                            < TodoList todoErr={todoErr} todo={todo.payload.todos} handleTodo={handleTodo} /> :
                            <FlatList
                                data={todo.payload.todos}
                                renderItem={({ item }) => (
                                    < TodoList todo={item} handleTodo={handleTodo} />
                                )}
                            />
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contend: {
        padding: 40,
        flex: 1
    },
    list: {
        marginTop: 40,
        flex: 1
    }
})

export default Home;