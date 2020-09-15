import { configureStore, combineReducers } from '@reduxjs/toolkit'
import themeReducer from './theme/slice'
import authReducer from './auth/slice'
import userImagesReducer from './userImages/slice'

const store = configureStore({
  reducer: combineReducers({
    theme: themeReducer,
    authState: authReducer,
    userImages: userImagesReducer,
  }),
})

export default store
