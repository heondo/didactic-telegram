import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { themeSlice } from './theme/slice'
import { authSlice } from './auth/slice'
import { userImagesSlice } from './userImages/slice'

const store = configureStore({
  reducer: combineReducers({
    theme: themeSlice.reducer,
    authState: authSlice.reducer,
    userImages: userImagesSlice.reducer,
  }),
})

export default store
