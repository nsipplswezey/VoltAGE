/**
 */
'use strict';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Animated,
  AppState,
  NativeAppEventEmitter,
} from 'react-native';
import React, { Component } from 'react';

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


export default class TargetOverlay extends Component{
  constructor(props: any){
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1.5), //https://stackoverflow.com/questions/47278781/react-native-animation-not-working-properly-on-android
      wiggleValue: new Animated.Value(0.01), //https://stackoverflow.com/questions/47278781/react-native-animation-not-working-properly-on-android
      bouncing: false,
    };
  }

  render(){
    console.log('using native driver')
    return(
	    <Animated.Image
	      source={require('../Assets/Target.png')}
        useNativeDriver= {true}
	      style={
	        {flex: 0,
		       width: 500,
		       height: 500,
           backgroundColor: "transparent", //https://github.com/facebook/react-native/issues/13550
		       transform: [
		         {scale: this.state.bounceValue},
             {perspective: 1000}, //https://facebook.github.io/react-native/docs/animations.html#bear-in-mind
		       ]}
	      }
	      resizeMode={'contain'}/>
    )}

  componentDidMount() {
    //this._bounce();

    Animated.loop(
      Animated.spring(
        this.state.bounceValue,
        {
          toValue: 0.8,
  	      friction: 1,
        }
      )).start();

    //AppState.addEventListener('change',this._handleIOSstateChange.bind(this));
    //NativeAppEventEmitter.addListener('CameraCNNUpdate', this._handleCNNUpdate.bind(this));
  }

  componentWillUnmount(){

    //AppState.removeEventListener('change',()=>{console.log('unmounted: AppState')})
    //NativeAppEventEmitter.removeListener('CameraCNNUpdate', ()=>{console.log('unmounted:CNN update')})
  }

  _handleIOSstateChange(){
    console.log('bounce ',AppState.currentState);
    if(AppState.currentState === 'active'){
      this._bounce();
    }
  }

  _handleCNNUpdate(data){
    console.log('overlay',data.amount);
    this.state.wiggleValue.setValue(data.amount);
  }

  _bounce(){
    console.log('wiggle',this.state.wiggleValue);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
	      friction: 1,
      }
    ).start(() => {this._bounce()});
  }

}
