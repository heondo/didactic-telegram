import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authState',
  initialState: {
    loggedIn: false,
  },
  reducers: {
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

export const { login, logout } = authSlice.actions
export default authSlice.reducer

// const firebaseThunkLogin = () => async (dispatch) => {
//   try {
//     const repoDetails = await firebase.login()
//     // dispatch(getRepoDetailsSuccess(repoDetails))
//   } catch (err) {
//     // dispatch(getRepoDetailsFailed(err.toString()))
//   }
// }
