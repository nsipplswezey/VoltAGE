/**
 *
 *
 *
 *
 * @providesModule DeepMindIOS
 * @flow
 *
 */

'use strict'

var RCTDeepMindManager = require('NativeModules').DeepMindManager;

class DeepMindIOS {
/**
 * Creates a DeepMindSDK view for mobile ML
 * Returns a predictor that can be stored
 * Predictor can be used to parameterize future CNN
 *
 */

  static openLearner(
    options,
    callback
  ): void {
    RCTDeepMindManager.openDeepMindLearner(options,callback)
  }
}

module.exports = DeepMindIOS;
