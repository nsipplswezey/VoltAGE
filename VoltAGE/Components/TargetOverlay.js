/**
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Animated,
  AppStateIOS,
  NativeAppEventEmitter,
} from 'react-native';


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
      bounceValue: new Animated.Value(0),
      wiggleValue: new Animated.Value(0),
    };
  }

  render(){
    return(
	    <Animated.Image
	      source={require('../Assets/Target.png')}
	      style={
	        {flex: 0,
		       width: 500,
		       height: 500,
		       transform: [
		         {scale: this.state.bounceValue}
		       ]}
	      }
	      resizeMode={'contain'}/>
    )}

  componentDidMount() {
    this._bounce();
    AppStateIOS.addEventListener('change',this._handleIOSstateChange.bind(this));
    NativeAppEventEmitter.addListener('CameraCNNUpdate', this._handleCNNUpdate.bind(this));
  }

  componentWillUnmount(){
    AppStateIOS.removeEventListener('change',()=>{console.log('unmounted: AppState')})
    NativeAppEventEmitter.removeListener('CameraCNNUpdate', ()=>{console.log('unmounted:CNN update')})
  }

  _handleIOSstateChange(){
    console.log('bounce ',AppStateIOS.currentState);
    if(AppStateIOS.currentState === 'active'){
      this._bounce();
    }
  }

  _handleCNNUpdate(data){
    console.log('overlay',data.amount);
    this.state.wiggleValue.setValue(data.amount);

  }

  _bounce(){
    console.log('wiggle',this.state.wiggleValue);
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
	      friction: 1,
      }
    ).start(() => {this._bounce()});
  }

}
