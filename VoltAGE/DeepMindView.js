/**
 *
 *
 *
 *
 *
 *
 * @providesModule DeepMindView
 * @flow
 *
 */

'use strict';


const DeepMindView = React.createClass({

  render: function(){
    return(
      <RCTDeepMind />
    )
  }

})

const RCTDeepMind = requireNativeComponent('RCTDeepMind', DeepMindView, {} );

module.exports = DeepMindView;

