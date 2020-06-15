/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';


const HomeScreen = ()=>{
  return (
<View>
  <Text>Home Screen </Text>
</View>
  );
}

class App extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <View style={{backgroundColor:'darkgray',marginTop:64,flexDirection:'row',alignItems:'stretch',height:500}} >
        <View style={{width:40,backgroundColor:'red',margin:5}} >
          <Text>1</Text>
        </View>
        <View style={{width:40,height:40,backgroundColor:'red',margin:5,alignSelf:'flex-end'}} >
          <Text>2</Text>
        </View>
        <View style={{width:40,backgroundColor:'red',margin:5}} >
          <Text>3</Text>
        </View>
        <View style={{width:40,height:40,backgroundColor:'yellow',position:'absolute',left:100,top:-10}} >
          <Text>4</Text>
        </View>
        
      </View>
    );
  }

};

const styles = StyleSheet.create({

});

export default App;
