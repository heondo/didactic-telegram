import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Image',
  quality: 1,
  maxWidth: 800,
  maxHeight: 800,
  allowsEditing: true,
  // storageOptions: {
  //   skipBackup: true,
  //   path: 'images',
  // },
}

export const selectImageService = {
  handleSelectImage: (callbackSetState = null) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', Object.keys(response))
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const selectedImageData = {
          uri: response.uri,
          data: response.data,
          path: response.path,
        }
        if (callbackSetState) {
          callbackSetState(selectedImageData)
          //also send back the data?
        }
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // return 'data:image/jpeg;base64,' + response.data
      }
    })
  },
}
