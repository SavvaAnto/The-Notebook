import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Achievement } from './Achievement'

export const Category = ({ pack, onAchieve }) => {
    if (pack.achieList.length) {
        return (
            <View>
                <Text style={styles.title}>
                    {pack.packName}
                </Text>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    style={styles.achieList}
                    data={pack.achieList.slice(0).reverse()}
                    renderItem={({ item }) => ( <Achievement packId={pack.packId} onAchieve={onAchieve} achie={item} /> )}
                  />
            </View>
        )
    } else
    {
        return (<View />)
    }
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        fontSize: 16
    },
    achieList: {
        paddingVertical: 10,
    }
});