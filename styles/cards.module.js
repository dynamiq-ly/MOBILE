import styled from 'styled-components'
import { animated } from '@react-spring/native'
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
  background-color: #00000050;
  justify-content: space-between;
  padding: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(14)}px;
`

export const WideCardSectionHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const WideCardTag = styled.View`
  border-radius: 5px;
  align-self: flex-end;
  background: ${({ theme }) => theme.primary.accent_700};
  padding: ${pixelSizeVertical(0)}px ${pixelSizeHorizontal(10)}px;
`

/**
 * for renting and events mostly
 * where background is a specified color with name of card on top
 * also it have wider radius across borders with no overlay on images
 * text will wrapped into an absolute position view
 */

export const RentingWideCard = styled.TouchableOpacity`
  overflow: hidden;
  border-radius: 10px;
  width: ${widthPixel(165)}px;
  height: ${heightPixel(165)}px;
  margin-top: ${pixelSizeVertical(14)}px;
`

export const ImageRentedVehicule = styled.Image`
  position: absolute;
  width: ${widthPixel(165)}px;
  height: ${heightPixel(165)}px;
`

export const AbsoluteViewRendtedCard = styled.View`
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  width: ${widthPixel(165)}px;
  height: ${heightPixel(165)}px;
  background: rgba(0, 0, 0, 0.4);
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
  margin-bottom: ${pixelSizeVertical(20)}px;
  background: ${({ theme }) => theme.primary.accent_0};
  padding: ${pixelSizeVertical(15)}px ${pixelSizeHorizontal(10)}px;
`

export const ImageSquareCard = styled.ImageBackground`
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  margin-bottom: 5px;
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
`

export const ImageSimpleCard = styled.Image`
  border-radius: 10px;
  width: ${widthPixel(132)}px;
  height: ${heightPixel(132)}px;
  margin-top: ${pixelSizeVertical(14)}px;
`

export const TextSimpleCard = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(10)}px;
`

/**
 * This card will be used mostley to describe list and items of the list
 * rectangle shape , with picture to the left, title , icons and some descriptions
 */

export const StyledDetailedCardView = styled.TouchableOpacity`
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
  justify-content: ${({ state }) => {
    switch (state) {
      case 'end':
        return 'flex-end'
      case 'center':
        return 'center'
      default:
        return 'flex-start'
    }
  }};
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
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${pixelSizeHorizontal(10)}px;
`

/**
 * ship card
 */

export const StyledShipCard = styled.View`
  width: 165px;
  overflow: hidden;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  height: ${heightPixel(68)}px;
  margin-top: ${pixelSizeVertical(14)}px;
  padding: 0px ${pixelSizeHorizontal(5)}px;
`

export const StyledShipCardImage = styled.Image`
  border-radius: 100px;
  width: ${widthPixel(48)}px;
  height: ${heightPixel(48)}px;
`

export const StyledTextCardShip = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0px ${pixelSizeHorizontal(7)}px;
`

/**
 * weather card for showing weather details
 * in pool screen and maybe other screens
 */
export const StyledWeatherCard = styled.View`
  flex: 1;
  border-radius: 10px;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.primary.accent_0};
  padding: ${pixelSizeVertical(5)}px ${pixelSizeHorizontal(18)}px;
`

export const StyledWeatherBox = styled.View`
  align-items: ${({ space }) => (space === 'end' ? 'flex-end' : 'flex-start')};
  justify-content: space-between;
  margin-bottom: ${pixelSizeVertical(10)}px;
`

export const ImageWeatherIcon = styled.Image`
  margin-top: 5px;
  margin-bottom: 5px;
  width: ${widthPixel(48)}px;
  height: ${heightPixel(48)}px;
`

/**
 * plus minus card
 */

export const StyledWrapperPlusMinusStyleCard = styled.View`
  margin-top: 15px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  width: ${widthPixel(165)}px;
  background: ${({ theme }) => theme.primary.accent_0};
  padding: ${pixelSizeVertical(0)}px ${pixelSizeHorizontal(5)}px;
`

export const StyledPlusMinusStyleCard = styled.View`
  width: 100%;
  margin-bottom: 5px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: ${heightPixel(28)}px;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const StyledPlusMinusBoxIcon = styled.TouchableOpacity`
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: ${widthPixel(24)}px;
  height: ${heightPixel(24)}px;
  background: ${({ theme }) => theme.primary.accent_300};
`

/**
 * RadioButtonCard
 */

export const RadioButtonCardStyle = styled.View`
  width: 165px;
  overflow: hidden;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  height: ${heightPixel(66)}px;
  margin-top: ${pixelSizeVertical(14)}px;
  padding: 0px ${pixelSizeHorizontal(5)}px;
  background: ${({ theme }) => theme.primary.accent_0};
  border-width: 2px;
  border-color: ${({ pressed, theme }) =>
    pressed ? theme.secondary.accent_500 : theme.primary.accent_0}; ;
`

/**
 * card amount
 */

export const StyledAmountCard = styled.View`
  border-radius: 10px;
  justify-content: space-between;
  min-height: ${heightPixel(125)}px;
  margin-bottom: ${pixelSizeVertical(14)}px;
  background: ${({ theme }) => theme.secondary.accent_500};
  padding: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(18)}px;
`

/**
 * reminder card
 */

export const StyledReminderCard = styled(animated.View)`
  border-radius: 10px;
  min-height: ${heightPixel(82)}px;
  margin-bottom: ${pixelSizeVertical(14)}px;
  background: ${({ color, theme }) =>
    color ? `${color}20` : theme.primary.accent_0};
  padding: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(18)}px;
`

/**
 * card for showing details of a room
 */

export const StyledTagCards = styled.View`
  border-radius: 10px;
  align-items: center;
  width: 23%;
  height: ${heightPixel(82)}px;
  justify-content: space-around;
  background: ${({ theme }) => theme.primary.accent_0};
  padding: ${pixelSizeVertical(5)}px ${pixelSizeHorizontal(5)}px;
`
