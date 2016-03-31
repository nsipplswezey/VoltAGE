
/**
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Camera from 'react-native-camera';
import Swiper from 'react-native-swiper';



const styles = StyleSheet.create({
  captureTarget:{
    flex: 0,
    width: 500,
    height: 500,
  },
  container:{
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
});


export default class Detector extends Component{

  render(){
    return(
          <View style={styles.container}>
            <Camera
	      ref={(cam) => {
	      this.camera = cam;
	        }}
	      style={styles.preview}
	      aspect={Camera.constants.Aspect.Fill}
	      onCNNDetect={(data)=>{this._scrollToIndex(1)}}>
	    <Image 
	      source={require('../Target.png')} 
	      style={styles.captureTarget}
	      resizeMode={'contain'}/> 
	    </Camera>
          </View>
    )
  }

}
