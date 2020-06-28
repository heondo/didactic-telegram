import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { GoogleSignin } from '@react-native-community/google-signin'

export const firebaseService = {
  googleLogin: async () => {
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
  getUserImages: async (userID) => {
    try {
      const userFireStoreImages = await firestore()
        .collection('images')
        .doc(userID)
        .get()
      return userFireStoreImages._data
    } catch (err) {
      console.error(err)
    }
  },
  updateNote: async (userID, pointID, note) => {
    if (!note) {
      return
    }
    try {
      await firestore()
        .collection('images')
        .doc(userID)
        .set(
          {
            [pointID]: {
              note: note,
            },
          },
          { merge: true },
        )
    } catch (err) {
      console.error()
    }
  },
  putFile: async (userID, pointID, filePath, note = '') => {
    const fileType = filePath.split('.')[filePath.split('.').length - 1]
    try {
      const reference = storage().ref(
        `images\/${userID}\/${pointID}.${fileType}`,
      )
      await reference.putFile(filePath)
      const downloadURL = await reference.getDownloadURL()
      // i have the userID, pointID, and image URL from the firebase storage...
      await firestore()
        .collection('images')
        .doc(userID)
        .set(
          {
            [pointID]: {
              note: note,
              imageURL: downloadURL,
            },
          },
          { merge: true },
        )
      return downloadURL
    } catch (err) {
      console.error(err)
    }
  },
}
