import React from "react";
import { Text, TouchableOpacity, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import "react-native-gesture-handler";

export default class SwiperCarousel extends React.Component {
    render() {
        return (
              <View style={{flex:1, margin:5}}>
                  <Swiper
                      loop
                      timeout={5}
                      minDistanceForAction={0}
                      controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: ' ',
                      nextTitleStyle: { color: 'white', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {' '}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                      <View style={{backgroundColor:"rgba(20,20,200,0.3)",borderColor:'black', borderWidth:1, flexDirection:'row'}}>
                          <View style={{flexDirection:'column'}}>
                         <Image
                         style={{height:'80%', width:150, margin:5, borderColor:'white', borderWidth:0.5}}
                         source={{uri:'https://careeratlic.in/img/client11.png'}}
                         />
                         <Text style={{fontSize:20, margin:5}}>
                         Ram Kumar Sahu
                         </Text>
                         </View >
                         <View style={{width:(DEVICE_WIDTH)-180,justifyContent:'center', alignItems:'center', margin:5}}>
                             <Text style={{fontSize:15, fontWeight:'700'}}>
                             Mr.J.K.Chaurasia guided and motivated me into LIC agency, he trained me on various LIC products and marketing.
                              He has supported me every time when I required his guidance .
                             Now as an agent I am earning decently which is more than my previous job.
                             </Text>
                         </View>
                      </View>

                      <View style={{backgroundColor:"rgba(20,20,200,0.3)",borderColor:'black', borderWidth:1, flexDirection:'row'}}>
                          <View style={{flexDirection:'column'}}>
                         <Image
                         style={{height:'80%', width:150, margin:5, borderColor:'black', borderWidth:0.5}}
                         source={{uri:'https://careeratlic.in/img/client3.png'}}
                         />
                         <Text style={{fontSize:20, margin:5}}>
                         Dinesh Yadav
                         </Text>
                         </View >
                         <View style={{width:(DEVICE_WIDTH)-180,justifyContent:'center', alignItems:'center', margin:5}}>
                             <Text style={{fontSize:15, fontWeight:'700'}}>
                             Mr.J.K.chaurasia is person who introduced me about the benefit of being an LIC Agent with minimum capital investment And maximum output as per our potential. .
                             </Text>
                         </View>
                      </View>

                      
                      <View style={{backgroundColor:"rgba(20,20,200,0.3)",borderColor:'black', borderWidth:1, flexDirection:'row'}}>
                          <View style={{flexDirection:'column'}}>
                         <Image
                         style={{height:'80%', width:150, margin:5, borderColor:'black', borderWidth:0.5}}
                         source={{uri:'https://careeratlic.in/img/client2.jpg'}}
                         />
                         <Text style={{fontSize:20, margin:5}}>
                         Dayal Sharan
                         </Text>
                         </View >
                         <View style={{width:(DEVICE_WIDTH)-180,justifyContent:'center', alignItems:'center', margin:5}}>
                             <Text style={{fontSize:15, fontWeight:'700'}}>
                             I had met Mr.J.K.Chaurasia few years back, told him about my the financial situation with all patience he understood and encouraged me advised me to join as a LIC agent .
                             He helped me in understanding policies and guided in helping the customers.

                             </Text>
                         </View>
                      </View>

                      
                      <View style={{backgroundColor:"rgba(20,20,200,0.3)",borderColor:'black', borderWidth:1, flexDirection:'row'}}>
                          <View style={{flexDirection:'column'}}>
                         <Image
                         style={{height:'80%', width:150, margin:5, borderColor:'black', borderWidth:0.5}}
                         source={{uri:'https://careeratlic.in/img/client4.png'}}
                         />
                         <Text style={{fontSize:20, margin:5}}>
                         Sompal Singh
                         </Text>
                         </View >
                         <View style={{width:(DEVICE_WIDTH)-180,justifyContent:'center', alignItems:'center', margin:5}}>
                             <Text style={{fontSize:15, fontWeight:'700'}}>
                             Mr.chaurasia made me to understand that, As an LIC Agent We can earn Royal profit with flexible working hours,
                              He told me in todays scenario everyone need Life security 1st after bread and butter.
                             </Text>
                         </View>
                      </View>
                  </Swiper>
              </View>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;