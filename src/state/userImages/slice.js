import { createSlice } from '@reduxjs/toolkit'
import firebaseService from '../../services/firebase'

const userImagesSlice = createSlice({
  name: 'userImages',
  initialState: {
    isLoading: false,
    error: null,
    images: null,
  },
  reducers: {
    imageStartLoading: (state, action) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    imageEndLoading: (state, action) => {
      return {
        ...state,
        isLoading: false,
      }
    },
    addImageToState: (state, action) => {
      const { pointID, downloadURL } = action.payload
      return {
        ...state,
        images: {
          ...state.images,
          [pointID]: {
            note: '',
            imageURL: downloadURL,
          },
        },
      }
    },
    initializeImages: (state, action) => {
      const { userImages } = action.payload
      return {
        ...state,
        images: userImages,
      }
      // I want to, grab the objects from the document....it may come back as an array. No wait.abs
    },
    setImagesNull: (state, action) => {
      return {
        ...state,
        images: null,
      }
    },
  },
})

export const {
  addImageToState,
  imageStartLoading,
  imageEndLoading,
  initializeImages,
  setImagesNull,
} = userImagesSlice.actions

export default userImagesSlice.reducer

// export const thunkGetImages = (userID) => async (dispatch) => {
//   // call the firebase thing and get the docs
//   try {
//     dispatch(imageStartLoading())
//     const images = await firebaseService.getUserImages(userID)
//     console.log('users images are: ', images)
//   } catch (err) {
//     console.error(err)
//   }
// }

export const thunkAddImage = (userID, pointID, filePath, fileType) => async (
  dispatch,
) => {
  // pass in the file path to the image, use the firebase API to upload and get the image url
  try {
    dispatch(imageStartLoading())
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
    dispatch(imageEndLoading())
    // after getting the download url, upload to firestore...
  } catch (err) {
    dispatch(imageEndLoading())
    console.error(err)
  }
}