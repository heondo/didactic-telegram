// import jest from 'jest'

/* eslint-disable no-undef */
jest.mock('@react-native-firebase/storage', () => ({
  default: jest.fn(() => ({
    ref: jest.fn(() => ({
      putFile: jest.fn(() => Promise.resolve()),
      getDownloadURL: jest.fn(() => Promise.resolve('mockImage')),
    })),
  })),
}))

jest.mock('@react-native-firebase/auth', () => ({
  default: jest.fn(() => ({
    signInWithCredential: jest.fn(),
    onAuthStateChanged: jest.fn(() => {}),
    signOut: jest.fn(),
  })),
}))

jest.mock('@react-native-firebase/firestore', () => ({
  default: jest.fn(() => ({
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        set: jest.fn(() => Promise.resolve()),
        get: jest.fn(() => Promise.resolve({})),
      })),
    })),
  })),
}))

jest.mock('@react-native-community/google-signin', () => ({
  GoogleSignIn: jest.fn(() => ({
    configure: jest.fn(),
    signIn: jest.fn(() => Promise.resolve('fake_google_id_token')),
    SIGN_IN_CANCELLED: jest.fn(),
  })),
}))
