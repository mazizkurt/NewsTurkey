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
  Easing
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';
var AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class HomeScreen extends  React.Component {
  constructor(props){
    super(props);
    this.state={
      spor:[],
      yukleniyor:true,
      refreshing: false,
      goster:true,
      gosterim:'sports',
      scrollY: new Animated.Value(0),
      opacity:new Animated.Value(1)
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    
    fetch('https://newsapi.org/v2/top-headlines?country=tr&category='+this.state.gosterim+'&apiKey=b6e9003773684436bcc345334d279670')
    .then((response) => response.json())
    .then((responseJson) => {
            var dizi=[];
            for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
              dizi.push(responseJson.articles[i]);
            }
            this.setState({spor:dizi,refreshing:false});
      
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount = async () => {
    
    const { navigation } = this.props
    navigation.setParams({
        goster:this.state.goster,
        arama: this.arama,
        kelime: this.kelime,
    })
    fetch('https://newsapi.org/v2/top-headlines?country=tr&category='+this.state.gosterim+'&apiKey=b6e9003773684436bcc345334d279670')
    .then((response) => response.json())
    .then((responseJson) => {
            var dizi=[];
            for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
              dizi.push(responseJson.articles[i]);
            }
            this.setState({spor:dizi,yukleniyor:false});
      
    })
    .catch((error) => {
      console.error(error);
    });
  };
  arama = async (durum) => {
    const { navigation } = this.props;
    navigation.setParams({
        goster:durum,
       
    })
    }
    kelime = async (text)=>{
      this.setState({yukleniyor:true})
      fetch('https://newsapi.org/v2/everything?q='+text+'&language=tr&apiKey=b6e9003773684436bcc345334d279670')
      .then((response) => response.json())
      .then((responseJson) => {
              var dizi=[];
              for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
                dizi.push(responseJson.articles[i]);
              }
              this.setState({spor:dizi,yukleniyor:false});
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
  zaman(key){
    const zaman=this.state.spor[key].publishedAt;
    var yenizaman = zaman.replace('T', ' ' );
    var yepyenizaman =yenizaman.replace('Z','')
    return yepyenizaman;
  }

    spor(){
      this.setState({yukleniyor:true,spor:[],gosterim:'sports'})
        fetch('https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=b6e9003773684436bcc345334d279670')
        .then((response) => response.json())
        .then((responseJson) => {
                var dizi=[];
                for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
                  dizi.push(responseJson.articles[i]);

                }

        
                this.setState({spor:dizi,yukleniyor:false});
          
        })
        .catch((error) => {
          console.error(error);
        });
  
    }
    saglik(){
      this.setState({yukleniyor:true,spor:[],gosterim:'health'})

      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=b6e9003773684436bcc345334d279670')
      .then((response) => response.json())
      .then((responseJson) => {
              var dizi=[];
              for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
                dizi.push(responseJson.articles[i]);

              }

      
              this.setState({spor:dizi,yukleniyor:false});
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
    bilim(){
      
      this.setState({yukleniyor:true,spor:[],gosterim:'science'})

      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=b6e9003773684436bcc345334d279670')
      .then((response) => response.json())
      .then((responseJson) => {
              var dizi=[];
              for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
                dizi.push(responseJson.articles[i]);

              }

      
              this.setState({spor:dizi,yukleniyor:false});
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
    teknoloji(){
      this.setState({yukleniyor:true,spor:[],gosterim:'technology'})

      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=b6e9003773684436bcc345334d279670')
      .then((response) => response.json())
      .then((responseJson) => {
              var dizi=[];
              for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
                dizi.push(responseJson.articles[i]);

              }

      
              this.setState({spor:dizi,yukleniyor:false});
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
    genel(){
      this.setState({yukleniyor:true,spor:[],gosterim:'general'})

      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=b6e9003773684436bcc345334d279670')
      .then((response) => response.json())
      .then((responseJson) => {
              var dizi=[];
              for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
                dizi.push(responseJson.articles[i]);

              }

      
              this.setState({spor:dizi,yukleniyor:false});
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
    eglence(){
      this.setState({yukleniyor:true,spor:[],gosterim:'entertainment'})

      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=b6e9003773684436bcc345334d279670')
      .then((response) => response.json())
      .then((responseJson) => {
              var dizi=[];
              for(var i=0;i<=Object.keys(responseJson.articles).length-1;i++){
                dizi.push(responseJson.articles[i]);

              }

      
              this.setState({spor:dizi,yukleniyor:false});
        
      })
      .catch((error) => {
        console.error(error);
      });
    }

 
  render(){
    console.log(this.state.goster)
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const headerOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
   const lapsList = this.state.spor.map((data,i) => {
    
     if(i%4==1){
       return(
          <View style={styles.reklam} key={i}>

                
          <PublisherBanner
          bannerSize="mediumRectangle"
          adUnitID="ca-app-pub-1934516705299101/7675134878" // Test ID, Replace with your-admob-unit-id
          testDeviceID="EMULATOR"
          onDidFailToReceiveAdWithError={this.bannerError}
          onAdMobDispatchAppEvent={this.adMobEvent} />
          </View>
       )
        
     }else{
      return (
        <TouchableOpacity style={styles.kutu} key={i} onPress={()=>this.props.navigation.navigate('Links',{image:data.urlToImage,title:data.title,zaman:this.zaman(i),description:data.description,content:data.content,url:data.url,baslik:data.author})}>
            <Image source={{uri:data.urlToImage}} style={{width:'100%',height:150}}/>
            <Text style={{textAlign:'center',fontSize:16,color:'#474747',padding:15}}>{data.title}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Ionicons name='ios-heart' color='#474747' size={30} style={{padding:10}} />
              <Ionicons name='ios-chatbubbles' color='#474747' size={30} style={{padding:10}}/>
              <Ionicons name='ios-git-network' color='#474747' size={30} style={{padding:10}}/>
              <View style={{flexDirection:'row',alignItems:'center',position: 'absolute',right:10}}>
                <Text style={{textAlign:'center',fontSize:11,color:'#474747',padding:15}}>{this.zaman(i)}</Text>
              </View>
  
            </View>
        </TouchableOpacity>
      )
     }
    
  })
    return (
      <View >
        <Animated.View  style={{height:headerHeight,flexDirection:'row',alignItems: 'center',justifyContent:'center',opacity:headerOpacity}}  >
                <TouchableOpacity onPress={()=>this.spor()} style={{flexDirection:'column',alignItems:'center',padding:5}}>
                  <Image source={{uri:'https://www.technobezz.com/files/uploads/2019/06/Good-Training-At-Training-Camps-For-Basketball-Players.jpg'}} style={styles.kategoriler} />
                  <Text style={{color:'#474747'}}>Spor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.teknoloji()} style={{flexDirection:'column',alignItems:'center',padding:5}}>
                  <Image source={{uri:'https://purelifi.com/wp-content/uploads/2019/02/AdobeStock_118793641-1320x740.jpeg'}} style={styles.kategoriler} />
                  <Text style={{color:'#474747'}}>Teknoloji</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.bilim()} style={{flexDirection:'column',alignItems:'center',padding:5}}>
                  <Image source={{uri:'https://pbs.twimg.com/profile_images/838685007510110208/GSLaP6-U.jpg'}} style={styles.kategoriler} />
                  <Text style={{color:'#474747'}}>Bilim</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.saglik()} style={{flexDirection:'column',alignItems:'center',padding:5}}>
                  <Image source={{uri:'https://isimizisg.com/wp-content/uploads/2018/05/saglik.jpg'}} style={styles.kategoriler} />
                  <Text style={{color:'#474747'}}>Sağlık</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.genel()} style={{flexDirection:'column',alignItems:'center',padding:5}}>
                  <Image source={{uri:'https://web.chessdailynews.com/wp-content/uploads/2015/03/general_news3.jpg'}} style={styles.kategoriler} />
                  <Text style={{color:'#474747'}}>Genel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.eglence()} style={{flexDirection:'column',alignItems:'center',padding:5}}>
                  <Image source={{uri:'https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2017/02/kutlama666.jpg'}} style={styles.kategoriler} />
                  <Text style={{color:'#474747'}}>Eğlence</Text>
                </TouchableOpacity>
             
       </Animated.View>
   
      <ScrollView  contentContainerStyle={{justifyContent:'center',alignItems:'center'}} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
        )}
        
        >
        {this.state.yukleniyor ? <ActivityIndicator/>: lapsList}
     
        <View style={{height:120}}></View>

         
      </ScrollView>
      </View>
    );
  }

}

 
HomeScreen.navigationOptions = ({navigation}) => {
  const { params = {} } = navigation.state
  return {
       headerTitle: params.goster ? 'News Turkey' : (<TextInput onChangeText={(text) => params.kelime(text)} style={{fontSize:18,textAlign:'center',width:'100%',borderBottomColor:'#E4E4E4',borderBottomWidth:1}} placeholder='Ara'/>),
       headerTitleStyle:{
        color:'#474747',
      },
      headerRight:
      
      params.goster ?  (
  
        <TouchableOpacity onPress={()=>params.arama(false)}><Ionicons  name="ios-search" size={32} style={{marginRight: 20,}} color="#474747"/></TouchableOpacity>
      ) :  <TouchableOpacity onPress={()=>params.arama(true)}><Ionicons  name="ios-close" size={40} style={{marginRight: 20,}} color="#474747"/></TouchableOpacity>,
     
       // Similarly for the rest
  }  
 
}
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
    backgroundColor:'white',
    borderColor:'#EAEAEA',
    borderWidth:1,
    marginTop:20,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  kategoriler:{
    width:50,
    height:50,
    borderRadius:25,
    
  },
  reklam:{
    justifyContent:'center',
    alignItems:'center',
    width:'90%',
    height:300,
    borderRadius:5,
    backgroundColor:'white',
    borderColor:'#EAEAEA',
    borderWidth:1,
    marginTop:20,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  }
  
});
