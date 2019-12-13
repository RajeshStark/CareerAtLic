import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {StyleSheet, ScrollView, Text, View, Linking, TouchableOpacity} from 'react-native';
import {Footer} from 'native-base';
import { Divider,Badge} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BlinkView from 'react-native-blink-view';


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
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
 


  render () {

   

    
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Home')}
            >
            <Icon name='home' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle}>
              Home
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('About') }
            
            >
            <Icon name='address-card' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle}>
            About Us
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('Our')}
             
            >
            <Icon name='users' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle}>
            Meet Our Team
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('Join')}
             
            >
            <Icon name='star' style={{fontSize:30, color:'white'}} />
              <View>
              <BlinkView delay={500}>
             <Badge
               status="error"
               value="New"
               containerStyle={{ position: 'absolute', top: -10, right: -16 }}
              />
            </BlinkView>
              <Text style={styles.navItemStyle}>
              Become LIC Agent
              </Text>  
            
              </View>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('Buy')}
             
            >
            <Icon name='book-open' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle}>
            Buy LIC Policy
              </Text>

            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('Refer')}
             
            >
            <Icon name='user-alt' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle}>
              Refer A Friend
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle}  onPress={this.navigateToScreen('Register')}
            
            >
            <Icon name='file-signature' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle}>
               Register
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Locate')}
            
            >
            <Icon name='map-marker-alt' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle} >
              Locate Us
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />          


            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Contact')}
           
            >
            <Icon name='at' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle} >
              Contact Us
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />    

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Feedback')}
             
            >
            <Icon name='comments' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle} >
              Feedback Us
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} /> 

            <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Faq')}
             
            >
            <Icon name='question-circle' style={{fontSize:30, color:'white'}} />
              <Text style={styles.navItemStyle} >
              FAQ's
              </Text>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', borderWidth:0.7 }} />     
           
            
            </View>
        </ScrollView>

        <Footer style={{backgroundColor:'#1D4E9E', marginBottom:5,justifyContent:'flex-start',margin:5 }}>
             <View>
               <Text style={{color:'#282828'}}>App Version : 1.0</Text>
              
               <TouchableOpacity 
                   onPress={() => {
                    Linking.openURL('https://nutantek.com/');}}>
                <Text style={{fontSize:16, color:'white',textDecorationLine:'underline'}}>By Nutantek Solutions LLP</Text>
                 </TouchableOpacity>
             </View>
           </Footer>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        backgroundColor:'#1D4E9E'
      },
      navSectionStyle:{
      marginLeft:30,
      flexDirection:'row',
      padding:10
      },
      navItemStyle: {
        padding: 5,
        fontSize:15,
        color:'white'
      },
     
});

export default SideMenu;