
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/header';
import TodoList from './components/Todolist/todo_List'



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
      setTodos((prevtods) => {
        return prevtods.filter((todo) => todo.id != key)
      })
    }
  }

  console.log('todoErr', todoErr);
  return (
    <View style={style.container}>
      <Header />
      <View style={style.contend}>
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
