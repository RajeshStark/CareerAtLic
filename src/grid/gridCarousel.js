import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground,Dimensions,Linking } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
export default class Example extends Component {
  render() {
    const items = [
      { name: 'https://careeratlic.in/img/CM%20Club%20Member_AjayKumar.jpg', code: 'Ajay Kumar', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
      { name: 'https://careeratlic.in/img/ZM%20Club%20Member_AnandKumar.jpg', code: 'Anand Kumar', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
      { name: 'https://careeratlic.in/img/DM%20Club%20Member_SompalSingh.jpg', code: 'Sompal Singh', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
      { name: 'https://careeratlic.in/img/DM%20Club%20Member_DayalSharan.jpg', code: 'Dayal Sharan', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
      { name: 'https://careeratlic.in/img/client3.jpeg', code: 'Dinesh Yadav', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
      { name: 'https://careeratlic.in/img/DM%20Club%20Member_AshwaniKumar.jpg', code: 'Ashwani Kumar', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
  
    ];
 
    return (
      <FlatGrid
        itemDimension={(DEVICE_WIDTH)/4}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
            <View>
          <ImageBackground style={[styles.itemContainer, { borderColor:'black', borderWidth:0.2}]}
            source={{uri: item.name}}>

            
            </ImageBackground>
            <Text style={styles.itemCode}>{item.code}</Text>
            <Text style={{fontSize:10}}>No: {item.mobile}</Text>
            <Text style={{fontSize:10}}>mail:{item.email}</Text>
            <TouchableOpacity
            onPress={() => {
              Linking.openURL('https:{item.url}')}}
            >
            <Text style={{fontSize:10}}>{item.url}</Text>
            </TouchableOpacity>
            </View>
        )}
      />
    );
  }
}
 
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
     height:150,
     width:100, 
    fontSize: 16,
    color: '#fff',
   

  },
  itemCode: {
    fontWeight: '600',
    fontSize: 13,
    margin: 5,
    color: '#000',
  },
});
 