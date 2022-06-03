import styled from 'styled-components'
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
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
/**
 * for bars and food in room service
 * a card with a lesser height for showing mini bar item
 */

export const MiniCard = styled.TouchableOpacity`
  flex: 1;
  overflow: hidden;
  border-width: 2px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: ${heightPixel(64)}px;
  margin-bottom: ${pixelSizeVertical(24)}px;
  background: ${({ theme }) => theme.primary.accent_0};
  border-color: ${({ pressed, theme }) =>
    pressed ? theme.secondary.accent_500 : theme.primary.accent_0};
`

export const ContentViewMinCard = styled.View`
  flex: 1;
  padding: 0px ${pixelSizeHorizontal(10)}px;
`

export const CheckBoxView = styled.View`
  padding: 0px ${pixelSizeHorizontal(10)}px;
`

/**
 * square card for favorite and grid display
 * a card with a equal height and width
 */

export const StyledSquareCard = styled.TouchableOpacity`
  overflow: hidden;
  border-radius: 10px;
  width: ${widthPixel(165)}px;
  min-height: ${heightPixel(200)}px;
  margin-bottom: ${pixelSizeVertical(14)}px;
  background: ${({ theme }) => theme.primary.accent_0};
  padding: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(10)}px;
`

export const ImageSquareCard = styled.ImageBackground`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  height: ${heightPixel(132)}px;
`

export const OverlaySquareCard = styled.View`
  flex: 1;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.3);
  padding: ${pixelSizeVertical(5)}px ${pixelSizeHorizontal(5)}px;
`

export const ViewBetween = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const TextLoactationView = styled.View`
  flex: 1;
  width: 80%;
  flex-direction: row;
  align-items: flex-start;
`

/**
 * for displaying a card with no action taken
 * minimal look and feel
 * takes half the screen
 */

export const StyledSimpleCard = styled.TouchableOpacity`
  overflow: hidden;
  border-radius: 10px;
  align-items: center;
  width: ${widthPixel(165)}px;
  margin-bottom: ${pixelSizeVertical(14)}px;
  background: ${({ theme }) => theme.primary.accent_0};
  padding: ${pixelSizeVertical(14)}px ${pixelSizeHorizontal(10)}px;
`

export const ImageSimpleCard = styled.Image`
  border-radius: 10px;
  width: ${widthPixel(132)}px;
  height: ${heightPixel(132)}px;
`

export const TextSimpleCard = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: ${heightPixel(32)}px;
`

/**
 * This card will be used mostley to describe list and items of the list
 * rectangle shape , with picture to the left, title , icons and some descriptions
 */

export const StyledDetailedCardView = styled.View`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: row;
  height: ${heightPixel(100)}px;
  margin-bottom: ${pixelSizeVertical(14)}px;
  background-color: ${({ theme }) => theme.primary.accent_0};
`
export const DetailedCardImage = styled.Image`
  width: ${widthPixel(100)}px;
  height: ${heightPixel(100)}px;
`
export const RowDetailedCardContent = styled.View`
  flex: 1;
  flex-direction: column;
  padding: ${pixelSizeVertical(5)}px ${pixelSizeHorizontal(5)}px;
`

export const TitleDetailedCardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

/**
 * a card for half the size of screen
 * full image and text on top an overlay
 */

export const StyledCardWrapper = styled.View`
  height: ${heightPixel(232)}px;
  justify-content: ${({ position }) =>
    position === 'end' ? 'flex-end' : 'flex-start'};
`

export const StyledFullImageCard = styled.ImageBackground`
  overflow: hidden;
  border-radius: 10px;
  width: ${widthPixel(165)}px;
  height: ${heightPixel(200)}px;
  margin-bottom: ${pixelSizeVertical(14)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const StyledFullImageClickable = styled.TouchableOpacity`
  flex: 1;
  background: red;
  background: rgba(0, 0, 0, 0.3);
  justify-content: flex-end;
  padding: ${pixelSizeVertical(14)}px ${pixelSizeHorizontal(10)}px;
`

/**
 * full detailed card with flex as column
 * images in top and detilas down
 * mainly to show bigger shows
 */

export const StyledFullDetailedCard = styled.TouchableOpacity`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  height: ${heightPixel(182)}px;
  margin-bottom: ${pixelSizeVertical(24)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const StyledFullDetailedCardImage = styled.Image`
  width: 100%;
  height: ${heightPixel(142)}px;
`

export const StyledFullDetailedCardContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${pixelSizeHorizontal(10)}px;
`
