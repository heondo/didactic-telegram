import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { themeSlice } from './theme/slice'
import { authSlice } from './auth/auth'

const store = configureStore({
  reducer: combineReducers({
    theme: themeSlice.reducer,
    authState: authSlice.reducer,
  }),
})

export default store
