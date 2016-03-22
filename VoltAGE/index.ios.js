/**
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Camera from 'react-native-camera';
import Swiper from 'react-native-swiper';

class VoltAGE extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
	showsPagination={false}
	loop={false}
	autoplay={false}
	autoplayTimeout={0}
	ref={'swiper'}>
        <View style={styles.container}>
          <Camera
	  ref={(cam) => {
	    this.camera = cam;
	  }}
	  style={styles.preview}
	  aspect={Camera.constants.Aspect.Fill}
	  onBarCodeRead={(data)=>{Alert.alert('barcoe!',data.data)}}
	  >
	    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
	  </Camera>
        </View>
	<View style={styles.slider2}>
	  <Text style={styles.text}>Hello Swiper</Text>
	</View>
      </Swiper>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slider1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slider2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slider3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
});

AppRegistry.registerComponent('VoltAGE', () => VoltAGE);
