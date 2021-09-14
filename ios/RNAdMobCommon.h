#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <React/RCTUtils.h>

@import GoogleMobileAds;

@interface RNAdMobCommon : NSObject

+ (NSDictionary *)getCodeAndMessageFromAdError:(NSError *)error;

+ (GADAdSize)stringToAdSize:(NSString *)value;

+ (NSArray *)stringsToValues:(NSArray *)values;

+ (GAMRequest *)buildAdRequest:(NSDictionary *)requestOptions;

@end