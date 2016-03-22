//
//  RCTDeepMindManager.m
//  VoltAGE
//
//  Created by Nicolas Sippl-Swezey on 3/16/16.
//  Copyright © 2016. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTDeepMindManager.h"
#import "RCTLog.h"
#import "RCTUtils.h"

#import "SquareCamViewController.h"


//@interface RCTDeepMindManager() <CNContactPickerDelegate, CNContactViewControllerDelegate>
//I have no idea what to put here... Because this Picker and View controller delegate thing I don't understand
//@interface RCTDeepMindManager() <CNContactPickerDelegate, CNContactViewControllerDelegate>
//
//@end


@implementation RCTDeepMindManager
{
  NSMutableArray<RCTResponseSenderBlock> *_callbacks;
  
};

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(openDeepMindLearner:(NSDictionary *)args
                  callback:(RCTResponseSenderBlock)callback)
{
  
  UIViewController *presentingController = RCTKeyWindow().rootViewController;
  if(presentingController == nil) {
    RCTLogError(@"Tried to display Deep Mind, but there is no application window. args:%@",args);
  }
  
  // Walk the chain to the topmost model view controller.
  while(presentingController.presentedViewController) {
    presentingController = presentingController.presentedViewController;
  }
  
  //Import the SquareCamViewController class? Which might just be the fucking header right?
  //But it has all these gnarly dependencies... So I have to make sure I bring everything over.
  //So it turns out it's not a reimplementation I guess. Not yet at least.
  //Or maybe instead of copy pasting I reimplement... Just to fucking try this? Wow.
  //Sure why not.
  
  SquareCamViewController *camViewController = [SquareCamViewController new];
//  camViewController.delegate = self;
  [presentingController presentViewController:camViewController animated:NO completion:nil];
  
  
  
  
  
//  CNContactPickerViewController *contactPickerController = [CNContactPickerViewController new];
////  
////  NSArray *displayedItems = @[CNContactPhoneNumbersKey,CNContactEmailAddressesKey,CNContactBirthdayKey];
////  contactPickerController.delegate = self;
////  contactPickerController.displayedPropertyKeys = displayedItems;
////  
////  [presentingController presentViewController:contactPickerController animated:YES completion:nil];
  
  callback(@[@"hello"]);
  
}

@end
