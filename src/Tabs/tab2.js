import React, { Component } from 'react';
import { Container, View, Card, CardItem, Body, Content, Form, Item, Input, Textarea } from 'native-base';
import {StyleSheet,Text, ScrollView, TouchableOpacity, Dimensions, TextInput,Alert,KeyboardAvoidingView, Image} from 'react-native';


export default class Tab2 extends Component {


    render(){
        return(
            <View>
            
            <ScrollView>
                <View>
                <View>
                    <Image
                    style={{height:100, width:(DEVICE_WIDTH), resizeMode:'stretch'}}
                    source={{uri: 'https://careeratlic.in/img/procedure-to-become-lic-agent.jpg'}}
                    />
                </View>
                <Content padder>
                <View>
                    <Card>
                        <CardItem header bordered>
                            <Text style={{fontSize:20}}>Documents</Text>
                        </CardItem>
                        <CardItem>
                            <View>
                              <Text style={{fontSize:16}}>
                             1.  color photos 2{'\n'}
                             2.  Age Proof (18+ years only){'\n'}
                             3.  10th/12th Pass Certificate{'\n'}
                             4.  Pan Card{'\n'}
                             5.  Local Address Proof{'\n'}
                             6.  Cancelled cheque Leaf{'\n'}
                              </Text>
                            </View>

                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text style={{fontSize:20}}>Fees</Text>
                        </CardItem>
                        <CardItem>
                            <View>
                              <Text style={{fontSize:16}}>
                             1. Registration Fee -Rs.150/-{'\n'}
                             2. Online Training Fee-Rs.150/-plus GST{'\n'}
                             3. Offline Training -Free{'\n'}
                             4. Study Material -Free{'\n'}
                             5. Exam Fee -Rs.425/-plus GST{'\n'}
                             6. Cancelled cheque Leaf{'\n'}
                              </Text>
                            </View>

                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text style={{fontSize:20}}>Registration</Text>
                        </CardItem>
                        <CardItem>
                            <View>
                              <Text style={{fontSize:16}}>
                             1.To join LIC as an insurance advisor, you have to register by filing and submitting your details in the registration form with the required documents.
                            </Text>
                            </View>

                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text style={{fontSize:20}}>Training</Text>
                        </CardItem>
                        <CardItem>
                            <View>
                              <Text style={{fontSize:16}}>
                             1.  After successful of Registration,You have to go for online or offline training.{'\n'}
                             2.  After completion of training you will get the certificate.{'\n'}
                             3.  Training will be for 25 hours and which covers all aspects of life insurance concepts.{'\n'}
                              </Text>
                            </View>

                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text style={{fontSize:20}}>Exam</Text>
                        </CardItem>
                        <CardItem>
                            <View>
                              <Text style={{fontSize:16}}>
                            1.  After successful of Completion of training, You will have to write a pre-licensing Examination which is conducted by the Insurance Regulatory and Development Authority (IRDA).18 marks are required to pass
                              </Text>
                            </View>

                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text style={{fontSize:20}}>Licence</Text>
                        </CardItem>
                        <CardItem>
                            <View>
                              <Text style={{fontSize:16}}>
                             1. After successfully completing the exam, you will be awarded with an appointment letter by LIC to work as an Life Insurance Agent.{'\n'}
                             2.  You will be appointed as an agent by our Branch Office (Roop Nagar, Delhi) and will be part of my team.{'\n'}
                              </Text>
                            </View>

                        </CardItem>
                    </Card>
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