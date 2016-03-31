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
    )
  }

  componentDidMount() {
    this._bounce();
    AppStateIOS.addEventListener('change',this._handleIOSstateChange.bind(this));
  }

  componentWillUnmount(){
    AppStateIOS.removeEventListener('change',()=>{console.log('unmounted')})
  }

  _handleIOSstateChange(){
    console.log('bounce ',AppStateIOS.currentState);
    if(AppStateIOS.currentState === 'active'){
      this._bounce();
    }
  }

  _bounce(){
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
	friction: 1,
      }
    ).start();
  }

}
