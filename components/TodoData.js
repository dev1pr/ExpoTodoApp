import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

export default function TodoData(props) {
    return (
        <View style={styles.todoOutput}>
            <Text style={{ color: 'white' }}>{props.task}</Text>
            <Button title='❌' color="black" onPress={props.onDelete.bind(this, props.id)} />
        </View>
    )
}

const styles = StyleSheet.create({
    todoOutput: {
        marginTop: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
    }
})