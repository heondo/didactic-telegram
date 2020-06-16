import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    login(state, action) {
      const { user } = action.payload
      return {}
    },
  },
})