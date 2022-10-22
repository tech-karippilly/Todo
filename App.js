
import React, { useEffect, useState } from 'react';

import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import Header from './components/Header/header';

import TodoList from './components/Todolist/todo_List'

import TodoForm from './components/TodoForm/todoForm';




const App = () => {

  const [todos, setTodos] = useState([
    { id: 0, text: 'love ' },
    { id: 1, text: 'you' },
    { id: 2, text: 'everyone' }
  ])

  const [todoErr, setTodoErr] = useState(false)

  useEffect(() => {
    if (todos.length === 0) {
      setTodoErr(true)
    }
  }, [todos])


  const handleTodo = (key) => {


    if (key === undefined) {
      console.log('No keys',);
    } else {
      Alert.alert('SUCESS', 'Todo Deleted ', [
        { text: 'ok' }
      ])
      setTodos((prevtods) => {
        return prevtods.filter((todo) => todo.id != key)
      })
    }

  }

  const addTodo = (todo) => {
    Alert.alert('SUCESS', 'Todo added sucessfully', [
      { text: 'ok' }
    ])
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random(), text: todo }
      ]
    })
  }

  console.log('todoErr', todoErr);
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
              < TodoList todoErr={todoErr} todo={todos} handleTodo={handleTodo} /> :
              <FlatList
                data={todos}
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

export default App;