import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,

} from 'react-native';
import { Header, Content, Body, Left, Accordion, Card, CardItem } from 'native-base';
import "react-native-gesture-handler";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationActions} from 'react-navigation';





export default class Locate extends React.Component{ 

  
navigateToScreen = (join) => () => {
  const navigateAction = NavigationActions.navigate({
    routeName: join
  });
  this.props.navigation.dispatch(navigateAction);
}

   
    render(){

        return(
       <View style={{marginBottom:30}}>

      <Header style={{ backgroundColor: '#FBC707'}}>
     <Left>
   
     <Icon name='bars' style={{fontSize:25, padding:10}}
        onPress={() => this.props.navigation.openDrawer()}
     />

    </Left>
    <Body>
      <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
    <Image 
        style={{width:120, height:50, marginLeft:-40}}
       source={require('../assets/images/lic-logo-png-transparent.png')}
        />
      </View>
    </Body>
     </Header>
     <ScrollView>
       <View>
       <Content padder>
                 <View style={{justifyContent:'center', alignItems:'center'}}>
                   <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
                   Our Offices
                   </Text>
                   <Image
                   source={{uri:'https://careeratlic.in/img/lic-logo-png-transparent.png'}}
                   style={{height:100, width:((DEVICE_WIDTH)/2)+100, resizeMode:'stretch'}}/>
                  </View>
                  <View>
                      <Card>
                          <CardItem header style={{justifyContent:'center',alignItems:'center'}} bordered>
                              <Text style={{fontSize:24}}>Branch Office</Text>
                          </CardItem>
                          <CardItem body>
                              <Text style={{fontSize:20,fontWeight:'600'}}>UNIT - 12P,{"\n"}
                                    2/25, Roop Nagar,{"\n"}
                                    Delhi - 110007.
                              </Text>
                          </CardItem>
                          <TouchableOpacity
                            onPress={() => {
                              Linking.openURL('https://goo.gl/maps/Ev71SB7LHSbuLQs19');}}
                            >
                          <CardItem footer>
                             <Image
                             style={{width:'100%', height:150}}
                             source={{uri:'https://www.google.com/maps/vt/data=j9J65LPmRwT4D4qaZkrW0LuKMhTR1TSecVVNrpEbeSGkaWjYaoDXPf4ltF8YNyrncLwwi4PnpT_1ZqIocJBee_F4b6uqGH8_T33X8nOezFPBEWernI_pTJqpCf6Zsr9jAWzJCKL5xf5jE46mu7c1dbmOkB4p27w9bqiNsdCAISBV0D0m4CZA5oz_Mk-e0gIpnOWm5KphEXTOBAYos6YhaOGkX3Bv345VkwyD'}}
                             />
                          </CardItem>
                          </TouchableOpacity>
                      </Card>

                      <Card>
                          <CardItem header style={{justifyContent:'center',alignItems:'center'}} bordered>
                              <Text style={{fontSize:24}}>Delhi Office</Text>
                          </CardItem>
                          <CardItem body>
                              <Text style={{fontSize:20,fontWeight:'600'}}>
                              Office No. 202,IInd floor{"\n"}
                              Plot No - 45/46 Mohan Park,{"\n"}
                              Guru Angad Nagar,{"\n"}
                              Opp. Metroplex Mall,{"\n"}
                              Delhi-110092{"\n"}
                              </Text>
                          </CardItem>
                          <TouchableOpacity
                            onPress={() => {
                              Linking.openURL('https://goo.gl/maps/YrdiTyqU4nL7XLNGA');}}
                            >
                          <CardItem footer>
                             <Image
                             style={{width:'100%', height:150}}
                             source={require('../assets/images/google-maps.jpg')}
                             />
                          </CardItem>
                          </TouchableOpacity>
                      </Card>

                      <Card>
                          <CardItem header style={{justifyContent:'center',alignItems:'center'}} bordered>
                              <Text style={{fontSize:24}}> Ghaziabad Office</Text>
                          </CardItem>
                          <CardItem body>
                              <Text style={{fontSize:20,fontWeight:'600'}}>     
                                  C-1,Ground Floor,{"\n"}
                                  R.K. Tower{"\n"}
                                  Sector 4 Market, Vaishali{"\n"}
                                  Ghaziabad-201014{"\n"}
                                  Mob : +(91) 9891237937{"\n"}
                              </Text>
                          </CardItem>
                          <TouchableOpacity
                            onPress={() => {
                              Linking.openURL('https://goo.gl/maps/Ge8LKcJb728zLZG1A');}}
                            >
                          <CardItem footer>
                             <Image
                             style={{width:'100%', height:150}}
                             source={{uri:'http://117.252.14.242/Gangakosh/tributaries/hindon.jpg'}}
                             />
                          </CardItem>
                          </TouchableOpacity>
                      </Card>
                  </View>
        

       </Content>
       <Content style={{marginBottom:20}}>
         <View style={{backgroundColor:'#1D4E9E', margin:5, borderRadius:5, marginBottom:20}}>
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:5
  },
  map:{
      height:200,
      width:120
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
  }

});