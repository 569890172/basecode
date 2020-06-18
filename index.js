/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import AppStackNavigatorContainer from './DemoCode/navigators/AppNavigators';
import { name as appName } from './app.json';

// 禁用黄色警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
