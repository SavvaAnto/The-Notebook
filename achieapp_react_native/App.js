import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddAchievement } from './src/AddAchievement';
import { Achievement } from './src/Achievement';

export default function App() {
  let [achies, setAchievements] = useState([
    {id: 1, title: 'Create a mobile app', enabled: false, date: 'Never done'},
    {id: 2, title: 'Wake up before 8am', enabled: false, date: 'Never done'},
    {id: 3, title: 'Push up 50 times', enabled: false, date: 'Never done'},
  ])

  const addAchievement = (title) => {
    setAchievements(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        enabled: true,
        date: 'September ' + new Date().getFullYear()
      }
    ])
  }

  const getAchievement = (id) => {
    var achiesChanged = achies
    achiesChanged.find(achie => achie.id === id).enabled ? achiesChanged.find(achie => achie.id === id).enabled = false : achiesChanged.find(achie => achie.id === id).enabled = true
    achiesChanged.find(achie => achie.id === id).date = 'September ' + new Date().getFullYear()
    setAchievements([ ...achiesChanged])
    achiesChanged.find(achie => achie.id === id).enabled ? Alert.alert('You\'ve just got \"' + achiesChanged.find(achie => achie.id === id).title + '\" achievement!\n\nWell done!') : 1
  }

  return (
    <View>
      <Navbar title='AchieApp' />
      <View style={styles.container}>
        <AddAchievement onSubmit={addAchievement}/>
        <FlatList
          keyExtractor={item => item.id.toString()}
          style={styles.achieList}
          data={achies.slice(0).reverse()}
          renderItem={({ item }) => (
            <Achievement onAchieve={getAchievement}
              achie={item}
              badge='https://images.assetsdelivery.com/compings_v2/incomible/incomible1310/incomible131000021.jpg'
              enabled={item.enabled}
              date={item.date}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  achieList: {
    height: '79%',
    paddingVertical: 10,
  }
});