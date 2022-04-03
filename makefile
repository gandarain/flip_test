
# ANDROID COMMANDS
run-android:
	react-native run-android


# IOS COMMANDS
# POD Install
pod-install:
	rm -rf ios/Pods && (cd ios && pod install)

# Remove Build
ios-build-remove:
	rm -rf ios/build

# Run IOS application locally while passing on .env configuration file
run-ios:
	react-native run-ios"