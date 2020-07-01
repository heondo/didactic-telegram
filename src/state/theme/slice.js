import { createSlice } from '@reduxjs/toolkit'
import { lightTheme, darkTheme } from '../../shared/theme'

const themeSlice = createSlice({
  name: 'theme',
  initialState: lightTheme,
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

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
