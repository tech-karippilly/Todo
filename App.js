
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/header';




const App = () => {

  const [todos, setTodos] = useState([
    { id: 0, text: 'love ' },
    { id: 1, text: 'you' },
    { id: 2, text: 'everyone' }
  ])

  const [todoLen, setTodoLen] = useState(true)

  useEffect(() => {
    console.log('len', todos.length);


    if (todos.length == 0) {
      setTodoLen(false)
    }
  }, [todos])
  const handleTodo = (key) => {
    setTodos((prevtods) => {
      return prevtods.filter((todo) => todo.id != key)
    })
  }

  return (
    <View style={style.container}>
      <Header />
      <View style={style.contend}>
        <TodoForm handleTodo={handleAddTodo} />
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
  },
  contend: {
    padding: 40,
  },
  list: {
    marginTop: 40
  }
})

export default App;
