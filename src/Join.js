import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { Header, Content, Body, Left, Accordion, Tab, Tabs, ScrollableTab, Container, Footer, Button } from 'native-base';
import "react-native-gesture-handler";
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
import Tab4 from './Tabs/tab4';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SocialIcon } from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class Career extends React.Component{
   
  navigateToScreen = (Register) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: Register
    });
    this.props.navigation.dispatch(navigateAction);
  }
   
    render(){
        return(
       <Container>

      <Header hasTabs style={{ backgroundColor: '#FBC707'}}>
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
     <Content >
        
        <Tabs locked transparent renderTabBar={()=> <ScrollableTab />} >
          <Tab heading="Careers" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Guidelines"  tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}} >
            <Tab2 />
          </Tab>
          <Tab heading="Mock Tests" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}} >
            <Tab3 />
          </Tab>
          <Tab heading="Success Stories" tabStyle={{backgroundColor:'#FBC707'}} activeTabStyle={{backgroundColor:'#FBC707'}} textStyle={{color:'black'}} activeTextStyle={{color:'black', fontWeight:'bold'}}>
            <Tab4 />
          </Tab>
        </Tabs>
        
        </Content>
        
          <TouchableOpacity
            onPress={this.navigateToScreen('Register')}
          >
            <Footer style={styles.footer}>
            <Text style={{fontSize:24, fontWeight:'800', color:'#fff'}}>Become An LIC Agent</Text>
            </Footer>
          </TouchableOpacity>
 
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
  footer: {
    backgroundColor:'#1D4E9E',
    justifyContent:'center', 
    alignItems:'center'
  }

});