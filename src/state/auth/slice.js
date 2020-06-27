import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authState',
  initialState: {
    isLoading: false,
    loadingMessage: '',
    error: null,
    loggedIn: false,
    user: null,
  },
  reducers: {},
})

// export const {} = authSlice.actions

export default authSlice.reducer
