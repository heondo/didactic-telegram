import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import {
  SafeAreaView,
  Text,
  Header,
  Row,
  HeaderText,
  EmptySpace,
  DetailsText,
  Image,
  InfoBar,
  ScrollView,
} from '../../atoms'
import { CircleOrIcon } from '../../molecules'
import MERIDIAN_POINTS_DATA from '../../../shared/data/meridianPointsData'

const DetailsPointScreenComponent = ({
  pointID,
  navigateToPhotosPoint,
  theme,
}) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0">
        <Header>
          <Row>
            <HeaderText>{pointID}: </HeaderText>
            <HeaderText>{pointData.name} </HeaderText>
            <HeaderText>{pointData.transliteration}</HeaderText>
            <EmptySpace />
          </Row>
        </Header>
        <Image
          width="100%"
          height="40%"
          resizeMode="contain"
          source={pointData.image}
        />
        <InfoBar>
          <Text fontSize="22px">{pointData.english}</Text>
          <EmptySpace />
          <CircleOrIcon
            size={16}
            colorCode={pointData.colorCode}
            margin="0 4px 0 0"
          />
          <Text mg="0 0 0 4px" fontSize="18px">
            {pointData.depth}
          </Text>
        </InfoBar>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          pd="6px">
          <Row alignItems="flex-start">
            <Text fontSize="18px" mg="0 4px 0 0" textAlign="left" width="25%">
              Location:
            </Text>
            <DetailsText>{pointData.location}</DetailsText>
          </Row>
          <Row alignItems="flex-start" mg="8px 0">
            <Text fontSize="18px" mg="0 4px 0 0" textAlign="left" width="25%">
              Indications:
            </Text>
            <DetailsText>{pointData.indications}</DetailsText>
          </Row>
          <Row pd="0 0 12px 0" alignItems="flex-start">
            <Text fontSize="18px" mg="0 4px 0 0" textAlign="left" width="25%">
              Action:
            </Text>
            <DetailsText>{pointData.action}</DetailsText>
          </Row>
        </ScrollView>
        <EmptySpace />
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

DetailsPointScreenComponent.propTypes = {
  pointID: PropTypes.string,
}

export const DetailsPointScreen = connect(mapStateToProps)(
  DetailsPointScreenComponent,
)
