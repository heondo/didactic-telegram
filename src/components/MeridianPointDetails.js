import React, { useState } from 'react'
import { connect } from 'react-redux'
// import ImagePicker from 'react-native-image-picker'

import { Text, PointDetailsView, Image, Div } from './atoms'
import { SelectImageButton } from './molecules'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import MeridianPointsData from '../shared/data/meridian-points-data'

function MeridianPointDetails({ route, theme, userImages, authState }) {
  const { pointID } = route.params
  const [selectedImage, setSelectedImage] = useState(null)
  console.log(userImages)
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
        <Div>
          <Text>{pointID} Details</Text>
        </Div>
        {/* <EmptySpace /> */}
        {/* TODO: format the details section, what to display even. I just know that
          passing in an pointID
        */}
        {/* <Text>{JSON.stringify(MeridianPointsData[pointID])}</Text>
        {authState.loggedIn ? (
          <>
            <SelectImageButton
              pointID={pointID}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <Text>Upload an image to link this point with that memory</Text>
          </>
        ) : (
          <Text>Login to upload your own image</Text>
        )}
        {selectedImage ? (
          <>
            <Image source={selectedImage} />
            <Text>{selectedImage.data.length}</Text>
          </>
        ) : null}
        <Text>{JSON.stringify(userImages)}</Text> */}
      </PointDetailsView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState, userImages }) => {
  return {
    theme,
    authState,
    userImages,
  }
}

export default connect(mapStateToProps)(MeridianPointDetails)

MeridianPointDetails.propTypes = {
  id: PropTypes.string,
}
