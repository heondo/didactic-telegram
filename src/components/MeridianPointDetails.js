import React, { useState } from 'react'
import { connect } from 'react-redux'
// import ImagePicker from 'react-native-image-picker'

import { Text, PointDetailsView, Image } from './atoms'
import { SelectImageButton } from './molecules'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import MeridianPointsData from '../shared/data/meridian-points-data'

function MeridianPointDetails({ route, theme }) {
  const { pointID } = route.params
  const [selectedImage, setSelectedImage] = useState(null)
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
        <SelectImageButton
          pointID={pointID}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <Text>Upload an image to link this point with that memory</Text>
        {selectedImage ? <Image source={selectedImage} /> : null}
        {selectedImage ? <Text>{selectedImage.data.length}</Text> : null}
      </PointDetailsView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export default connect(mapStateToProps)(MeridianPointDetails)

MeridianPointDetails.propTypes = {
  id: PropTypes.string,
}
