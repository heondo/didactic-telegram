import { createSlice } from '@reduxjs/toolkit'
import { lightTheme, darkTheme } from '../../shared/theme'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: darkTheme,
  reducers: {
    toggleTheme(state, __) {
      if (state.mode === 'light') {
        return darkTheme
      } else {
        return lightTheme
      }
    },
  },
})
