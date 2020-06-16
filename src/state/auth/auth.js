import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    login(state, action) {
      const { user } = action.payload
      if (!state) return user
      else {
        return {
          ...state,
          ...user,
        }
      }
    },
    logout(state, action) {
      return {}
    },
  },
})
