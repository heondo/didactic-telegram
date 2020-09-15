import { darkTheme } from '../src/shared/theme'

export const defaultLoggedOutState = {
  theme: darkTheme,
  authState: {
    isLoading: false,
    loadingMessage: '',
    error: null,
    loggedIn: false,
    user: null,
  },
  userImages: {
    isLoading: false,
    loadingMessage: '',
    error: null,
    images: null,
  },
}

export const defaultLoggedInState = {
  ...defaultLoggedOutState,
  authState: {
    isLoading: false,
    loadingMessage: '',
    error: null,
    loggedIn: true,
    user: {
      displayName: 'heondo kim',
      email: 'heondo.testing@gmail.com',
      photoURL: '',
      uid: '1209381280',
      signUpDate: '2020-06-16T01:15:09.651Z',
    },
  },
  userImages: {
    isLoading: false,
    loadingMessage: '',
    error: null,
    images: {},
  },
}
