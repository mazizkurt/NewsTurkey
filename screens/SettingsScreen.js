import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SettingsScreen extends  React.Component {
  render(){
    return (
      <ScrollView style={{flex:1}} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}>
          <Text>Ayarlar Sayfası</Text>
      </ScrollView>
     
    );
  }

}

SettingsScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  kutu:{
    width:'90%',
    height:300,
    borderRadius:5,
    
    borderColor:'#EAEAEA',
    borderWidth:1,
    marginTop:20
  }
  
});
