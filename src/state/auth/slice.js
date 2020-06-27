import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authState',
  initialState: {
    isLoading: false,
    error: null,
    loggedIn: false,
  },
  reducers: {},
})

// export const {} = authSlice.actions

export default authSlice.reducer
