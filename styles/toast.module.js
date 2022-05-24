import styled from 'styled-components'
import { Dimensions } from 'react-native'
import { animated } from '@react-spring/native'
import { heightPixel, pixelSizeVertical, widthPixel } from 'utils/normalization'

export const StyledToast = styled(animated.View)`
  top: 90%;
  z-index: 1;
  position: absolute;
  align-items: center;
  border-radius: 18px;
  justify-content: center;
  width: ${widthPixel(100)}px;
  height: ${heightPixel(42)}px;
  padding: 0px ${pixelSizeVertical(16)}px;
  background: ${({ theme }) => theme.success.accent_500};
  left: ${Dimensions.get('screen').width / 2 - widthPixel(100) / 2}px;
`
