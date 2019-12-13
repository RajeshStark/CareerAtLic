import React from "react";
import { Text, TouchableOpacity, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
    render() {
        return (
              <View style={{flex:1, margin:5}}>
                  <Swiper
                      loop
                      timeout={3}
                      minDistanceForAction={0.1}
                      controlsProps={{
                      dotsTouchable: true,
                      dotsPos:'bottom-right',
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
                <View style={{borderColor:'black', borderWidth:1, flexDirection:'row',backgroundColor:'#fff'}}>
               
                   <View style={{flexDirection:'row',margin:5}}>
                     <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                       <View style={{borderColor:'black', borderWidth:1}}>
                     <Image
                     style={{width:140,height:180}}
                     source={{uri: 'https://careeratlic.in/img/No1%20NOP%202019-20.jpg'}}/>
                     </View>
                     <Text style={{fontSize:18, margin:5}}>
                     Dinesh Yadav
                     </Text>
                     <Text style={{fontSize:15, margin:5}}>
                     No1 NOP 2019-20
                     </Text>
                   </View>
                   <View style={{width: (DEVICE_WIDTH)-210, margin:5}}>
                     <Text>
                     It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
                     </Text>
                   </View>
                   </View>
                 
             </View>

             <View style={{borderColor:'black', borderWidth:1, flexDirection:'row',backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',margin:5}}>
             <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                       <View style={{borderColor:'black', borderWidth:1}}>
                     <Image
                     style={{width:140,height:180}}
                     source={{uri: 'https://careeratlic.in/headerimg/fpi.jpg'}}/>
                     </View>
                     <Text style={{fontSize:18, margin:5}}>
                     Parvez Abraham
                     </Text>
                     <Text style={{fontSize:15, margin:5}}>
                     No1 in FPI (Rs 1 crore)
                     </Text>
                   </View>
                   <View style={{width: (DEVICE_WIDTH)-210, margin:5}}>
                     <Text>
                     It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
                     </Text>
                   </View>
             </View>
       </View>
                      
       <View style={{borderColor:'black', borderWidth:1, flexDirection:'row',backgroundColor:'#fff'}}>
       <View style={{flexDirection:'row',margin:5}}>
                     <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                       <View style={{borderColor:'black', borderWidth:1}}>
                     <Image
                     style={{width:140,height:180}}
                     source={{uri: 'https://careeratlic.in/img/No1%20NOP%202018-19.jpg'}}/>
                     </View>
                     <Text style={{fontSize:18, margin:5}}>
                     Dayal Sharan
                     </Text>
                     <Text style={{fontSize:15, margin:5}}>
                     No1 NOP 2018-19
                     </Text>
                   </View>
                   <View style={{width: (DEVICE_WIDTH)-210, margin:5}}>
                     <Text>
                     It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
                     </Text>
                   </View>
                   </View>
                 
           </View>
    <View style={{borderColor:'black', borderWidth:1, flexDirection:'row',backgroundColor:'#fff'}}>
    <View style={{flexDirection:'row',margin:5}}>
                     <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                       <View style={{borderColor:'black', borderWidth:1}}>
                     <Image
                     style={{width:140,height:180}}
                     source={{uri: 'https://careeratlic.in/img/No1FPI%202018-19.jpg'}}/>
                     </View>
                     <Text style={{fontSize:18, margin:5}}>
                     Sompal Singh 
                     </Text>
                     <Text style={{fontSize:15, margin:5}}>

                     No1 FPI 2018-19
                     </Text>
                   </View>
                   <View style={{width: (DEVICE_WIDTH)-210, margin:5}}>
                     <Text>
                     It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
                     </Text>
                   </View>
                   </View>
    </View>
                
                      
                    
                  </Swiper>
              </View>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

