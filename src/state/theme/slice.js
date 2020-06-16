import { createSlice } from '@reduxjs/toolkit'
import { lightTheme, darkTheme } from '../../shared/theme'

export const themeSlice = createSlice({
  name: 'todos',
  initialState: darkTheme,
  reducers: {
    toggleTheme(state, action) {
      if (state.mode === 'light') {
        state = darkTheme
      } else {
        state = lightTheme
      }
    },
  },
})
