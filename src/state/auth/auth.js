import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
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
