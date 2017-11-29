# VoltAGE v0.0.2
VOLunTary Acts of Gifting Endlessly

# Objective
This is a react native product for quickly capturing images of items that are intended to be gifted, then making note of whether they were gifted!

We pass images of the physical item to a convoluted nerual net, optimized for mobile, to create an identification model.

When the physical item is gifted, the reciever points their phone at the item to identify the item and document receipt.

## Current status:
v0.0.2 milestones
- [x] react-native-camera extended to stream frames to CNN √

- [x] implement DeepBeliefSDK in extended react-native-camera

- [ ] Deep belief trained on relevant object set (single object)

- [ ] Zero touch UI reacts to camera targets (currently being rebuilt)

## Selected Dev Notes + Rationale:
v0.0.1 intent was test of critical technologies: react-native and DeepBelief. Can we get up and running? Confirmed.

v0.0.2 intent was to create a sufficient UX to consider app-store submission. Can we make something worth submitting? Confirmed

Next intent is to explore the scope of a unique tech assets. Can we make something special?

## Technical Outline:

Front-end:
React-Native for native iOS app.
DeepBelief SDK for mobile image training and recognition.
Forked react-native-swiper for UI.
Forked react-native-camera for streaming camera frames to DeepBelief learning API.

Back-end:
API using node for authentication, user creation, login, user image storage.

## Technical Notes:

11/28/17

The current implementation of VoltAGE is now tightly coupled with https://github.com/nsipplswezey/react-native-camera. There seems to be some stickiness in the scoping of the linked DeepBeliefSDK and at this stage the SDK appears to need to be linked both in the main VoltAGE project, and in the fork of `react-native-camera`. This means the DeepBeliefSDK is added to the VoltAGE project as a dependency, and also appears in the `Frameworks` directory of both VoltAGE and react-native-camera, and the path to that directory is included in the `Framework Search Paths` property of both projects. This might be improved later, as ideally the dependency would only be added to `react-native-camera` and be encapsulated there.

Additionally, the DeepBeliefSDK was built without bitcode, so bitcode is now turned off in https://github.com/nsipplswezey/react-native-camera. This may be improved later by rebuilding a fork of DeepBeliefSDK.

# How it works:
User #1 creates a physical object. User #1 trains a convoluted neural net(CNN) to identify the object. User #1 can share that classifier parameters with user #2. User #2 uses their phone to positively classify the physical object shared by user #2.

In english: I give you a gift. You download the app, which downloads the parametrized CNN from the server. You point your phone at the object. The CNN recognizes the object, and logs you in with instructions.


## Future steps:
* unique gift fingerprinting (TensorFlow)

* machine learning server for consumption of physical images(C++)

* API can create users(re-evaluate based on finger printing)

* extend API to store physical object images(re-evaluating based on finger printing)
