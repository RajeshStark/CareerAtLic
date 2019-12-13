import React from "react";
import { Text, TouchableOpacity, View, Image, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-web-swiper";
import "react-native-gesture-handler";
import GridCarousel from './grid/gridCarousel';
import GridCarousel2 from './grid/gridCarousel2';
import GridCarousel3 from './grid/gridCarousel3';


export default class SwiperCarousel extends React.Component {
    render() {
        return (
              <View style={{flex:1, margin:5}}>
                  <Swiper
                      loop
                      timeout={8}
                      controlsProps={{
                      dotsTouchable: true,
                      dotsPos:"bottom",
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
                      
                  
              <View style={{width: (DEVICE_WIDTH)-10, height:500, marginTop:5,borderWidth:0.5,borderColor:'black'}}>
              <GridCarousel/>
              </View>
              <View style={{width: (DEVICE_WIDTH)-10, height:500, marginTop:5,borderWidth:0.5,borderColor:'black'}}>
              <GridCarousel2/>
              </View>
              <View style={{width: (DEVICE_WIDTH)-10, height:500, marginTop:5,borderWidth:0.5,borderColor:'black'}}>
              <GridCarousel3/>
              </View>
             
                  </Swiper>
              </View>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;