import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native';
import { Header, Content, Body, Left, Footer } from 'native-base';
import "react-native-gesture-handler";
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationActions} from 'react-navigation';

import Swiper from './Swiper';
import TopCard from './TopCard';
import CardSwiper from "./cardSwiper";
import ClubCarousel from "./ClubCarousel";

export default class Team extends React.Component{
   
  navigateToScreen = (join) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: join
    });
    this.props.navigation.dispatch(navigateAction);
  }


    render(){
       return(
        <View style={styles.container}>
          
           <Header style={{ backgroundColor: '#FBC707'}}>
             <Left>
   
             <Icon name='bars' style={{fontSize:25, padding:10}}
                onPress={() => this.props.navigation.openDrawer()}
                />

                </Left>
                <Body>
               <View >
               <Image 
                   style={{width:120, height:50, marginLeft:-40}}
                    source={require('../assets/images/lic-logo-png-transparent.png')}
                 />
                </View>
              </Body>
             </Header>
             <ScrollView style={{height: DEVICE_HEIGHT}}>
               <View style={{flex:1}}>
                 <Content>
                   <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                   <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
                     Our Top Performers
                   </Text>
                   </View>
                   <View style={{width: (DEVICE_WIDTH), height:270}}>
                <TopCard/>
                   </View>
                 </Content>

                 <Content>
                 <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                   <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
                   Our Club Members
                   </Text>
                 </View>
                 <View style={{width: (DEVICE_WIDTH), height:380, flexDirection:'row'}}>
                   <ClubCarousel/>
                 </View>
                 </Content>
               
                 <Content>
                 <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                   <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
                     Our Team
                   </Text>
                  </View>
                  <View style={{width: (DEVICE_WIDTH), height:520}}>
                   <CardSwiper/>
                 </View>
                
                 </Content>
                
                 <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                   <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
                     Testimonials
                   </Text>
                   </View>
                 <View style={{width: (DEVICE_WIDTH)-5, height:250}}>
                   <Swiper/>
                 </View>

                  <TouchableOpacity
                     onPress={this.navigateToScreen('Register')}
                    >
                    <Footer style={styles.footer}>
                    <Text style={{fontSize:24, fontWeight:'800', color:'#fff'}}>Register to Become An Agent</Text>
                    </Footer>
                 </TouchableOpacity>

                 <Content >
         <View style={{backgroundColor:'#1D4E9E', margin:5, borderRadius:5}}>
           <Text style={{fontSize:24, margin:10, color:'white', fontWeight:'bold'}}>Jitendra Kumar Chaurasia</Text>
           <Text style={{fontSize:22, margin:10, color:'white',fontWeight:'600'}}>
             Development Officer / SBA{"\n"}LIC of India Delhi Div.II</Text>
             <TouchableOpacity style={{flexDirection:'row'}}
              onPress={()=>{Linking.openURL('tel:+(91) 888-254-8633');}}
             >
               <Icon name='phone' style={{margin:10,fontSize:22, color:'white'}}/>
             <Text style={{fontSize:18, margin:10, color:'white'}}>
         Mobile No : {"\n"}+(91) 888-254-8633/{"\n"}     9891237937
             </Text>
             </TouchableOpacity>

             <TouchableOpacity style={{flexDirection:'row'}}
             onPress={() => {
              Linking.openURL('mailto:lic.jitendrachaurasia@gmail.com');}}
             >
               <Icon name='envelope' style={{margin:10,fontSize:22, color:'white'}}/>
             <Text style={{fontSize:18, margin:10, color:'white'}}>
         E-Mail ID: {"\n"}lic.jitendrachaurasia@gmail.com
             </Text>
             </TouchableOpacity>

             <TouchableOpacity style={{flexDirection:'row'}}
             onPress={() => {
              Linking.openURL('https://careeratlic.in');}}
             >
               <Icon name='globe' style={{margin:10,fontSize:22, color:'white'}}/>
             <Text style={{fontSize:18, margin:10, color:'white'}}>
         Our Website: {"\n"}http://www.careeratlic.in
             </Text>
             </TouchableOpacity>

             <View style={{justifyContent:'center', alignItems:'center'}}>
                  
                   <Image
                   source={{uri:'https://content3.jdmagicbox.com/comp/tirupati/dc/9999px877.x877.1243409219d9a2q7.dc/catalogue/lic-of-india-tirupathi-ho-tirupati-life-insurance-agents-lic-y4u9xhc.jpg'}}
                   style={{height:100, width:((DEVICE_WIDTH)/2), resizeMode:'stretch'}}/>

                  <Text style={{fontWeight:'400', fontSize:15, margin:10, color:'white'}}>
                   Life Insurance Corporation of India is an Indian state-owned insurance group and investment company headquartered in Mumbai. It is the largest insurance company in India.
                   </Text>
            </View>
          
           <View >
             <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center', marginBottom:10}}>
             <Text style={{fontSize:24, color:'white',}}>Follow Us On:</Text>
             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <SocialIcon
                    onPress={() => {
                    Linking.openURL("https://api.whatsapp.com/send?phone= +91-99104 78707");}}
                    style={{backgroundColor:'green'}}
                    raised={true}
                    type='whatsapp'
                  />
                  
                  <SocialIcon
                    onPress={() => {
                      Linking.openURL('https://www.facebook.com/jitendra.chaurasia.338');}}
                    raised={true}
                    type='facebook'
                  />
                  
                  <SocialIcon
                  onPress={() => {
                    Linking.openURL('http://linkedin.com/in/jitendra-chaurasia-4b10a153');}}
                    raised={true}
                    type='linkedin'
                  />
                
                <TouchableOpacity
                 style={styles.ic}
                 onPress={() => {
                  Linking.openURL('mailto:lic.jitendrachaurasia@gmail.com');}}
                 >
                 <Icon name="envelope" style={{fontSize:20, color:'white'}}/>
                  </TouchableOpacity>
                  </View>
                 

                 <TouchableOpacity
                    style={{backgroundColor:'#FBC707',borderRadius:5,padding:10,width:(DEVICE_WIDTH)-60,bordercolor:'black',borderWidth:0.5}}
                    onPress={this.navigateToScreen('Join')}
                    >
                    <Text style={{color:'black',textAlign:'center',
                    fontSize:20}}>Explore Career as an LIC Agent</Text>
                  </TouchableOpacity>
              </View>
           </View>

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
  container: {
    flex: 1,
    
    height: DEVICE_HEIGHT
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  customImage:{
    width:60,
    height:50
  },
  ic :{
    padding:10, 
    height:50, 
    width:50,
    borderRadius:50,
    borderColor:'black',
    borderWidth:0.5,
    backgroundColor:'#B23121',
    justifyContent:'center',
    alignItems:'center',
  },
  footer: {
    backgroundColor:'#FF2400',
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:10,
    marginBottom:10,
    margin:10
  },
});