import styled from 'styled-components'
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from 'utils/normalization'

/**
 * phone directory
 */
export const PhoneDirectoryRow = styled.View`
  border-radius: 10px;
  flex-direction: row;
  margin-top: ${pixelSizeVertical(10)}px;
  margin-bottom: ${pixelSizeVertical(10)}px;
  padding: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(10)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const BoxIcon = styled.View`
  width: ${widthPixel(32)}px;
  margin: ${pixelSizeVertical(5)}px 0px;
`

export const BoxText = styled.View`
  flex: 1;
`

/**
 * laundry
 */

export const StyledLaundryRow = styled.View`
  border-radius: 10px;
  margin-top: ${pixelSizeVertical(10)}px;
  margin-bottom: ${pixelSizeVertical(10)}px;
  background: ${({ theme }) => theme.primary.accent_0};
  padding: ${pixelSizeVertical(5)}px ${pixelSizeHorizontal(10)}px;
`

export const SpaceBetweenRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Line = styled.View`
  height: 1px;
  background: ${({ theme }) => theme.primary.accent_300};
`

/**
 * vertical simple list
 */

export const VerticalList = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${pixelSizeVertical(15)}px;
`

export const VerticalListItem = styled.TouchableOpacity`
  height: 42px;
  align-items: center;
  justify-content: center;
`

export const VerticalListLine = styled.View`
  width: 1px;
  height: 32px;
  background: ${({ theme }) => theme.primary.accent_300};
  margin: ${pixelSizeVertical(0)}px ${pixelSizeHorizontal(10)}px;
`
