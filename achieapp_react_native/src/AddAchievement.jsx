import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddAchievement = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Input an achievement')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Type a new achevement'
            />
            <Button style={styles.button} title='Add' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        marginHorizontal: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#3949ab',
    },
    input: {
        width: '80%',
        padding: 10,
        fontSize: 18
    },
})