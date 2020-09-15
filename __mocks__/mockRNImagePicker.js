/* eslint-disable no-undef */
jest.mock('react-native-image-picker', () => ({
  default: jest.fn(() => ({
    showImagePicker: jest.fn(),
  })),
}))
