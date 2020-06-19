import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin'

const firebase = {
  login: async () => {
    try {
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      return auth().signInWithCredential(googleCredential)
    } catch (err) {
      console.error(err)
    }
  },
  logout: async () => {
    try {
      await auth().signOut()
    } catch (err) {
      console.error(err)
    }
  },
}

export default firebase
