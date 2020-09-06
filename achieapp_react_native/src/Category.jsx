import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Achievement } from './Achievement'

export const Category = ({ pack, onAchieve }) => {
    return (
        <View>
            <Text>
                {pack.packName}
            </Text>
            <FlatList
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                style={styles.achieList}
                data={pack.achieList.slice(0).reverse()}
                renderItem={({ item }) => ( <Achievement onAchieve={onAchieve} achie={item} /> )}
              />
        </View>
    )
}

const styles = StyleSheet.create({
    achieList: {
        paddingVertical: 10,
    }
});