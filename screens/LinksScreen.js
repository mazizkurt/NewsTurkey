import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  ImageBackground,
  ActivityIndicator,
  RefreshControl,
  Animated,
  Easing,
  Linking
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
var AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
import { Constants, WebBrowser } from 'expo';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';
AdMobInterstitial.setAdUnitID('ca-app-pub-1934516705299101/3919970111'); // Test ID, Replace with your-admob-unit-id
AdMobInterstitial.setTestDeviceID('EMULATOR');
export default class LinksScreen extends React.Component{
  gonder(url){
    console.log('tıkladı');
    WebBrowser.openBrowserAsync(url);
  }
  componentDidMount = async() => {
    await AdMobInterstitial.requestAdAsync();
await AdMobInterstitial.showAdAsync();
  };
  
  
  render(){
    return (
      <ScrollView style={styles.container}>
        <Image source={{uri:this.props.navigation.getParam('image')}} style={{width:'100%',height:200}} />
        <Text style={{textAlign:'center',fontSize:18,color:'#474747',padding:15}}>{this.props.navigation.getParam('title').toUpperCase()}</Text>
        <Text style={{textAlign:'center',fontSize:16,color:'#474747',padding:15}}>{this.props.navigation.getParam('description')}</Text>
        <Text style={{textAlign:'center',fontSize:16,color:'#474747',padding:15}}>{this.props.navigation.getParam('content')} <Text style={{color:'#1B7F9C'}} onPress={()=>this.gonder(this.props.navigation.getParam('url'))}>Devamını Oku...</Text></Text>
        <Text style={{textAlign:'right',fontSize:16,color:'#474747',padding:15}}>{this.props.navigation.getParam('zaman')}</Text>


      </ScrollView>
    );
  }

}

LinksScreen.navigationOptions = ({navigation}) => ({
  title:navigation.getParam('baslik'),
  headerTitleStyle:{
    color:'#474747',
  },

   headerLeft: (
    
    <Ionicons onPress={()=>navigation.goBack(null)} name="ios-arrow-back" size={32} style={{marginLeft: 20,}} color="#474747"/>
   ),
  })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
