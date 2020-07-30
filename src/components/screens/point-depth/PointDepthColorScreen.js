import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { SafeAreaView, Text, Row, FlatList } from '../../atoms'
import { CircleOrIcon, ColorDetailsRow } from '../../molecules'

const PointDepthColorScreenComponent = ({ theme }) => {
  const COLOR_DATA = [
    { color: 'black', colorCode: '#000000', depth: '0.1-0.2' },
    { color: 'purple', colorCode: '#7030A0', depth: '0.2-0.3' },
    { color: 'light purple', colorCode: '#9966FF', depth: '0.2-0.4' },
    { color: 'red', colorCode: '#FF0000', depth: '0.3-0.5' },
    { color: 'pink', colorCode: '#FF33CC', depth: '0.3-0.7' },
    { color: 'light pink', colorCode: '#FF99FF', depth: '0.3-0.8' },
    { color: 'gray', colorCode: '#93CDDD', depth: '0.4-0.6' },
    { color: 'sky', colorCode: '#66FFFF', depth: '0.5-0.7' },
    { color: 'blue', colorCode: '#0070C0', depth: '0.5-0.8' },
    { color: 'green', colorCode: '#00B050', depth: '0.5-1.0' },
    { color: 'light green', colorCode: '#92D050', depth: '0.5-1.2' },
    { color: 'white', colorCode: '#F2F2F2', depth: '0.7-1.0' },
    { color: 'yellow', colorCode: '#FFFF00', depth: '0.7-1.2' },
    { color: 'brown', colorCode: '#FF9900', depth: '0.8-1.0' },
    { color: 'dark brown', colorCode: '#984807', depth: '0.8-1.2' },
    { color: 'skin color', colorCode: '#FCD5B5', depth: '0.8-1.5' },
    { color: 'deep blue', colorCode: '#0000FF', depth: '1.0-1.5' },
    { color: 'triangle', colorCode: 'triangle', depth: '1.0-2.0' },
    { color: 'square', colorCode: 'square', depth: '1.5-2.0' },
    { color: 'circle', colorCode: 'circle', depth: '1.5-2.5' },
    { color: 'x', colorCode: 'x', depth: 'no-needling' },
  ]

  return (
    <ThemeProvider theme={theme}>
      <FlatList
        data={COLOR_DATA}
        pd="6px 10px"
        renderItem={({ item }) => (
          <ColorDetailsRow
            color={item.color}
            colorCode={item.colorCode}
            depth={item.depth}
          />
        )}
        keyExtractor={(item) => item.color}
      />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDepthColorScreen = connect(mapStateToProps)(
  PointDepthColorScreenComponent,
)
