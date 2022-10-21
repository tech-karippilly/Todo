
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/header';
import TodoForm from './components/TodoForm/todoForm';




const App = () => {

  const [todos, setTodos] = useState([
    { id: 0, text: 'love ' },
    { id: 1, text: 'you' },
    { id: 2, text: 'everyone' }
  ])

  const handleAddTodo = (todo) => {
    setTodos((prevtodo) => ({
      ...prevtodo,
      todo
    }))
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
              <Text>{item.text}</Text>
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
