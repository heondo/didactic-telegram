import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    login(state, action) {
      const { email } = action.payload
      return {
        ...state,
        email,
        likes: [],
        comments: [],
      }
    },
  },
})
