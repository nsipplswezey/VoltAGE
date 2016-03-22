/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Camera from 'react-native-camera';
const ContactPickerIOS = require('./ContactPickerIOS.js');
const DeepMindIOS = require('./DeepMindIOS.js');


var deepMind = function(callback){
  DeepMindIOS.openLearner({arg1: "hello"},
			   (message) => callback(message));
//  ContactPickerIOS.openPicker({arg1: "hello"},
//			      (name,number) => callback(name,number));
}

class VoltAGE extends Component {
  
  _changeView(){
    this.refs.swiper.scrollTo(1);
  }

  componentDidMount(){
  }

  render() {
    return (
      <Swiper 
        style={styles.wraper}
        showsPagination={false}
	loop={false}
	autoplay={false}
	autoplayTimeout={1}
	ref={'swiper'}>
        <View style={styles.slide1}>
	  <Camera style={styles.preview} >
	    <Text style={styles.capture}>[CAPTURE]</Text>
	  </Camera>
	</View>
	<View style={styles.slide2}>
	  <Text 
	    style={styles.text}
	    onPress={()=>{deepMind((message)=>{console.log(message)})}}>Hello Swiper</Text>
	</View>
	<View style={styles.slide3}>
	  <Text style={styles.text}>And simple</Text>
	</View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  test: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 20,
  },
});

AppRegistry.registerComponent('VoltAGE', () => VoltAGE);
