import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Image',
  //   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

const selectImageService = {
  handleSelectImage: (callbackSetState = (_) => {}) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }
        callbackSetState(source)
        // console.log(source)
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // return 'data:image/jpeg;base64,' + response.data
      }
    })
  },
}

export default selectImageService
