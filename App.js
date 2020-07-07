import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import TodoData from './components/TodoData'
import TodoInput from './components/TodoInput'

export default function App() {

  const [totalInput, setTotalInput] = useState([])

  const totalInputHandler = (todoItem) => {
    setTotalInput(currentInput => [...currentInput, { id: Math.random().toString(), value: todoItem }])
  }

  const deleteHandler = todoId => {
    setTotalInput(currentInput => {
      return currentInput.filter((todo) => todo.id !== todoId);
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.heading}>Add Your Tasks Here! 📝</Text>
      <TodoInput onAddTodo={totalInputHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={totalInput}
        renderItem={todoData => <TodoData
          task={todoData.item.value}
          id={todoData.item.id}
          onDelete={deleteHandler}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#222',
  },
  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },

});
