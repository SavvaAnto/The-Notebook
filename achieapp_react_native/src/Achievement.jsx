import React from 'react'
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native'

export const Achievement = ({packId ,achie, onAchieve }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {Alert.alert(achie.enabled ? 'Achieved in ' + achie.date + '!' : 'Never done yet')}}
            onLongPress={() => onAchieve(packId , achie.id)}
        >
            <View style={ achie.enabled ? stylesEnabled.achie : stylesDisabled.achie }>
                <ImageBackground
                    style={ achie.enabled ? stylesEnabled.picture : stylesDisabled.picture }
                    imageStyle={{ borderRadius: 10, width: '100%', height: '100%', resizeMode: "cover"}}
                    source={{ uri: achie.badge }}
                >
                    <Text style={ achie.enabled ? stylesEnabled.title : stylesDisabled.title }>
                        {achie.title}
                    </Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const stylesEnabled = StyleSheet.create({
    achie: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: 'violet',
        width: 120,
        height: 120,
    },
    picture: {
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        color: 'black',
        fontSize: 16,
        marginHorizontal: 15,
        paddingVertical: 10,
    }
})

const stylesDisabled = StyleSheet.create({
    achie: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: '#ccc',
        width: 120,
        height: 120,
    },
    picture: {
        width: '90%',
        height: '90%',
        borderRadius: 10,
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        color: 'black',
        fontSize: 16,
        marginHorizontal: 15,
        paddingVertical: 10,
    }
})