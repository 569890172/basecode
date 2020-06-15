/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { createAppContainer} from 'react-navigation';
import {AppStackNavigator} from './navigators/AppNavigators';
import {name as appName} from './app.json';




// 禁用黄色警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true;

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);


/**
 * 新增Navigation
 */
// import { Navigation } from 'react-native-navigation';
// import App from './App';

// Navigation.registerComponent('base_code',()=>App);
// Navigation.events().registerAppLaunchedListener(()=>{
//     Navigation.setRoot({
//         root:{
//             stack:{
//                 children:[{
//                     component:{
//                         name:'base_code'
//                     }
//                 }]
//             }
//         }
//     })
// });