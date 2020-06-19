import React from 'react'
import { connect } from 'react-redux'
// import ImagePicker from 'react-native-image-picker'

import { Text, PointDetailsView, Image } from './atoms'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import MeridianPointsData from '../shared/data/meridian-points-data'

// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// }

// /**
//  * The first arg is the options object for customization (it can also be null or omitted for default options),
//  * The second arg is the callback which sends object: response (more info in the API Reference)
//  */
// ImagePicker.showImagePicker(options, (response) => {
//   console.log('Response = ', response)

//   if (response.didCancel) {
//     console.log('User cancelled image picker')
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error)
//   } else if (response.customButton) {
//     console.log('User tapped custom button: ', response.customButton)
//   } else {
//     const source = { uri: response.uri }

//     // You can also display the image using data:
//     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//     this.setState({
//       avatarSource: source,
//     })
//   }
// })

function MeridianPointDetails({ route, theme }) {
  const { pointID } = route.params
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <ThemeProvider theme={theme}>
      <PointDetailsView>
        <Image
          source={{
            uri:
              'https://www.herbalshop.com/wp-content/uploads/2015/02/lu1.png',
          }}
          mg="0 0 6px 0"
        />
        {/* <EmptySpace /> */}
        {/* TODO: format the details section, what to display even. I just know that
          passing in an pointID 
        */}
        <Text>{JSON.stringify(MeridianPointsData[pointID])}</Text>
      </PointDetailsView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianPointDetails)

MeridianPointDetails.propTypes = {
  id: PropTypes.string,
}
