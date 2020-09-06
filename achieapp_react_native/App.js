import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList, Alert, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddAchievement } from './src/AddAchievement';
import { Achievement } from './src/Achievement';
import { Category } from './src/Category';

let sampleData = [
  {
    packId: 1000,
    packName: 'Custom achievements',
    achieList: [
      {id: 1, title: 'War Bonds', badge: 'https://cdn.vox-cdn.com/thumbor/EW84Q50BbzPbqylwk_zDOMzYABw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16022135/A_Consensus_sm.jpg', enabled: false, date: 'Never done'},
      {id: 2, title: 'Spoils of War', badge: 'https://preview.redd.it/876de1owrip31.jpg?width=960&crop=smart&auto=webp&s=740d3319e1496b4d6269376d1b30a76115a1fa75', enabled: false, date: 'Never done'},
    ]
  },
  {
    packId: 1001,
    packName: 'React Native',
    achieList: [
      {id: 101, title: 'Piece Initiative', badge: 'https://i.guim.co.uk/img/media/6088d89032f8673c3473567a91157080840a7bb8/413_955_2808_1685/master/2808.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=412cc526a799b2d3fff991129cb8f030', enabled: false, date: 'Never done'},
      {id: 102, title: 'Give Piece a Chance', badge: 'https://www.michigan.org/sites/default/files/uploads/2017/Heidi%20Toelle%20snowboarding.jpg', enabled: false, date: 'Never done'},
      {id: 103, title: 'Killanthropist', badge: 'https://lh3.googleusercontent.com/proxy/K_vPQBPmyenwyCLxkoX0Uj-MVP_sTJ-BsezA5XIolGi7Hj_-7kxNykV_p7fV30EqJCDhtFesMnSQAog5A5Pmv-uB1Y5EG9q8jBeB6fVfFNxT7VPbjI7EZ2UlOAg2J2WoZ38vlzOleKoK6A', enabled: false, date: 'Never done'},  
    ]
  },
  {
    packId: 1002,
    packName: 'Adventures',
    achieList: [
      {id: 201, title: 'Office Map Veteran', badge: 'https://cdn.vox-cdn.com/thumbor/Qvk84S694SoWHCqG4NJuwbmtk98=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19430728/lede2.jpg', enabled: false, date: 'Never done'},
      {id: 202, title: 'Dust2 Map Veteran', badge: 'https://alk3r.files.wordpress.com/2016/09/odda-norway.jpg', enabled: false, date: 'Never done'},
      {id: 203, title: 'Inferno Map Veteran', badge: 'https://travel.usnews.com/dims4/USNEWS/ad5d343/2147483647/resize/255x255%5E%3E/crop/255x255/quality/85/?url=https://travel.usnews.com/images/gettyimages-615356742_1r9rLO8.jpg', enabled: false, date: 'Never done'},  
      {id: 204, title: 'Inferno Map Veteran', badge: 'https://www.changegroup.co.uk/sites/uk/assets/Image/Travel%20Money%20Specialist-680px.jpg', enabled: false, date: 'Never done'},  
    ]
  }, 
]

export default function App() {
  let [achies, setAchievements] = useState(sampleData[0].achieList)

  const addAchievement = (title) => {
    setAchievements(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/iks/apps/730/eeed5298fbd3d97c0506a3e8d01c17bedaa5cb73.jpg',
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
  var i = 10
  return (
    <View>
      <Navbar title='AchieApp' />
      <View style={styles.container}>
        <AddAchievement onSubmit={addAchievement}/>

        <View>
          <ScrollView style={styles.packs}>
            {sampleData.map(pack => (
              <Category key={pack.packId.toString()} pack={pack} onAchieve={getAchievement} />
            ))}
            {/*
            <View>
              <Text>
                {sampleData[0].packName}
              </Text>
              <FlatList
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                style={styles.achieList}
                data={sampleData[0].achieList.slice(0).reverse()}
                renderItem={({ item }) => ( <Achievement onAchieve={getAchievement} achie={item} /> )}
              />
            </View>
            <View>
              <Text>
                {sampleData[1].packName}
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
                {sampleData[2].packName}
              </Text>
              <FlatList
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                style={styles.achieList}
                data={achies.slice(0).reverse()}
                renderItem={({ item }) => ( <Achievement onAchieve={getAchievement} achie={item} /> )}
              />
            </View> */}
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
  packs: {
    height: '84%'
  },
  achieList: {
    paddingVertical: 10,
  }
});