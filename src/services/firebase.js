import { utils } from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { GoogleSignin } from '@react-native-community/google-signin'

const firebaseService = {
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
  putFile: async (userID, pointID, filePath) => {
    try {
      const reference = storage().ref(`userPointImages/${userID}-${pointID}`) // TODO: Get the file type and add it
      console.log(reference, pointID, filePath)
      // const pathToFile = `${filePath}`
      // await reference.putFile(pathToFile)
    } catch (err) {
      console.error(err)
    }
  },
}

export default firebaseService
