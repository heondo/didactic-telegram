import { createSlice } from '@reduxjs/toolkit'

import { initializeImages, setImagesNull } from '../userImages/slice'
import firebaseService from '../../services/firebase'

const authSlice = createSlice({
  name: 'authState',
  initialState: {
    isLoading: false,
    error: null,
    loggedIn: false,
  },
  reducers: {
    authStartLoading: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    authEndLoading: (state) => {
      return {
        ...state,
        isLoading: false,
      }
    },
    login(state, action) {
      // pass in a user object with whatever metadata i need
      const { user } = action.payload
      if (!state) {
        return user
      } else {
        return {
          ...state,
          ...user,
          loggedIn: true,
        }
      }
    },
    logout(state, action) {
      return {
        isLoading: false,
        error: null,
        loggedIn: false,
      }
    },
    setAuthError(state, action) {
      const { message } = action.payload
      return {
        ...state,
        error: message,
      }
    },
  },
})

export const thunkLogin = (user) => async (dispatch) => {
  try {
    dispatch(authStartLoading())
    dispatch(login({ user }))
    const userImages = await firebaseService.getUserImages(user.uid)
    dispatch(
      initializeImages({
        userImages,
      }),
    )
    dispatch(authEndLoading())
  } catch (err) {
    console.error(err)
    dispatch(authEndLoading())
  }
}

export const thunkLogout = () => async (dispatch) => {
  try {
    dispatch(logout())
    dispatch(setImagesNull())
  } catch (err) {
    console.error(err)
  }
}

export const {
  login,
  logout,
  authStartLoading,
  authEndLoading,
} = authSlice.actions

export default authSlice.reducer
