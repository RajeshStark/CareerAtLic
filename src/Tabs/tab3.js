import React, { Component } from 'react';
import { Content, Button, Card  } from 'native-base';
import {StyleSheet,View,Text, ScrollView, TouchableOpacity, Dimensions,Image,Linking} from 'react-native';


export default class Tab3 extends Component {


    render(){
        return(
            <View>
                <Image
                style={styles.banner}
                source={{uri:'https://careeratlic.in/img/mock%20test_05.jpg'}}/>
                <ScrollView>
                 <Content padder>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                     <Text style={{fontWeight:'700', fontSize:28,textDecorationLine:'underline',color:'#1D4E9E'}}>
                      Mock Tests
                     </Text>
                   </View>
                   <Text style={{fontSize:16}}>
                   A mock test is a practice test that is conducted for the applicants for a better result in their final exam.
                    A mock test is a sample of the actual examination and helps in building the confidence of the applicant.
                   </Text>
                   <Text style={{fontSize:22, marginTop:10}}>How To Prepare For IC38 Exam ?</Text>
                   <Text style={{fontSize:16}}>
                      1. DAY 1. Read all the chapters from the IC38 Study Material . It will take 2hrs to read all the chapters{"\n"}
                      2.DAY 2/3. Go through the question set given in IC38 Study Material for different languages . Try to solve questions on your own before looking to answers.{"\n"}
                      3. DAY 4/5. Attempt the Mock Test in your preferred languages.{"\n"}
                      4. DAY 6. Once again revise all the chapters given in the notes. Make sure you are aware of all the important topics of each chapter.{"\n"}
                      5. DAY 7. Exam day.{"\n"}
                   </Text>
                   <View style={{justifyContent:'center', alignItems:'center'}}>
                       <Text style={{fontSize:22}}>Download Materials For Preparation</Text>
                       <Card  style={styles.touch}>
                           <View style={{justifyContent:'center', alignItems:'center'}}>
                           <Text style={{fontSize:26}}>IC-38</Text>
                           <Image
                           style={styles.img}
                           source={{uri:'https://uwm.edu/freshwater/wp-content/uploads/sites/48/2018/09/pdf-icon-transparent-7.png'}}
                           />
                          

                         </View>
                       <TouchableOpacity
                      style={styles.touchable}
                        onPress={() => {
                            Linking.openURL('https://careeratlic.in/webmaster/img/mocktest/5d42ac947ac7b2.32055265.pdf')}}
                       >
                           <Text style={{fontSize:18}}>Download</Text>
                       </TouchableOpacity>
                       </Card>

                       <Card  style={styles.touch}>
                           <View style={{justifyContent:'center', alignItems:'center'}}>
                           <Text style={{fontSize:26}}>IC-38(Hindi)</Text>
                           <Image
                           style={styles.img}
                           source={{uri:'https://uwm.edu/freshwater/wp-content/uploads/sites/48/2018/09/pdf-icon-transparent-7.png'}}
                           />
                          

                         </View>
                       <TouchableOpacity
                      style={styles.touchable}
                        onPress={() => {
                            Linking.openURL('https://careeratlic.in/webmaster/img/mocktest/5d42ac5752ac67.24177740.pdf')}}
                       >
                           <Text style={{fontSize:18}}>Download</Text>
                       </TouchableOpacity>
                       </Card>

                       <Card  style={styles.touch}>
                           <View style={{justifyContent:'center', alignItems:'center'}}>
                           <Text style={{fontSize:26}}>Question Bank</Text>
                           <Image
                           style={styles.img}
                           source={{uri:'https://uwm.edu/freshwater/wp-content/uploads/sites/48/2018/09/pdf-icon-transparent-7.png'}}
                           />
                          

                         </View>
                       <TouchableOpacity
                      style={styles.touchable}
                        onPress={() => {
                            Linking.openURL('https://careeratlic.in/webmaster/img/mocktest/5d42aa82ae80e9.61861108.pdf')}}
                       >
                           <Text style={{fontSize:18}}>Download</Text>
                       </TouchableOpacity>
                       </Card>

                   </View>
                   
                 </Content>
                </ScrollView>
            </View>

        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
   banner: {
       width: (DEVICE_WIDTH),
       height: 200,
       resizeMode:'stretch'
   },
   touch:{
       height:250,
       width: (DEVICE_WIDTH)-40,
       
    
   },
   img:{
       width: (DEVICE_WIDTH)/3,
       height:150
   },
   touchable:{
       justifyContent:'center',
       alignItems:'center',
       borderColor:'black',
       borderWidth:1,
       borderRadius:5,
       padding:10,
       margin:10
   }
  
  });