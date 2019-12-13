import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground,Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
 
export default class Example extends Component {
  render() {
    const items = [
      { name: 'http://www.fcriindia.com/wp-content/uploads/2016/03/IMG_20150718_14275921.jpg', code: 'Honey Singh', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
      { name: 'http://www.fcriindia.com/wp-content/uploads/2016/03/Mukundan.jpg', code: 'Mukundan' , mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
      { name: 'http://www.fcriindia.com/wp-content/uploads/2016/03/RRB.jpg', code: 'RRB', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
      { name: 'http://www.fcriindia.com/wp-content/uploads/2016/03/ashik.jpg', code: 'Ashik' , mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
      { name: 'http://www.fcriindia.com/wp-content/uploads/2016/03/260.X.320-1.jpg', code: 'Dharmendra' , mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
      { name: 'http://www.fcriindia.com/wp-content/uploads/2016/03/SREEKUMAR.jpg', code: 'Sree Kumar', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
  
    ];
 
    return (
      <FlatGrid
        itemDimension={(DEVICE_WIDTH)/4}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        renderItem={({ item, index }) => (
            <View>
          <ImageBackground style={[styles.itemContainer, { borderColor:'black', borderWidth:0.2}]}
            source={{uri: item.name}}>

            
            </ImageBackground>
            <Text style={styles.itemCode}>{item.code}</Text>
            <Text style={{fontSize:10}}>No: {item.mobile}</Text>
            <Text style={{fontSize:10}}>mail:{item.email}</Text>
            <Text style={{fontSize:10}}>{item.url}</Text>
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
     width: 80, 
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
 