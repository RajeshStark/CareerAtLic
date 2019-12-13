import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,
  TouchableHighlight,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import { Header, Content, Body, Left, ListItem, Separator, Form, Item, Label, Input } from 'native-base';
import "react-native-gesture-handler";
import { TouchableOpacity } from 'react-native-gesture-handler';
import BlinkView from 'react-native-blink-view';
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationActions} from 'react-navigation';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Portal, Provider } from 'react-native-paper';




class ModalExample extends React.Component {

/***********Form*********** */    
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      name: '',
      phonenumber: '',
      emailid: '',
      age: '',
      city: '',
      gender: '',
      profession: '',
      subject: '',
      message: ''
 
    }
 
  }

  functionOne=()=>{
    const {name,phonenumber,emailid,age,city,gender,profession,subject,message} = this.state;
    if(name==""){
      //alert('please fill the first name');
      this.setState({Error: 'Please Enter Your Name'});
    }
    else if(phonenumber==""){
    //  alert('please fill the last name');
        this.setState({Error: 'Please Enter Your Number'});
    }
    else if(emailid==""){
          this.setState({Error: 'Please Enter A Valid E-mail ID'});
      }
      else if(age==""){
        this.setState({Error: 'Please Enter Your  Age'});
    }
    else if(city==""){
      this.setState({Error: 'Please Enter Your City'});
    }
    else if(gender==""){
      this.setState({Error: 'Please Enter Your Gender'});
    }
    else if(profession==""){
      this.setState({Error: 'Please Enter Your Profession'});
    }
    else if(subject==""){
      this.setState({Error: 'Please Enter Your Purpose'});
    }
    else if(message==""){
      this.setState({Error: 'Please Enter Your Message'});
    }
    else{
      //alert('thank you, your form is submitted successfully');
  
      this.UserRegistrationFunction();
    
  
    }
  }

  
  UserRegistrationFunction = () =>{
 
 
    const { name }  = this.state ;
    const { phonenumber }  = this.state ;
    const { emailid }  = this.state ;
    const { age }  = this.state ;
    const { city }  = this.state ;
    const { gender }  = this.state ;
    const { profession }  = this.state ;
    const { subject }  = this.state ;
    const { message }  = this.state ;
   
    
    
   fetch('http://pramod.freevar.com/userregistration/carreratlic/register.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
      name: name,
      phonenumber: phonenumber,
      emailid: emailid,
      age: age,
      city: city,
      gender: gender,
      profession:profession,
      subject: subject,
      message: message
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
   // Showing response message coming from server after inserting records.
           Alert.alert(responseJson);
    
         }).catch((error) => {
           console.error(error);
         });
    
    
     }
  

  /***********Form End*********** */ 

  state = {
    modalVisible: false,
  };

  _simpleAlertHandler=()=>{
    //function to make simple alert
    alert('Your Details Has Been Submitted.');
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  

  render() {
    
    return (
      
      <View style={{marginTop: 22}}>
           <TouchableOpacity
          style={{padding:10,width:(DEVICE_WIDTH)-50, backgroundColor:"#dc3545", justifyContent:'center',alignItems:'center',borderRadius:10,borderColor:'black',borderWidth:1}}
          onPress={() => {
            this.setModalVisible(true);
          }}>
           <Text style={{fontSize:15}}>Get In Touch For A Free Quote</Text>
        </TouchableOpacity>
      
        <Modal
        
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
             <ScrollView>
          <View>
          <View style={{justifyContent:'center', alignItems:'center'}}>

          <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
           <Text style={{fontSize:25,fontWeight:'bold',color:'#1D4E9E',textDecorationLine:'underline'}}>Welcome to the World of LIC!</Text>
           <View style={{flexDirection:'row'}}>
             <Image
             style={{height:30, width:30,color:'black'}}
             source={{uri:'https://cdn1.iconfinder.com/data/icons/travel-hazel-vol-1/256/Hand-bouquet-512.png'}}
             />
           <Text style={{fontSize:22,fontWeight:'bold',color:'#1D4E9E',textDecorationLine:'underline'}}>We have best plans for you!</Text>
           <Image
             style={{height:30, width:30,color:'black'}}
             source={{uri:'https://cdn1.iconfinder.com/data/icons/travel-hazel-vol-1/256/Hand-bouquet-512.png'}}
             />
           </View>
        </View>
            <View style={{borderRadius:10, bordercolor:'black', borderWidth:1, margin:10}}>
              <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
                 <Text style={{fontSize:20,fontWeight:'500',color:'black', marginLeft:10}}>Help us to Understand for Free Financial Planning & Quote</Text>
              </View>

              <Form>
    <Text style={{color:'red', textAlign:'center'}}>
      { this.state.Error}
    </Text>
   
       <TextInput
       onSubmitEditing={() => {this.nextInput.focus()}}
       onChangeText={name => this.setState({name})}
       placeholder='Enter Your Name'
       style={styles.TextInputStyleClass}
       secureTextEntry={false}
       showText={true}
       />

       <TextInput
       ref={nextInput => this.nextInput = nextInput}
       onSubmitEditing={() => {this.nextInput1.focus()}}
       placeholder='Enter Your Number'
       keyboardType='numeric' 
       onChangeText={phonenumber => this.setState({phonenumber})}
       style={styles.TextInputStyleClass}
       />
      
       <TextInput
       ref={nextInput1 => this.nextInput1 = nextInput1}
       onSubmitEditing={() => {this.nextInput2.focus()}}
       placeholder='Enter Your Mail-ID'
       keyboardType='email-address' 
       onChangeText={emailid => this.setState({emailid})}
       style={styles.TextInputStyleClass}
       />

      <TextInput
       ref={nextInput2 => this.nextInput2 = nextInput2}
       onSubmitEditing={() => {this.nextInput3.focus()}}
       onChangeText={age => this.setState({age})}
       placeholder='Enter Your Age'
       keyboardType='numeric' 
       style={styles.TextInputStyleClass}
       />

      <TextInput
       ref={nextInput3 => this.nextInput3 = nextInput3}
       onSubmitEditing={() => {this.nextInput4.focus()}}
       onChangeText={city => this.setState({city})}
       placeholder='Enter Your City' 
       style={styles.TextInputStyleClass}
       />

      <TextInput
       ref={nextInput4 => this.nextInput4 = nextInput4}
       onSubmitEditing={() => {this.nextInput5.focus()}}
       onChangeText={gender => this.setState({gender})} 
       placeholder='Enter Your gender'
       style={styles.TextInputStyleClass}
       />

      <TextInput
       ref={nextInput5 => this.nextInput5 = nextInput5}
       onSubmitEditing={() => {this.nextInput6.focus()}}
       placeholder='Enter Your Profession'
       onChangeText={profession => this.setState({profession})} 
       style={styles.TextInputStyleClass}
       />

      <TextInput
       ref={nextInput6 => this.nextInput6 = nextInput6}
       onSubmitEditing={() => {this.nextInput7.focus()}}
       placeholder='Enter Your Subject'
       onChangeText={subject => this.setState({subject})} 
       style={styles.TextInputStyleClass}
       />

      <TextInput
       ref={nextInput7 => this.nextInput7 = nextInput7}
       onChangeText={message => this.setState({message})}
       placeholder='Enter Your Message' 
       style={styles.TextInputStyleClass}
       />

              </Form>
            
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', margin: 10, marginBottom:20}}>
              <TouchableHighlight
             style={{  width:100,padding:10,justifyContent:'center',alignItems:'center',borderRadius:10,borderColor:'black',borderWidth:0.5,margin:10,backgroundColor:'#ffc107'}}
          
             onPress={() => this.functionOne()}>
                <Text style={{color:'#fff',fontSize:15}}>Submit</Text>
              </TouchableHighlight>
              <TouchableHighlight
              style={{  width:100,padding:10,justifyContent:'center',alignItems:'center',borderRadius:10,borderColor:'black',borderWidth:0.5,margin:10,backgroundColor:'#6610f2'}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{color:'#fff',fontSize:15}}>Close Form</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
          </View>
        </ScrollView>
        </Modal>
      
     
      </View>
      
    );
  }
}

export class Expo extends React.Component {
  render(){
   return(
    <TouchableOpacity
              
    onPress={() => {
     Linking.openURL('https://careeratlic.in');}}
   >
   <BlinkView delay={300}>
     <Text style={{fontSize:24, color:"#FBC707",marginBottom:10}}>Explore LIC</Text>
   </BlinkView>
   </TouchableOpacity>

   );
}
}

export default class Buy extends React.Component{



navigateToScreen = (join) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: join
    });
    this.props.navigation.dispatch(navigateAction);
  }
  
  
  constructor(props) {
    super(props);
    this.state = {showText: true};
 
    // Change the state every second 
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 
    // Define any blinking time.
    800);
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
       <Content>
         <Image
         source={{uri:'https://careeratlic.in/img/banner5.jpg'}}
         style={{height:150, width:DEVICE_WIDTH, resizeMode:'stretch'}}
         />
         <View style={{justifyContent:'center',alignItems:'center',width:DEVICE_WIDTH, height:100, backgroundColor:"#1D4E9E"}}>
        <Text style={{fontSize:24, color:"#FBC707"}}>Zindagi Ke Saath bhi, Zindagi Ke Baad bhi....</Text>
         <Expo/>
             
         </View>
    <View style={{justifyContent:'center', alignItems:'center', margin:10}}>
      <Text style={{fontSize:24}}>LIC Plans</Text>
      </View>
               
                 {/********Accordin */}
        <View style={{margin:10, borderColor:'black',borderWidth:0.5, backgroundColor:'#fff'}}>
        <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text style={{fontSize:20}}>Insurance Plans</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>Endowment plan is term insurance policy with maturity benefits. In case of demise of policyholder, the Sum Assured along with accrued bonuses (if any) is paid to the beneficiary. On survival of policyholder, the same is paid on the maturity date</Text>
        </ListItem>
        <ListItem last>
        <Text>
          1. Jeevan Labh {'\n'}
          2. Jeevan Rakshak{'\n'}
          3. Jeevan Pragathi{'\n'}
          4. Limited Premium Endowment plan{'\n'}
          5. NavJeevan Plan{'\n'}
          6. New Endowment Plan{'\n'}
          7. Single Premium Endowment Plan{'\n'}
          8. New Jeevan Anand{'\n'}
          9. Aadhaar Shila{'\n'}
          10.Aadhaar Stambh
        </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>

    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text style={{fontSize:20}}>Health Insurance Plans</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>Health plans from LIC give you the financial security to meet health related contingencies.</Text>
        </ListItem>
        <ListItem last>
          <Text>
            1. Aadhaar Shila{"\n"}
            2. Jeevan Arogya
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>

    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text style={{fontSize:20}}>Pension Plans</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
            1. Jeevan Akshay{"\n"}
            2. New Jeevan Nidhi Plan
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>

    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text style={{fontSize:20}}>Micro Insurance</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
            1. LIC'c Bhagya Lakshmi{"\n"}
            2. LIC'c Micro Bachat{"\n"}
            3. New Jeevan Mangal Plan
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>

    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text style={{fontSize:20}}>Unit Plans</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem last>
          <Text>
            1. New Endowment Plan{"\n"}
          </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
        </View>     
                   {/********Accordin  End*/}

                 <View style={{justifyContent:'center',alignItems:'center'}}>
                  <ModalExample/>
                 </View>
       </Content>
       
       <Content style={{marginBottom:10}}>
         <View style={{backgroundColor:'#1D4E9E', margin:5, borderRadius:5,marginBottom:20}}>
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
             <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center', marginBottom:20}}>
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

//Accordion List 


const DEVICE_WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:5
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
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 5,
    height: 40,
    borderWidth: 1,
    borderRadius: 5 ,
    margin:5
    
    
},

});