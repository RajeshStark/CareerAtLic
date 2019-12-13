import React, { Component } from 'react';
import { Container, View, Card, CardItem, Body, Content, Button } from 'native-base';
import { Dimensions,StyleSheet, Text , Linking} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Video from 'react-native-video';

export default class Tab extends Component {


    render(){
        return(
         <View>
          <ScrollView>
            <View>
                <Content>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <Video source={{uri: "https://careeratlic.in/img/careervideo.mp4"}}   // Can be a URL or a local file.
                  ref={(ref) => {
                    this.player = ref
                  }}            
                  controls={true}                          // Store reference
                  onBuffer={this.onBuffer}                // Callback when remote video is buffering
                  onError={this.videoError}               // Callback when video cannot be loaded
                  style={styles.backgroundVideo} /> 

                <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
                     Career as LIC agent
                  </Text>
                </View>
                <Text style={{fontSize:20}}>"Your welfare is our responsibility"</Text>
                <Text style={{padding:10}}>LIC helps you to become your own boss. It helps you become an individual with self-assuring values.
                     LIC will help in giving you a rewarding career which will help you in fulfilling your financial needs.
                     As an Agent, you will be a true entrepreneur making you a strong individualist.
                </Text>
                <Text style={{fontSize:20}}>"Opportunities as an Agent"</Text>
                <Text style={{padding:10}}>You will be trained at our own training facilities at Corporate Centre.{'\n'}
                   Your activities will be monitored regularly to ensure that you achieve your desired target on time.{"\n"}
                   Our training program is designed in such a way that you can start earning a very handsome amount within 3 years and might get opportunity to join LIC coveted Club Membership Program. 
                   You will be an LIC agent who will get to work as their true self, interacting with clients and managing tasks. 
                   It has a great future and earning potential opportunity along with Club Membership which provide social status.
                </Text>
              </View>

              <View style={{justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontWeight:'500', fontSize:24,textDecorationLine:'underline',color:'#1D4E9E'}}>
                  Who can work at LIC?
                  </Text>

                  <Text style={{padding:10}}>
                  Anybody can join LIC as an Agent who are 18+ years of age who are minimum 10th/12th passed out.
                  The minimum age requirement for joining as an LIC Agent is 18 years so anyone eighteen plus years can work with LIC as an Agent. 
                  The following are a few examples of who can become an LIC agent -
                  </Text>
              </View>
                  <Text style={{padding:15, fontSize:16}}>
                   1. A student                {"\n"}
                   2. A graduate{"\n"}
                   3. House wife{"\n"}
                   4. Retired woman/man{"\n"}
                   5. Skilled labourers{"\n"}
                   6. Businessmen{"\n"}
                   7. Salaried Person{"\n"}
                   8. Software Professionals{"\n"}
                   9. Bankers{"\n"}
                  </Text>
             
            <View style={{justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontWeight:'500', fontSize:24,textDecorationLine:'underline',color:'#1D4E9E'}}>
                  Eligibility criteria
                  </Text>

                  <Text style={{padding:10}}>
                  The following criteria are required to join as an LIC Agent
                  </Text>
              </View>
                  <Text style={{padding:15, fontSize:16}}>
                   1.  Must be 18 years and above {"\n"}
                   2.  Must be a Citizen of India {"\n"}
                   3.  10th/12th pass{"\n"}
                   4.  Should have basic knowledge of Internet {"\n"}
                  </Text>

            <View style={{justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontWeight:'100', fontSize:18,textDecorationLine:'underline',color:'#1D4E9E'}}>
                  Some of the qualities we are looking for :
                  </Text>
            </View>

                  <Text style={{padding:15, fontSize:16}}>
                   1.  Self-motivation  {"\n"}
                   2.  Hard-working     {"\n"}
                   3.  Good communicator{"\n"}
                   4.  A go-getter      {"\n"}
                  </Text>
                  <View style={{justifyContent:'center', alignItems:'center',marginBottom:10}}>
                 <TouchableOpacity
                   onPress={()=> Linking.openURL('https://careeratlic.in/career.php')}
                   style={{width:(DEVICE_WIDTH)-50, padding:10, backgroundColor:"#3090C7", justifyContent:'center',alignItems:'center',borderRadius:10}}
                 >
                     <Text style={{fontSize:15}}>
                         GET TO KNOW MORE
                     </Text>
                 </TouchableOpacity>
                 </View>


              </Content>
            </View>
          </ScrollView>
          
         </View>

        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundVideo: {
      height:250,
      width:(DEVICE_WIDTH)-40,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent:'center',
      alignItems:'center'
    },
  });