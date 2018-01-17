/**
 */
'use strict';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Image,
  AppState
} from 'react-native';
import React, { Component } from 'react';
import Camera from 'react-native-camera';


import TargetOverlay from './Components/TargetOverlay.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layer : 0,
      panel : 0,
      currentDetect : 0,
    }
  }

  componentDidMount(){
    AppState.addEventListener('change',this._handleChange.bind(this));
    this.setCNNModel();
  }

  componentWillUnmount(){
    AppState.removeEventListener('change',()=>{console.log('unmounted')})
  }

  render() {

    console.log(AppState.currentState);
    return (
          <View style={styles.container}>
            <Camera
	          ref={(cam) => {this.camera = cam;}}
	          style={styles.preview}
	          aspect={Camera.constants.Aspect.Fill}
              >
              {/*
                onCNNDetect={(event)=>{
                  console.log(event.data);
                  //if(event.data > 0.9){this._scrollToIndex(1);}
                }}
              */}
                <View style={styles.preview}>
                  <TargetOverlay />
                </View>

                {/*
                <View style={styles.preview}>
                  <Image
                    source={require('./Assets/SunTarget.png')}
                    style={styles.captureTarget}
                    resizeMode={'contain'}/>
                  <Text style={styles.text}>I am happiest when within 5 feet of a window...</Text>
                </View>

                <View style={styles.preview}>
                  <Image
                    source={require('./Assets/DryTarget.png')}
                    style={styles.captureTarget}
                    resizeMode={'contain'}/>
                  <Text style={styles.text}>...and dry within 4 hours of watering. </Text>
                </View>

                <View style={styles.preview}>
                  <Image
                    source={require('./Assets/WaterTarget.png')}
                    style={styles.captureTarget}
                    resizeMode={'contain'}/>
                  <Text style={styles.text}>I am happiest when soaked for 30 minutes... </Text>
                </View>

                <View style={styles.preview}>
                  <Image
                    source={require('./Assets/WaterTarget.png')}
                    style={styles.captureTarget}
                    resizeMode={'contain'}/>
                  <Text style={styles.text}>...2 times a week. </Text>
                </View>

                <View style={styles.preview}>
                  <Text style={styles.text}>5,4,3,2... 1 happy Pair Plant </Text>
                  <Text style={styles.text}>Welcome to VoltAGE!</Text>
                  <Text style={styles.text}>You are now my caretaker!</Text>
                  <Text style={styles.text}>I am kind of weird.</Text>
                  <Text style={styles.text}>I make sugar from sunshine.</Text>
                  <Text style={styles.text}>I drink water through my skin.</Text>
                  <Text style={styles.text}>I only breath at night.</Text>
                  <Text style={styles.text}>Caring for me is as easy as 5,4,3,2,1</Text>
                </View>
              */}
      	    </Camera>
          </View>
    );
  }

  _scrollToIndex(panelDistance){
    //Check if there is an index to scroll to
    console.log(this.state.panel);
    if(this.state.panel < 6){
      this.state.panel += 1;
      this.horizontalOne.scrollBy(panelDistance);
    }
  }

  setCNNModel() {
    fetch('https://evening-falls-93288.herokuapp.com/v1/detectors/2')
    .then((response) => response.json())
    .then((responseJson) => {
      let detectorParamString = responseJson.data[0].parameters;
      this.camera.setCNNModel(detectorParamString);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
  _handleChange(){

    //reset view to login if we go background or inactive
    if(AppState.currentState === 'background' || AppState.currentState === 'inactive'){
      //move the view to login
      // var login = -this.state.panel;
      // this.state = {panel: 0};
      // console.log('reset, scrolled to: ' + login);
      //this.horizontalOne.scrollTo(login);
    }
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
    flex: 1,
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
  careIcon: {
    flex: 1,
    width: 200,
    height: 200,
  },
  captureTarget:{
    flex: 0,
    width: 500,
    height: 500,
  },
  //testing css
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }

});

//AppRegistry.registerComponent('VoltAGE', () => VoltAGE);
