/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Sound from 'react-native-sound';
import SoundPlayer, { SoundPlayerEventData } from 'react-native-sound-player';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [si,setSi]=useState()
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(()=>{
    const sound = new Sound(require('./src/audio/coldplay.mp3'),(err:any)=>{
      if (err) {
        
        console.log("err....",err);
      }
      else {
        console.log("duration....",sound?.getDuration())
        setSi(sound)
      }
      
    },[])

    // SoundPlayer.playAsset(require('./src/audio/Coldplay-Viva-La-Vida.mp3'))
    // const onComplete =(data: SoundPlayerEventData)=>{
    //   console.log("played ...",data.success)
    // }
    // const listener = SoundPlayer.addEventListener('FinishedPlaying',onComplete)
    // return ()=> listener.remove()
  })
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle,flex:1,backgroundColor:'red'}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity 
        onPress={()=>console.log(si?.getDuration())}
        style={{backgroundColor:'white',width:100,height:70}}>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
