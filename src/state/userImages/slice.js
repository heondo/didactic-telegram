import { createSlice } from '@reduxjs/toolkit'

const userImagesSlice = createSlice({
  name: 'userImages',
  initialState: {
    isLoading: false,
    loadingMessage: '',
    error: null,
    images: null,
  },
  reducers: {},
})

// export const {} = userImagesSlice.actions

export default userImagesSlice.reducer
