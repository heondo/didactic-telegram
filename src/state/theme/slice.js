import { createSlice } from '@reduxjs/toolkit'
import { lightTheme, darkTheme } from '../../shared/theme'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: lightTheme,
  reducers: {
    toggleTheme(state, action) {
      if (state.mode === 'light') {
        return darkTheme
      } else {
        return lightTheme
      }
    },
  },
})
