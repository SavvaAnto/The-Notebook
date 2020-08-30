import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddAchievement } from './src/AddAchievement';
import { Achievement } from './src/Achievement';

export default function App() {
  let [achies, setAchievements] = useState([])

  var i = 0;
  var defAchies = ['Create a mobile app', 'Wake up before 8am', 'Push up 50 times']

  while (i < 3)
  {
    achies[i] = {
      id: Date.now().toString() + i,
      title: defAchies[i++],
      enabled: 0
    }
  }

  const addAchievement = (title) => {
    setAchievements(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        enabled: 1
      }
    ])
  }

  return (
    <View>
      <Navbar title='AchieApp' />
      <View style={styles.container}>
        <AddAchievement onSubmit={addAchievement}/>
        <ScrollView style={styles.achieList}>
          {achies.slice(0).reverse().map(achie => {
            return (
              <Achievement
                key={achie.id}
                achie={achie}
                badge='https://images.assetsdelivery.com/compings_v2/incomible/incomible1310/incomible131000021.jpg'
                enabled={achie.enabled}
              />
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  achieList: {
    height: '79%',
    paddingVertical: 10
  }
});