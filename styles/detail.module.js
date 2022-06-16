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
  margin-bottom: -75px;
  height: ${fontPixel(350)}px;
`

export const RadiusView = styled.View`
  flex: 1;
  overflow: hidden;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
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

export const HdRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`

export const HFLine = styled.View`
  height: 1px;
  width: 100%;
  margin-top: ${pixelSizeVertical(24)}px;
  margin-bottom: ${pixelSizeVertical(14)}px;
  background: ${({ theme }) => theme.primary.accent_300};
`
export const TextWrapper = styled.View`
  flex: 1;
`
