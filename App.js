
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/header';

import TodoList from './components/Todolist/todo_List'

import TodoForm from './components/TodoForm/todoForm';




const App = () => {

  const [todos, setTodos] = useState([
    { id: 0, text: 'love ' },
    { id: 1, text: 'you' },
    { id: 2, text: 'everyone' }
  ])





  const handleTodo = (key) => {
    Alert.alert('SUCESS', 'Todo Deleted ', [
      { text: 'ok' }
    ])
    setTodos((prevtods) => {
      return prevtods.filter((todo) => todo.id != key)
    })

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

  return (
    <View style={style.container}>
      <Header />
      <View style={style.contend}>
        <TodoForm addTodo={addTodo} />
        <View style={style.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoList todo={item} handleTodo={handleTodo} />
            )}
          />
        </View>
      </View>
    </View>
  )

}



const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contend: {
    padding: 40,
  },
  list: {
    marginTop: 40
  }
})

export default App;