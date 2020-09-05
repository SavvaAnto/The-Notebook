import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList, Alert, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddAchievement } from './src/AddAchievement';
import { Achievement } from './src/Achievement';
import { Category } from './src/Category';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let samplePics = [
  'https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Badges_Daily_15000_Steps-300x300.png',
  'https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Badges_Lifetime_4132_Miles-300x300.png',
  'https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Badges_Lifetime_20000_Floors-300x300.png',
  'https://cdn4.iconfinder.com/data/icons/badges-9/66/7-512.png',
  'https://i.pinimg.com/originals/77/d2/df/77d2df98df4cf1abacbd4eb94bc60ced.png'
]

let sampleCategories = [
  {
    category: 'Custom achievements',
    achieList: [
      {id: 1, title: 'Mobiler I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},
      {id: 2, title: 'Early bird I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},
      {id: 3, title: 'Pushups I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},  
    ]
  },
  {
    category: 'React Native',
    achieList: [
      {id: 1, title: 'Mobiler I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},
      {id: 2, title: 'Early bird I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},
      {id: 3, title: 'Pushups I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},  
    ]
  },
  {
    category: 'Adventures',
    achieList: [
      {id: 1, title: 'Mobiler I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},
      {id: 2, title: 'Early bird I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},
      {id: 3, title: 'Pushups I', badge: samplePics[getRandomInt(4)], enabled: false, date: 'Never done'},  
    ]
  }
]

export default function App() {
  let [achies, setAchievements] = useState(sampleCategories[0].achieList)

  const addAchievement = (title) => {
    setAchievements(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        badge: samplePics[getRandomInt(4)],
        enabled: true,
        date: 'September ' + new Date().getFullYear()
      }
    ])
  }

  const getAchievement = (id) => {
    var achiesChanged = achies
    achiesChanged.find(achie => achie.id === id).enabled ? achiesChanged.find(achie => achie.id === id).enabled = false : achiesChanged.find(achie => achie.id === id).enabled = true
    achiesChanged.find(achie => achie.id === id).date = 'September ' + new Date().getFullYear()
    setAchievements([...achiesChanged])
    // achiesChanged.find(achie => achie.id === id).enabled ? Alert.alert('You\'ve just got \"' + achiesChanged.find(achie => achie.id === id).title + '\" achievement!\n\nWell done!') : 1
  }

  return (
    <View>
      <Navbar title='AchieApp' />
      <View style={styles.container}>
        <AddAchievement onSubmit={addAchievement}/>

        <View>
          <ScrollView>
          {/* <Category sampleCategories={sampleCategories} onAchieve={getAchievement} /> */}
          <View>
            <Text>
              {sampleCategories[0].category}
            </Text>
            <FlatList
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              style={styles.achieList}
              data={achies.slice(0).reverse()}
              renderItem={({ item }) => (
                <Achievement onAchieve={getAchievement} achie={item} />
              )}
            />
          </View>
          <View>
            <Text>
              {sampleCategories[1].category}
            </Text>
            <FlatList
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              style={styles.achieList}
              data={achies.slice(0).reverse()}
              renderItem={({ item }) => ( <Achievement onAchieve={getAchievement} achie={item} /> )}
            />
          </View>
          <View>
            <Text>
              {sampleCategories[2].category}
            </Text>
            <FlatList
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              style={styles.achieList}
              data={achies.slice(0).reverse()}
              renderItem={({ item }) => (
                <Achievement onAchieve={getAchievement} achie={item} />
              )}
            />
          </View>
            
          </ScrollView>
        </View>
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
    // height: '79%',
    paddingVertical: 10,
  }
});