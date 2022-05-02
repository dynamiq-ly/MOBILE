import styled from 'styled-components'
import { Platform, StatusBar } from 'react-native'

import {
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from 'utils/normalization'

export const SafeAreaHeader = styled.View`
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary.accent_200};
  padding-top: ${Platform.OS === 'ios'
    ? pixelSizeVertical(42)
    : StatusBar.currentHeight}px;
`

export const ViewHeader = styled.View`
  width: 100%;
  /* align-items: center; */
  justify-content: center;
  height: ${heightPixel(62)}px;
  padding: 0px ${pixelSizeHorizontal(14)}px;
`
