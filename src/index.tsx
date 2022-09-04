import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import App from './app';
import './main.css';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
	initialProps: {},
	rootTag: document.getElementById('bl-app-root'),
});
