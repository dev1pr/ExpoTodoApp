import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

export default function TodoInput(props) {

    const [input, setInput] = useState('')
    const inputHandler = (enteredInput) => {
        setInput(enteredInput)
    }

    return (
        <View style={styles.headContainer}>
            <TextInput placeholder='Enter Task' style={styles.inputStyle} onChangeText={inputHandler} value={input} />
            <Button title='Add Task' color='darkgreen' onPress={props.onAddTodo.bind(this, input)} />
        </View>
    )
}

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        marginBottom: 20,
        color: 'white'
    },
    inputStyle: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        width: '75%',
        color: 'white',
    },
})