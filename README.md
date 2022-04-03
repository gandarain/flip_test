# Flip Test - Software 

## Generate a new project
- `react-native init project_name --template react-native-template-typescript`
- Somehow it will error, but it's fine.
- Add this dependency,
  - `yarn add @types/react`
  - `yarn add @types/react-native`
  - `yarn add typescript`
- Change `App.js` to `App.tsx`.

## Setup makefile
- Create a new file `makefile`.
- Add some command like `eslint . --cache && tsc --build`, and call it `pre-commit`.
- Use that command on the `package.json`.
- Run `yarn pre-commit`.

## Add font family
- Add font on `src/Assets/Fonts`.
- Create a new file `react-native.config.js`.
- Add this code on `react-native.config.js`.
````
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/Assets/Fonts'], // stays the same
};
Add this code on package.json
"rnpm": {
  "assets": [
    "./src/Assets/Fonts"
  ]
}
````
- Run `npx react-native link`.

## Add react native vector icons
- `yarn add react-native-vector-icons`.
- `yarn add @types/react-native-vector-icons`.
- Copy the icon from `node_modules/react-native-vector-icons/Fonts` to `src/Assets/Icons`.
- Add `./src/Assets/Icons` inside assets on `react-native.config.js`.
- Your `react-native.config.js` should be like this now,
````
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/Assets/Fonts', './src/Assets/Icons'], // stays the same
};
````
- Add `./src/Assets/Icons` inside `rnpm.assets` on `package.json`.
- Your `rnpm` on `package.json` should be like this now,
````
"rnpm": {
  "assets": [
    "./src/Assets/Fonts",
    "./src/Assets/Icons"
  ]
}
````
- Run `react-native link`.

### It will error while run on ios
- Open project with xcode cd `ios/open project-name.xcworkspace`.
- Remove icons, open `Build Phases`, remove icons from `Copy Bundle Resources`.

## Setup CI/CD
This is basic ci/cd, to run `lint and type check` when there is a pull request to `master`.
- Create a new folder `.github/workflows`  file `ci.yml`.
- Just copy paste the `ci.yml`.

## How to run
- Clone this repository.
- `yarn install && yarn pod-install`.
- `yarn start` then `yarn ios` or `yarn android`.

## Troubleshooting
### Error while using JVM 1.8 on android
If you got an error like the code below while running on the android, it's because you run it on the JVM 1.8, you have to upgrade your JVM via android studio to JVM 11.
You can find how to downgrade it on this link below.

https://stackoverflow.com/questions/66980512/android-studio-error-android-gradle-plugin-requires-java-11-to-run-you-are-cur

```
> Failed to apply plugin 'com.android.internal.application'.
> Android Gradle plugin requires Java 11 to run. You are currently using Java 1.8.
You can try some of the following options:
- changing the IDE settings.
- changing the JAVA_HOME environment variable.
- changing `org.gradle.java.home` in `gradle.properties`.
```
