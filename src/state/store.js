import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { themeSlice } from './theme/slice'

const store = configureStore({
  reducer: combineReducers({
    theme: themeSlice.reducer,
  }),
})

export default store
