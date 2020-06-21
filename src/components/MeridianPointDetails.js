import React from 'react'
import { connect } from 'react-redux'

import { Text, PointDetailsView, EmptySpace } from './atoms'
import { LoggedInPointDetails } from './molecules'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

function MeridianPointDetails({ route, theme, userImages, authState }) {
  const { pointID } = route.params
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <ThemeProvider theme={theme}>
      <PointDetailsView>
        {authState.loggedIn ? (
          <LoggedInPointDetails pointID={pointID} />
        ) : (
          <Text>Not logged in View</Text>
        )}
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
        <EmptySpace />
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
