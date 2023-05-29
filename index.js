/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screens/Login'
import Home from './src/screens/Home';
import Footer from './src/components/MainFooter'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
