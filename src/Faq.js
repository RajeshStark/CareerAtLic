import React from 'react';
import{
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Container, Header, Left,Right, Body, ListItem, Separator,Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Divider } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements';
import {NavigationActions} from 'react-navigation';


export default class Faq extends React.Component{

    navigateToScreen = (join) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: join
        });
        this.props.navigation.dispatch(navigateAction);
      }
    


    render(){
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
                    
                 {/********Accordin */}
                 <View style={{justifyContent:'center',alignItems:'center',marginTop:20, margin:10}}>
                     <Text style={{fontSize:24,fontWeight:'700'}}>FAQ,s</Text>
                 </View>
        <View style={{margin:10, borderColor:'black',borderWidth:0.5, backgroundColor:'#fff'}}>
        <Collapse style={{padding:10, backgroundColor:'green'}}>>
      <CollapseHeader style={{padding:10, backgroundColor:'green'}}>
        
          <Text style={{fontSize:20,}}>How Much Salary Can I Expect As An Lic Agent</Text>
    
      </CollapseHeader>
      <CollapseBody style={{padding:10, backgroundColor:'green'}}>
        <ListItem style={{padding:10, backgroundColor:'green'}}>
          <Text style={{padding:10, backgroundColor:'green'}}>There is no prescribed salary for LIC agent it is like business you earn through commission.</Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
<Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
    
          <Text style={{fontSize:20}}>How Can I See My Life In Future?</Text>
    
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>LIC has lot of opportunities to grow, there is no limit in earning you can earn as much as you can.

</Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
    
          <Text style={{fontSize:20}}>Will I Get Any Support For Preparing To The Exam?</Text>
        
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          Yes,you will get complete support from us. For more information you can register in our website we  will get back to you
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
        
          <Text style={{fontSize:20}}>Do I Need To Give Exam To Become An Agent</Text>
        
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          Aspirants have to complete a training session so as to be qualified to attend the test.Those who effectively complete the training session can attend the qualifying test.
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
<Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
        
          <Text style={{fontSize:20}}>What Are My Work Timings</Text>
    
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          There are no specific timings,you can set your own work timing.
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>


    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
        
          <Text style={{fontSize:20}}>Do I Get Trained After Clearing The Exam?</Text>
    
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          An interview will be conducted by the branch manager of LIC to determine 
 if you can qualify to undergo training. The training will be conducted by 
 the Divisional/Agency Training Center.
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
        
          <Text style={{fontSize:20}}>How Much Can I Earn As A Lic Agent</Text>
    
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          There is no limit for earnings, it depends upon your potential.
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
        
          <Text style={{fontSize:20}}>What Are The Responsibilities Of Agents</Text>
    
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          Agent responsibilites are to generate new business by contacting potential customers. You will sell, solicit, differentiate and negotiate insurance plans that match the needs of your assigned or prospective customers’ portfolio.
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
        
          <Text style={{fontSize:20}}>What Is The Eligibility Criteria To Become Agent</Text>
    
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          1.Must be 18 years and above{"\n"}

2.Must be a Citizen of India{"\n"}

3.10th/12th pass
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
        
          <Text style={{fontSize:20}}>What Is Sum Assured And Premium?</Text>
    
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          Premium:-This is the amount you pay to the insurance company to buy a policy.{"\n"}
          Sum assured:-Sum assured is the amount of money an insurance policy guarantees to pay before any bonuses are added. In other words, sum assured is the guaranteed amount you will receive.
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>
    <Collapse style={{padding:10, backgroundColor:'green'}}>
      <CollapseHeader>
        
          <Text style={{fontSize:20}}>What Is Life Insurance</Text>
    
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
          Life Insurance  is designed to protect your family and other people who may depend on you for financial support. Life insurance pays a death benefit to the beneficiary of the life insurance policy. 
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Divider/>
        </View>     
                   {/********Accordin  End*/}


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
        )
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;



const styles = StyleSheet.create({

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