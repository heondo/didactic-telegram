const nord = {
  nordNight0: '#2e3440',
  nordNight1: '#3b4252',
  nordNight2: '#434c5e',
  nordNight3: '#4c566a',
  snowStorm0: '#d8dee9',
  snowStorm1: '#e5e9f0',
  snowStorm2: '#eceff4',
  frost0: '#8fbcbb',
  frost1: '#88c0d0',
  frost2: '#81a1c1',
  frost3: '#5e81ac',

  aurora0: '#bf616a',
  aurora1: '#d08770',
  aurora2: '#ebcb8b',
  aurora3: '#a3be8c',
  aurora4: '#b48ead',
}

export const lightTheme = {
  mode: 'light',
  LOGO_COLOR: nord.frost2,
  BLACK: 'black',
  WHITE: 'white',
  LIGHT_GREY: 'lightgrey',
  GREY: 'grey',
  FACEBOOK: '#3B5998',
  PRIMARY_BACKGROUND_COLOR: '#FFFFFF',
  PRIMARY_TEXT_COLOR: '#000',
  SECONDARY_TEXT_COLOR: 'gray',
  PRIMARY_BUTTON_COLOR: '#FFCC00',
  PRIMARY_BUTTON_TEXT_COLOR: 'white',
  SECONDARY_BUTTON_COLOR: '#FFFFFF',
}

export const darkTheme = {
  ...lightTheme,
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: nord.nordNight3,
  PRIMARY_TEXT_COLOR: '#ffffff',
  SECONDARY_TEXT_COLOR: '#8E8E8E',
  PRIMARY_BUTTON_COLOR: nord.nordNight1,
  PRIMARY_BUTTON_TEXT_COLOR: 'white',
  SECONDARY_BUTTON_COLOR: '#506680',
}
