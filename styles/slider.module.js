import styled from 'styled-components'
import { Dimensions } from 'react-native'
import { animated } from '@react-spring/native'
import { widthPixel, heightPixel } from 'utils/normalization'
import { animated as A } from '@react-spring/native'

export const StyledCarouselView = styled(A.View)`
  align-items: center;
  margin-bottom: -75px;
  justify-content: flex-end;
  height: ${heightPixel(350)}px;
`

export const Image = styled.ImageBackground`
  height: ${heightPixel(350)}px;
  width: ${Dimensions.get('window').width}px;
`

export const StyledCarouselIndicator = styled.View`
  position: absolute;
  flex-direction: row;
  padding-bottom: 82px;
`

export const StyledCarouselDot = styled(animated.View)`
  margin: 0px 2px;
  border-radius: 50px;
  height: ${heightPixel(8)}px;
  background: ${({ theme }) => theme.primary.accent_0};
  width: ${({ large }) => (large ? widthPixel(15) : widthPixel(8))}px;
`
