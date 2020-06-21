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
    startLoading: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    finishLoading: (state) => {
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
        loggedIn: false,
      }
    },
  },
})

export const thunkLogin = (user) => async (dispatch) => {
  try {
    dispatch(startLoading())
    dispatch(login({ user }))
    const userImages = await firebaseService.getUserImages(user.uid)
    dispatch(
      initializeImages({
        userImages,
      }),
    )
    // console.log(usersImages)
    dispatch(finishLoading())
  } catch (err) {
    console.error(err)
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

export const { login, logout, startLoading, finishLoading } = authSlice.actions
export default authSlice.reducer

// const firebaseThunkLogin = () => async (dispatch) => {
//   try {
//     const repoDetails = await firebase.login()
//     // dispatch(getRepoDetailsSuccess(repoDetails))
//   } catch (err) {
//     // dispatch(getRepoDetailsFailed(err.toString()))
//   }
// }
