import { AppRegistry } from 'react-native';
import Nono from './src/Nono';
import {name as appName} from './app.json';

console.disableYellowBox = true;

export default Nono;

AppRegistry.registerComponent(appName, () => Nono);
