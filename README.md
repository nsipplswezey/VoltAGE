# VoltAGE v0.0.2
VOLunTary Acts of Gifting Endlessly

# Objective
This is a react native product for quickly capturing images of items that are intended to be gifted, then making note of whether they were gifted!

We pass images of the physical item to a convoluted nerual net, optimized for mobile, to create an identification model.

When the physical item is gifted, the reciever points their phone at the item to identify the item and document receipt.

## Current status:
v0.0.2 milestones
* react-native-camera extended to stream frames to CNN √

* implement DeepBeliefSDK in extended react-native-camera √

* Deep belief trained on relevant object set √

* Zero touch UI reacts to camera targets √

## Next steps:
v0.0.3 milestones
* unique gift fingerprinting (TensorFlow)

* machine learning server for consumption of physical images(C++)

* API can create users(re-evaluate based on finger printing)

* extend API to store physical object images(re-evaluating based on finger printing)

## Selected Dev Notes + Rationale:
v0.0.1 intent was test of critical technologies: react-native and DeepBelief. Can we get up and running? Confirmed.

v0.0.2 intent was to create a sufficient UX to consider app-store submission. Can we make something worth submitting? Confirmed

v0.0.3 intent is to explore the scope of a unique tech assets. Can we make something special?

Why aren't you building a backend simultenously with the front end from day 1?
Two reasons:

* The separation of concerns between client and server is still blurry. I've been startled by how much numerically-intensive work can run client side without UX impact; specifically, at this point, all of it...
* The definition of relevant data to pass to the server is still blurry. It is possible that the application could [stream images in real time to the server using a similar approach to parascope or snapchat](https://github.com/QuickBlox/quickblox-ios-sdk) mobile camera streaming. While that sounds cool, it may not be useful. At this point we don't know. It may be reasonable for the user/server to simply send parameterization object to the user/server as necessary.

Conclusion: Defining the unique tech asset will likely be the watershed moment for defining the scope of the back end. It'll take a little more work to get there. But we will.

## Technical:

Front-end:
React-Native for native iOS app.
DeepBelief SDK for mobile image training and recognition.
Forked react-native-swiper for UI.
Forked react-native-camera for streaming camera frames to DeepBelief learning API.

Back-end:
Currently under re-evaluation.
API using node for authentication, user creation, login, user image storage.

# How it works:
In flow chart-ese: User #1 creates a physical object. User #1 trains a convoluted neural net(CNN) to identify the object. User #1 can share that classifier parameters with user #2. User #2 uses their phone to positively classify the physical object shared by user #2.

In english: I give you a gift. You download the app, which downloads the parametrized CNN from the server. You point your phone at the object. The CNN recognizes the object, and logs you in with instructions.
