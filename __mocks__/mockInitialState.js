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
