import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

export const AddPack = (props) => {
    return (
        <View style={styles.container}>
            <Button title='More achies'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 50
    },
})