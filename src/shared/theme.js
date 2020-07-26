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
  ...nord,
  mode: 'light',
  LOGO_COLOR: nord.frost2,
  BLACK: 'black',
  WHITE: 'white',
  LIGHT_GREY: 'lightgrey',
  GREY: 'grey',
  FACEBOOK: '#3B5998',
  PRIMARY_BACKGROUND_COLOR: nord.snowStorm0,
  BOTTOM_SHEET_BACKGROUND: nord.frost2,
  PRIMARY_TEXT_COLOR: nord.nordNight0,
  FADED_TEXT_COLOR: nord.nordNight2,
  ALTERNATE_TEXT_COLOR: nord.snowStorm0,
  DETAIL_BAR_COLOR: nord.snowStorm0,
  TAB_BACKGROUND: nord.aurora3,
  TAB_INDICATOR: nord.snowStorm2,
  PRIMARY_BUTTON_COLOR: nord.snowStorm1,
  SECONDARY_BUTTON_COLOR: nord.aurora0,
  PRIMARY_BUTTON_TEXT_COLOR: nord.nordNight3,
  OVERLAY_BG_COLOR: nord.snowStorm0,
  LOADING_CIRCLE_COLOR: nord.nordNight0,
}

export const darkTheme = {
  ...lightTheme,
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: nord.nordNight0,
  PRIMARY_TEXT_COLOR: nord.snowStorm2,
  FADED_TEXT_COLOR: nord.snowStorm0,
  ALTERNATE_TEXT_COLOR: nord.nordNight3,
  DETAIL_BAR_COLOR: nord.nordNight2,
  TAB_BACKGROUND: nord.frost2,
  TAB_INDICATOR: nord.snowStorm1,
  PRIMARY_BUTTON_COLOR: nord.nordNight3,
  SECONDARY_BUTTON_COLOR: nord.frost0,
  PRIMARY_BUTTON_TEXT_COLOR: nord.snowStorm2,
  BOTTOM_SHEET_BACKGROUND: nord.nordNight2,
  OVERLAY_BG_COLOR: nord.nordNight0,
  LOADING_CIRCLE_COLOR: nord.aurora3,
}
