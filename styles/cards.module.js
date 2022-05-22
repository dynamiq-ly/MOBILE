import styled from 'styled-components'
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'utils/normalization'

/**
 * for restaurent and bars mostly
 * the ui consist of having small in height with text in the end of view
 * while having a real background image
 */
export const WideListCard = styled.ImageBackground`
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 24px;
  height: ${heightPixel(125)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const WideListCardButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  background-color: #00000050;
  padding: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(14)}px;
`

/**
 * for renting and events mostly
 * where background is a specified color with name of card on top
 * also it have wider radius across borders with no overlay on images
 * text will wrapped into an absolute position view
 */

export const RentingWideCard = styled.TouchableOpacity`
  flex: 1;
  border-radius: 24px;
  height: ${heightPixel(200)}px;
  margin-bottom: ${pixelSizeVertical(24)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const ImageRentedVehicule = styled.Image`
  flex: 1;
`

export const AbsoluteViewRendtedCard = styled.View`
  z-index: 1;
  width: 100%;
  position: absolute;
  padding: ${pixelSizeHorizontal(5)}px 0px;
`
