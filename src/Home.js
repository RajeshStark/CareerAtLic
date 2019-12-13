import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,
  TouchableOpacity
} from 'react-native';
import { Header, Content, Body, Left,Card, Container, CardItem } from 'native-base';
import Carousel from 'react-native-banner-carousel';
import "react-native-gesture-handler";
import HTMLView from 'react-native-htmlview';
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationActions} from 'react-navigation';


const images = [
  "https://careeratlic.in/img/banner4.jpg",
  "http://joinlic.org/images/slide5.jpg",
  "http://joinlic.org/images/slide6.jpg"
];



export default class Home extends React.Component{

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


  renderPage(image, index) {
    return (
        <View key={index}>
            <Image style={styles.slide} source={{ uri: image }} />
        </View>
    );
}
    

    render(){
      const htmlContent = `<ul>
      <li>LIC of India enjoys the status of being only public sector Life Insurance Company commanding more than 70% market share even after more than a decade of opening up of the insurance industry for Private Players.</li>
      <li>JKC having about 2 decades of deep LIC subject matter knowledge and understanding of Insurance market of Delhi NCR.      </li>
      <li>Being the top LIC Agent Recruiter and Mentor within Delhi NCR</li>
      <li>Have credits to achieve highest number of Policies at Branch Level through a Team of ever-growing 100+ Agents</li>
      <li> Excellent coaching & mentoring by himself and Industry Experts.</li>
      <li> Excellent coaching & mentoring by himself and Industry Experts.</li>
      <li> Regular Meetings/Trainings in the field of LIC Products, Sales & Marketing, Job Motivation</li>
      <li>Pioneer of adopting and optimally using technology to enable our team of agents to be skilled, professional and competitive in the market</li>
      <li>Our Mobile App (BeLICAgent) along with our CareerAtLIC Portal offers great platform for aspiring agents for choosing LIC Agent as a Career Option, Enrolment, Training and Examination preparation.</li>
      <li> Our Mobile App (LICAgentPlus) provides all the services from Lead Management to Policy Management for Agents at their finger tips</li>
      </ul>`;

        return(
       <Container>

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
     <Content>
       <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={ (DEVICE_WIDTH)}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>

        <View style={{margin:5}}>
           <Text style={{fontSize:20}}>
             Greetings From Jitendra Kumar Chaurasia (JKC), a leading Development Officer/ Senior Business Associate from Delhi Divisional Office-II of LIC of India.
           </Text>
         </View>
        
       </Content>
       <Content>
       <TouchableOpacity style={{margin:5}}
          onPress={this.navigateToScreen('Register')}
       >
       <Card style={{backgroundColor:'#7283a1',margin:40,borderRadius:10,borderColor:'black',borderWidth:3,padding:10}}>
       
         <Text style={{fontSize:20, fontWeight:'600', color:'white'}}>" I Welcome You To Join Our Team Of World Largest Insurance Company LIC As An Agent ".</Text>
         </Card>
       </TouchableOpacity>
       
         <Image
     style={{width: (DEVICE_WIDTH), height:100, resizeMode:'stretch'}}
     source={{uri: 'https://careeratlic.in/img/banner1.jpg'}}/>
     <View style={{margin:20}}>
       <View >
       <Card >
         <CardItem header bordered style={{backgroundColor:'#e0e0e0'}}>
           <Icon name="low-vision"/>
         <Text style={{fontSize:18}}> VISION</Text>
         </CardItem>
         <CardItem body style={{backgroundColor:'#e0e0e0'}}>
                  <Text style={{fontSize:16}}>
                  To become first choice LIC Agent Recruiter and Mentor within Delhi NCR region.
                  </Text>
         </CardItem>
       </Card>
       </View>
       <Card >
         <CardItem header bordered style={{backgroundColor:'#e0e0e0'}}>
         <Icon name="eye"/>
          <Text style={{fontSize:18}}> MISSION</Text>
         </CardItem>
         <CardItem body style={{backgroundColor:'#e0e0e0'}}>
                  <Text style={{fontSize:16}}>
                  Changing life and converting a common person to be an Entrepreneur through LIC Agent as a Career Option.
                  </Text>
         </CardItem>
       </Card>

       <Card >
         <CardItem header style={{backgroundColor:'#e0e0e0'}}>
         <Icon name="globe"/>
         <Text style={{fontSize:18}}> CORE VALUES</Text>
         </CardItem>
         <CardItem body style={{backgroundColor:'#e0e0e0'}}>
                  <Text style={{fontSize:16}}>
                  Integrity, Diligence and Transparency
                  </Text>
         </CardItem>
       </Card>
     </View>
     <View>
     <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
             <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
             Why Join Us?
             </Text>
       </View>
 
       <View style={{alignItems:'center', justifyContent:'center',borderColor:'black',borderWidth:0.5,margin:10, padding:10}}>
      <HTMLView
        value={htmlContent}
        stylesheet={styles.a}
      />
      </View>
       </View>
    
       </Content>
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
       </Container>
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
  slide: {
      width: DEVICE_WIDTH,
      height: 200,
      resizeMode:'stretch',
      
  },
  a: {
    fontWeight: '300',
    fontSize:15,

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