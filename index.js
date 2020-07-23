/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { GoogleSignin } from '@react-native-community/google-signin'
import { environment } from './environment'

GoogleSignin.configure({
  webClientId: environment.webClientId,
})

AppRegistry.registerComponent(appName, () => App)
