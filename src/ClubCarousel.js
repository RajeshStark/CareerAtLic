import React from "react";
import {Text, View, Image, StyleSheet, Dimensions} from "react-native";
import { Card, Container, Content} from "native-base"
import { returnStatement } from "@babel/types";
import "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";

export default class ClubCarousel extends React.Component{
    

    render(){
        return(
            <Container>
                <Content>
                        <View style={{height:400, width: DEVICE_WIDTH}}>
                            <Card >
                              <View style={{flexDirection:'row', justifyContent:'space-around'}}> 
                              <ScrollView
                              horizontal={true}
                              >
                              <Card style={styles.cardv}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                style={styles.Image}
                                source={{uri:'https://careeratlic.in/img/CM%20Club%20Member_AjayKumar.jpg'}}/>
                                <Text style={styles.txth}>Ajay Kumar</Text>
                                <Text style={styles.txts}>CM Club Member</Text>
                                </View>
                               </Card>
               
                             <Card style={styles.cardv}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                style={styles.Image}
                                source={{uri:'https://careeratlic.in/img/ZM%20Club%20Member_AnandKumar.jpg'}}/>
                                <Text style={styles.txth}>Anand Kumar</Text>
                                <Text style={styles.txts}>ZM Club Member</Text>
                                </View>
                              </Card>  

                             <Card style={styles.cardv}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                style={styles.Image}
                                source={{uri:'https://careeratlic.in/img/DM%20Club%20Member_SompalSingh.jpg'}}/>
                                <Text style={styles.txth}>Sompal Singh</Text>
                                <Text style={styles.txts}>Dm Club Member</Text>
                                </View>
                              </Card> 

                              <Card style={styles.cardv}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                style={styles.Image}
                                source={{uri:'https://careeratlic.in/img/DM%20Club%20Member_DayalSharan.jpg'}}/>
                                <Text style={styles.txth}>Dayal Sharan</Text>
                                <Text style={styles.txts}>DM Club Member</Text>
                                </View>
                              </Card> 

                              <Card style={styles.cardv}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                style={styles.Image}
                                source={{uri:'https://careeratlic.in/img/client3.jpeg'}}/>
                                <Text style={styles.txth}>Dinesh Yadav</Text>
                                <Text style={styles.txts}>Dm Club Member</Text>
                                </View>
                              </Card> 

                              <Card style={styles.cardv}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                style={styles.Image}
                                source={{uri:'https://careeratlic.in/img/DM%20Club%20Member_AshwaniKumar.jpg'}}/>
                                <Text style={styles.txth}>Ashwani Kumar</Text>
                                <Text style={styles.txts}>DM Club Member</Text>
                                </View>
                              </Card> 

                              <Card style={styles.cardv}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                style={styles.Image}
                                source={{uri:'https://careeratlic.in/img/DM%20Club%20Member_SanjeevChaudhary.jpg'}}/>
                                <Text style={styles.txth}>Sanjeev {"\n"}Chaudhary</Text>
                                <Text style={styles.txts}>DM Club Member</Text>
                                </View>
                              </Card> 

                              <Card style={styles.cardv}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                style={styles.Image}
                                source={{uri:'https://careeratlic.in/img/BM%20Club%20Member_ManojSharma.jpg'}}/>
                                <Text style={styles.txth}>Manoj Sharma</Text>
                                <Text style={styles.txts}>BM Club Member</Text>
                                </View>
                              </Card> 
                              </ScrollView>
                              </View>  
                            </Card>
                        </View>
                </Content>
            </Container>
       
        );     
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
    Image:{
        height:200,
        width: 140,
        margin:5,
        borderRadius:10,
        borderColor:'black',
        borderWidth:0.5
    },
    txth:{
        fontSize:24,
        fontWeight: '600',
        margin:10
    },
    txts:{
        fontSize:15,
        fontWeight: '300',
        margin:10
        },
    cardv: {
        margin:5,
        borderRadius:5,
        borderColor:'black',
        borderWidth:1
    }

});