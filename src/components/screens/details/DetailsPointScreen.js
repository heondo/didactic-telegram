import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  SafeAreaView,
  Text,
  Header,
  Row,
  HeaderText,
  EmptySpace,
  ItalicizedText,
  DetailsText,
  Image,
  InfoBar,
  View,
  MatCommIcon,
  ColorCodeCircle,
} from '../../atoms'
import MERIDIAN_POINTS_DATA from '../../../shared/data/meridianPointsData'

const DetailsPointScreenComponent = ({ navigation, pointID, theme }) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0">
        <Header>
          <Row>
            <HeaderText>{pointID}: </HeaderText>
            <HeaderText>{pointData.name}</HeaderText>
            <EmptySpace />
          </Row>
        </Header>
        <Image
          width="100%"
          height="40%"
          resizeMode="cover"
          source={require('../../../shared/images/point/LU-1.png')}
        />
        <InfoBar>
          <View alignItems="flex-start">
            <Text>{pointData.english}</Text>
            <ItalicizedText>{pointData.transliteration}</ItalicizedText>
          </View>
          <EmptySpace />
          <ColorCodeCircle color={pointData.colorCode} />
          {/* <MatCommIcon
            name="circle"
            mg="0 4px 0 0"
            color={pointData.colorCode}
          /> */}
          <MatCommIcon name="ruler-square" size={18} />
          <Text fontSize="14px" mg="0 0 0 4px">
            {pointData.depth}
          </Text>
        </InfoBar>
        <View pd="6px">
          <Row alignItems="flex-start">
            <Text mg="0 4px 0 0" textAlign="left" width="22%">
              Location:
            </Text>
            <DetailsText>{pointData.location}</DetailsText>
          </Row>
          <Row alignItems="flex-start">
            <Text mg="0 4px 0 0" textAlign="left" width="22%">
              Indications:
            </Text>
            <DetailsText>{pointData.indications}</DetailsText>
          </Row>
          <Row alignItems="flex-start">
            <Text mg="0 4px 0 0" textAlign="left" width="22%">
              Action:
            </Text>
            <DetailsText>{pointData.action}</DetailsText>
          </Row>
        </View>
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

export const DetailsPointScreen = connect(mapStateToProps)(
  DetailsPointScreenComponent,
)
