import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import "react-native-gesture-handler";
import Home from './src/Home';
import About from './src/About';
import Our from './src/Team';
import Join from './src/Join';
import Buy from './src/Buy';
import Refer from './src/Refer';
import Register from './src/Register';
import Locate from './src/Locate';
import Contact from './src/Contact';
import Feedback from './src/Feedback';
import Faq from './src/Faq';

import Sidebar from './Sidebar';


const MyDrawerNavigator = createDrawerNavigator({
  Home : {
    screen: Home,
  },
  About : {
    screen: About,
  },
  Our : {
    screen: Our,
  },
  Join : {
    screen: Join
  },
  Buy : {
    screen: Buy,
  },
  Refer : {
    screen: Refer,
  },
  Register : {
    screen: Register,
  },
  Locate : {
    screen: Locate,
  },
  Contact: {
    screen: Contact,
  },
  Feedback: {
    screen: Feedback,
  },
  Faq: {
    screen: Faq,
  }
},
{   
  gesturesEnabled: true,
  drawerWidth:250,
  drawerType:'front',
  contentComponent: Sidebar, 
}
);

export default createAppContainer(MyDrawerNavigator);