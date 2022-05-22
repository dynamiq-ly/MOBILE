import styled from 'styled-components'
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  fontPixel,
  widthPixel,
  heightPixel,
} from 'utils/normalization'

export const View = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary.accent_100};
`

export const Image = styled.Image`
  width: 100%;
  height: ${fontPixel(250)}px;
`

export const ButtonWrapperDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${pixelSizeHorizontal(14)}px;
`

export const SafeAreaRowWrapperDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonRoute = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  height: ${heightPixel(64)}px;
  justify-content: space-between;
  margin-top: ${pixelSizeVertical(12)}px;
  padding: 0px ${pixelSizeVertical(10)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const IconBox = styled.View`
  overflow: hidden;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
  width: ${widthPixel(52)}px;
  height: ${heightPixel(52)}px;
`

export const TextBox = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px ${pixelSizeVertical(12)}px;
`
