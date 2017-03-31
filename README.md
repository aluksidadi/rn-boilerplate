# rn-boilerplate

1. Follow guide on how to setup Android/IOS https://facebook.github.io/react-native/docs/getting-started.html 
2. `$ npm install`
3. `$ react-native run-android`

## Whats this boilerplate includes
1. Login page
2. Authentication flow
3. Using AsyncStorage to store session
4. Drawer (side menu)
5. Routing
6. API mock
7. Splash screen

## Using new react native container
1. Create new react native project
```
$ react-native init <project-name>
$ cd <project-name>
```
2. Copy the whole src folders
```
$ cp -R <rn-boilerplate-dir>/src .
```
3. Copy index.android.js and index.ios.js
```
$ cp <rn-boilerplate-dir>/index.android.js .
$ cp <rn-boilerplate-dir>/index.ios.js .
```
Note: Edit both file and rename the project name
4. Add required dependencies
```
$ npm install --save react-native-drawer
$ npm install --save react-native-router-flux
$ npm install --save react-native-snackbar
$ npm install --save react-redux
$ npm install --save redux
$ npm install --save redux-logger
$ npm install --save redux-thunk
$ npm install --save react-native-vector-icons
```
5. Link
```
$ react-native link
```
6. Run
```
$ react-native run-android
```