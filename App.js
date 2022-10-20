
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';




const App = () => {

  const [todos, setTodos] = useState([
    { id: 0, text: 'love ' },
    { id: 1, text: 'you' },
    { id: 2, text: 'everyone' }
  ])

  return (
    <View style={style.container}>
      {/* HEADER */}
      <View style={style.contend}>
        {/* FORM */}
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
    paddingTop: 30
  },
  contend: {
    padding: 40,
  },
  list: {
    marginTop: 40
  }
})

export default App;
