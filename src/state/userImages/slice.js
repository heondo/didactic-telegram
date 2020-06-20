import { createSlice } from '@reduxjs/toolkit'

export const userImagesSlice = createSlice({
  name: 'userImages',
  initialState: {},
  reducers: {
    addImage: (state, action) => {
      const { pointID, downloadURL } = action.payload
      return {
        ...state,
        [pointID]: downloadURL,
      }
    },
  },
})
