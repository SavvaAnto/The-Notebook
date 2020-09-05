import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'

export const Achievement = ({ achie, badge, enabled, date, onAchieve}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {Alert.alert(enabled ? 'Achieved in ' + date + '!' : 'Never done yet')}}
            onLongPress={() => onAchieve(achie.id)}
            >
            <View style={ enabled ? stylesEnabled.achie : stylesDisabled.achie}>
                <Image
                    style={ enabled ? stylesEnabled.picture : stylesDisabled.picture }
                    source={{
                        uri: badge,
                    }}
                />
                <View
                    style={ enabled ? stylesEnabled.overlay : stylesDisabled.overlay }
                />
                <Text style={ enabled ? stylesEnabled.title : stylesDisabled.title }>
                        {achie.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const stylesEnabled = StyleSheet.create({
    achie: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: 'violet'
    },
    picture: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        marginHorizontal: 15
    }
})

const stylesDisabled = StyleSheet.create({
    achie: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: '#ccc'
    },
    picture: {
        width: 70,
        height: 70,
        borderRadius: 10,
        opacity: 0.5
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#eee',
        opacity: 0.5,
    },
    title: {
        fontSize: 20,
        marginHorizontal: 15,
        opacity: 0.5
    }
})