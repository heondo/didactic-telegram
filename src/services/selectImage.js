import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Image',
  quality: 0.9,
  maxWidth: 700,
  maxHeight: 500,
  allowsEditing: true,
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

const selectImageService = {}

export default selectImageService
