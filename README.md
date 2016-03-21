# VoltAGE v0.0.1
VOLunTary Acts of Gifting Endlessly

# Development Notes
This is a react native product for quickly capturing images of items that are intended to be gifted, then making note of whether they were gifted!

We pass images of the physical item to a convoluted nerual net, optimized for mobile, to create an identification model.

When the physical item is gifted, the reciever points their phone at the item to identify the item and document receipt.

## Technical

Front-end:
React-Native for native iOS app.
DeepBelief SDK for mobile image training and recognition.
react-native-swiper for UI.
react-native-camera extended using obj-c for DeepBelief learning interface

Back-end:
API using node for authentication, user creation, login, user image storage.

# How it works:
I create a physical object. I train a convoluted neural net(CNN) to identify the object on my phone. I store the parameterization of that CNN on the server.
I give you a gift. You download the app, which downlaods the parametrized CNN from the server. You point your phone at the object. The CNN recognizes the object, and logs you in with instructions.

## Current status:
-Deep belief prototyped on relevant objects
-react-native-camera has been extended to take video frames and pass them to the CNN
-API can create users

## Next steps:
-implement DeepBeliefSDK in extended react-native-camera
-extend API to store physical object images
