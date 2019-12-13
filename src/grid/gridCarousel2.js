import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground,Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
 
export default class Example extends Component {
  render() {
    const items = [
      { name: 'https://careeratlic.in/img/DM%20Club%20Member_SanjeevChaudhary.jpg', code: 'Sanjeev', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
      { name: 'https://careeratlic.in/img/BM%20Club%20Member_ManojSharma.jpg', code: 'Manoj Sharma', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
      { name: 'http://api.ning.com/files/3xh5OKLELdmunxUkiaqtIRfQ5ExlXCrJ85pKr3jGnbtvlRubARY5VrFNK8TmRXit182qWa1q1WZg-IU*cwBYaFQ-74ff0zW6/Passportsizephoto.JPG?profile=RESIZE_710x&height=508', code: 'Ramesh', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
      { name: 'https://3.imimg.com/data3/QV/XO/MY-14074015/passport-size-photo-250x250.png', code: 'Veeresh', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
      { name: 'http://www.fcriindia.com/wp-content/uploads/2016/03/693-Eldin-passport-size.jpg', code: 'Yadav', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com' },
      { name: 'http://www.fcriindia.com/wp-content/uploads/2016/03/DSC_4781-copy.jpg', code: 'Kumar', mobile: '9876543210', email: 'abc@gmail.com', url: 'www.abc.com'  },
  
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
 