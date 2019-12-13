import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert,
    Linking
  } from 'react-native';
  import { Header, Content, Body, Left, Container } from 'native-base';
  import "react-native-gesture-handler";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationActions} from 'react-navigation'

  export default class Register extends React.Component{
  
    
    
    
    
    navigateToScreen = (join) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: join
        });
        this.props.navigation.dispatch(navigateAction);
      }
  
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      name: '',
      email: '',
      phonenumber: '',
      age:'',
      qualifications:'',
      occupations:'',
      address:'',
      city:'',
      state:'',
      pincode:'',
      describe:'',
 
    }
 
  }
 
  functionOne=()=>{
    const {name,email,phonenumber,age,qualifications,occupations,address,city,state,pincode,describe} = this.state;
    if(name==""){
      //alert('please fill the first name');
      this.setState({Error: 'Please Enter Your Name'});
    }
  
    else if(email==""){
          this.setState({Error: 'Please Enter A Valid E-mail ID'});
      }
      else if(phonenumber==""){
        //  alert('please fill the last name');
            this.setState({Error: 'Please Enter Your Number'});
        }
        else if(age==""){
          this.setState({Error: 'Please Enter Your Age'});
      }
      else if(qualifications==""){
        this.setState({Error: 'Please Enter Your qualification'});
    }
    else if(occupations==""){
      this.setState({Error: 'Please Enter Your Occupation'});
    }
    else if(address==""){
        this.setState({Error: 'Please Enter Your Address'});
    }
    else if(city==""){
      this.setState({Error: 'Please Enter Your City'});
    }
    else if(state==""){
      this.setState({Error: 'Please Enter Your state'});
    }
    else if(pincode==""){
      this.setState({Error: 'Please Enter Your Pincode'});
    }
    else if(describe==""){
      this.setState({Error: 'Please Enter Your Message'});
    }
    
    else{
      //alert('thank you, your form is submitted successfully');
  
      this.UserRegistrationFunction();
    
  
    }
  }


  UserRegistrationFunction = () =>{
 
 
 const { name }  = this.state ;
 const { email }  = this.state ;
 const { phonenumber }  = this.state ;
 const { age }  = this.state ;
 const { qualifications }  = this.state ;
 const { occupations }  = this.state ;
 const { address }  = this.state ;
 const { city }  = this.state ;
 const { state }  = this.state ;
 const { pincode }  = this.state ;
 const { describe }  = this.state ;

 
 
fetch('http://pramod.freevar.com/userregistration/carreratlic/register1.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    name: name,
    email: email,
    phonenumber: phonenumber,
    age:age,
    qualifications:qualifications,
    occupations:occupations,
    address:address,
    city:city,
    state:state,
    pincde:pincode,
    describe:describe

 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
 
      }).catch((error) => {
        console.error(error);
      });
 
 
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
     <ScrollView style={{maxHeight:'100%'}}>
       <View style={{marginBottom:20}}>
         <Content padder> 

         <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
           <Text style={{fontSize:25,fontWeight:'bold',color:'#1D4E9E',textDecorationLine:'underline'}}>Welcome to Join Us as an</Text>
           <View style={{flexDirection:'row'}}>
             <Image
             style={{height:30, width:30,color:'black'}}
             source={{uri:'https://cdn1.iconfinder.com/data/icons/travel-hazel-vol-1/256/Hand-bouquet-512.png'}}
             />
           <Text style={{fontSize:25,fontWeight:'bold',color:'#1D4E9E',textDecorationLine:'underline'}}>LIC Agent</Text>
           <Image
             style={{height:30, width:30,color:'black'}}
             source={{uri:'https://cdn1.iconfinder.com/data/icons/travel-hazel-vol-1/256/Hand-bouquet-512.png'}}
             />
           </View>
        </View>

         <View style={{borderColor:'black',borderWidth:2, marginBottom:30}}>
         <View style={{justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:10}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>Tell Us About Yourself...</Text>
         </View>
     <Text style={{color:'red', textAlign:'center'}}>
      { this.state.Error}
    </Text>
    <Text style={{fontSize:16, marginLeft:5}}>Enter Your Name:</Text>
       <TextInput
       onSubmitEditing={() => {this.nextInput.focus()}}
       onChangeText={name => this.setState({name})}
       underlineColorAndroid='transparent'
       style={styles.TextInputStyleClass}
       />

<Text style={{fontSize:16, marginLeft:5}}>Enter Your Mail-ID:</Text>
       <TextInput
        ref={nextInput => this.nextInput = nextInput}
        onSubmitEditing={() => {this.nextInput1.focus()}}
       keyboardType='email-address' 
       onChangeText={email => this.setState({email})}
       style={styles.TextInputStyleClass}
       />

     <Text style={{fontSize:16, marginLeft:5}}>Enter Your Number:</Text>
       <TextInput
      ref={nextInput1 => this.nextInput1 = nextInput1}
      onSubmitEditing={() => {this.nextInput2.focus()}}
       keyboardType='numeric' 
       onChangeText={phonenumber => this.setState({phonenumber})}
       underlineColorAndroid='transparent'
       style={styles.TextInputStyleClass}
       />
      
  

      <Text style={{fontSize:16, marginLeft:5}}>Enter Your Age:</Text>
       <TextInput
       ref={nextInput2 => this.nextInput2 = nextInput2}
       onSubmitEditing={() => {this.nextInput3.focus()}}
       keyboardType='numeric' 
       onChangeText={age => this.setState({age})}
       style={styles.TextInputStyleClass}
       />

       <Text style={{fontSize:16, marginLeft:5}}>Enter Your Qualification:</Text>
       <TextInput
       ref={nextInput3 => this.nextInput3 = nextInput3}
       onSubmitEditing={() => {this.nextInput4.focus()}}
       onChangeText={qualifications => this.setState({qualifications})}
       style={styles.TextInputStyleClass}
       />

       <Text style={{fontSize:16, marginLeft:5}}>Enter Your Occupation:</Text>
       <TextInput
       ref={nextInput4 => this.nextInput4 = nextInput4}
       onSubmitEditing={() => {this.nextInput5.focus()}}
       onChangeText={occupations => this.setState({occupations})}
       style={styles.TextInputStyleClass}
       />

       <Text style={{fontSize:16, marginLeft:5}}>Enter Your Address:</Text>
       <TextInput
       ref={nextInput5 => this.nextInput5 = nextInput5}
       onSubmitEditing={() => {this.nextInput6.focus()}}
       onChangeText={address => this.setState({address})}
       style={styles.TextInputStyleClass}
       />

      <Text style={{fontSize:16, marginLeft:5}}>Enter Your City:</Text>
       <TextInput
       ref={nextInput6 => this.nextInput6 = nextInput6}
       onSubmitEditing={() => {this.nextInput7.focus()}}
       onChangeText={city => this.setState({city})}
       style={styles.TextInputStyleClass}
       />

       <Text style={{fontSize:16, marginLeft:5}}>Enter Your State:</Text>
       <TextInput
       ref={nextInput7 => this.nextInput7 = nextInput7}
       onSubmitEditing={() => {this.nextInput8.focus()}}
       onChangeText={state => this.setState({state})}
       style={styles.TextInputStyleClass}
       />

<Text style={{fontSize:16, marginLeft:5}}>Enter Your Pincode:</Text>
       <TextInput
       ref={nextInput8 => this.nextInput8 = nextInput8}
       onSubmitEditing={() => {this.nextInput9.focus()}}
       onChangeText={pincode => this.setState({pincode})}
       keyboardType='numeric' 
       style={styles.TextInputStyleClass}
       />

      <Text style={{fontSize:16, marginLeft:5}}>Introduce Briefly About Yourself:</Text>
      <TextInput
       ref={nextInput9 => this.nextInput9 = nextInput9}
       onChangeText={describe => this.setState({describe})}
       style={styles.TextInputStyleClass}
       />

   <View style={{justifyContent:'center',alignItems:'center',marginTop:20, marginBottom:20}}>
      <TouchableOpacity
      style={{backgroundColor:'#FBC707',borderRadius:5,padding:10,width:(DEVICE_WIDTH)-60,bordercolor:'black',borderWidth:0.5}}
      onPress={() => this.functionOne()}
      >
      <Text style={{color:'black',textAlign:'center',
      fontSize:20}}>Submit</Text>
      </TouchableOpacity>
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
       </Content>
            </View>
     </ScrollView>
     </Container>
        );
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:5
  },

  TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 20,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
        margin:5
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