import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    login(state, action) {
      const { user } = action.payload
      return {
        ...state,
        ...user,
      }
    },
    logout(state, action) {
      return {}
    },
  },
})
