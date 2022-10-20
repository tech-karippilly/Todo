
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/header';
import TodoList from './components/Todolist/todo_List';




const App = () => {

  const [todos, setTodos] = useState([
    { id: 0, text: 'love ' },
    { id: 1, text: 'you' },
    { id: 2, text: 'everyone' }
  ])

  return (
    <View style={style.container}>
      <Header />
      <View style={style.contend}>
        {/* FORM */}
        <View style={style.list}>

          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoList todo={item} />
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
