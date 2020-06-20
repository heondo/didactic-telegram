import { createSlice } from '@reduxjs/toolkit'
import firebaseService from '../../services/firebase'

const userImagesSlice = createSlice({
  name: 'userImages',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    startAddImage: (state, action) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    finishAddImage: (state, action) => {
      return {
        ...state,
        isLoading: false,
      }
    },
    addImageToState: (state, action) => {
      const { pointID, downloadURL } = action.payload
      return {
        ...state,
        [pointID]: downloadURL,
      }
    },
  },
})

export const {
  addImageToState,
  startAddImage,
  finishAddImage,
} = userImagesSlice.actions

export default userImagesSlice.reducer

export const thunkAddImage = (userID, pointID, filePath, fileType) => async (
  dispatch,
) => {
  // pass in the file path to the image, use the firebase API to upload and get the image url
  try {
    dispatch(startAddImage())
    const imageDownloadURL = await firebaseService.putFile(
      userID,
      pointID,
      filePath,
      fileType,
    )
    dispatch(
      addImageToState({
        pointID,
        downloadURL: imageDownloadURL,
      }),
    )
    dispatch(finishAddImage())
    // after getting the download url, upload to firestore...
  } catch (err) {
    dispatch(finishAddImage())
    console.error(err)
  }
}
