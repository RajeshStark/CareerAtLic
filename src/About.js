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
import { Header, Body, Left, Card, Content, Footer} from 'native-base';
import "react-native-gesture-handler";
import { SocialIcon } from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class About extends React.Component{
   
  navigateToScreen = (join) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: join
    });
    this.props.navigation.dispatch(navigateAction);
  }

  navigateToScreen = (Register) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Register
    });
    this.props.navigation.dispatch(navigateAction);
  }


    render(){
        return(
       <View>

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
     <View style={{marginBottom:20}}>
     <View style={{margin:5}}>
       <Card>
       <View style={{flexDirection:'row',margin:5}}>
       <View>
            <View style={{borderWidth:1,marginLeft:5,zIndex:10}}>  
                  <Image style={{width:300/2.5+3,height:400/2.5}} source={require('../assets/images/jitendra.jpeg')}/>
            </View>
            <View style={{margin:5}}>
                <Text style={{fontSize:15}}>Shri Jitendra {"\n"}Chaurasia</Text>
                <Text style={{fontSize:10}}>Development Officer/SBA.</Text>
            </View>
        </View> 
       <View style={{padding:10,marginRight:90,width:DEVICE_WIDTH-140}}>
       <Text>Shri Jitendra Kumar Chaurasia (JKC) is a leading Development Officer/ Senior Business Associate from Delhi Divisional Office-II of LIC of India. 
         He is working with LIC under Delhi NCR region since 1999 and has gained deep LIC subject matter expertize enabling LIC business through continuous recruitment & mentoring of Agents.
      </Text>
      </View>
      </View>
      </Card>
     </View>
     <TouchableOpacity style={{margin:5}}
          onPress={this.navigateToScreen('Register')}
       >
       <Card style={{backgroundColor:'#7283a1',margin:40,borderRadius:10,borderColor:'black',borderWidth:3,padding:10}}>
       
         <Text style={{fontSize:20, fontWeight:'600', color:'white'}}>" I Welcome You To Join Our Team Of World Largest Insurance Company LIC As An Agent ".</Text>
         </Card>
       </TouchableOpacity>
    
     <Content>
        <View style={{justifyContent:'center', alignItems:'center'}}>
         <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
         Our Methodology
         </Text>
        </View>
        <View>
        <Image
        style={{width:(DEVICE_WIDTH), height:300, resizeMode:'contain'}}
        source={{uri:'https://careeratlic.in/img/imgpsh_fullsize_anim%20(3).jpg'}}/>
        </View>
        <View style={{marginBottom:20}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
         <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
         Support To Agents
         </Text>
        </View>
        <View style={{margin:5,padding:10}}>
          <Text style={{fontSize:16}}>
          Professional Training through Seminars. Sponsorship for special Training Programs. Knowledge Dissemination of all LIC products. Effective Selling Skills. Innovative Marketing Strategies. Tips on Customer Relations Management. Setting and achieving realistic goals.
          </Text>
        </View>

        <View style={{alignItems:'center', justifyContent:'center', margin:20}}>
         <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
         A Person Who Believes In Training
         </Text>
        </View>
        <View style={{margin:5,padding:10}}>
          <Text style={{fontSize:16}}>
          A leading Senior Business Associate from LIC of India in Delhi DO-II. He has created a dedicated Team of more than 100 well professional advisors - who are performing better year after year. All the time this glorious Team is getting Meritorious position in Delhi Division - II from last number of years & occupied the ranks at All India level in different years as whole and individuals too. He believes in Development & Grooming of his Team as well as full focus on the earnings of each & every individual.
          </Text>
        </View>
        </View>
     </Content>
     <Content style={{marginBottom:40}}>
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
         <TouchableOpacity
        onPress={this.navigateToScreen('Register')}
          >
            <Footer style={styles.footer}>
            <Text style={{fontSize:24, fontWeight:'800', color:'#fff'}}>Join My Team as An Agent</Text>
            </Footer>
          </TouchableOpacity>
  
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
  footer: {
    backgroundColor:'#FF2400',
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:10,
    marginBottom:10,
    margin:10
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