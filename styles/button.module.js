import styled from 'styled-components'
import { animated } from '@react-spring/native'
import { widthPixel, heightPixel, pixelSizeVertical } from 'utils/normalization'

export const StyledButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: ${heightPixel(48)}px;
  margin: ${pixelSizeVertical(12)}px 0px;
  background: ${({ theme, bg }) =>
    !bg ? theme.primary.accent_900 : 'transparent'};
`

// button group

export const GroupsBtn = styled.View`
  overflow: hidden;
  border-radius: 10px;
  padding: 0px ${pixelSizeVertical(10)}px;
  margin-bottom: ${pixelSizeVertical(24)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const ButtonItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${heightPixel(48)}px;
`

export const IconBox = styled.View`
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  width: ${widthPixel(35)}px;
  height: ${heightPixel(35)}px;
  background: ${({ color, theme }) =>
    color ? `${color}` : theme.secondary.accent_500};
`

export const TextBox = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px ${pixelSizeVertical(12)}px;
`

export const Divider = styled.View`
  height: 1px;
  background: ${({ theme }) => theme.primary.accent_200};
`
// FixedWidthButton

export const StyledFixedButton = styled.TouchableOpacity`
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: ${widthPixel(100)}px;
  height: ${heightPixel(38)}px;
  background: ${({ theme, bg }) =>
    !bg ? theme.primary.accent_900 : 'transparent'};
`

// expandable button

export const StyledExpandableView = styled(animated.View)`
  border-radius: 10px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const StyledExpandable = styled.TouchableOpacity`
  overflow: hidden;
  border-radius: 10px;
  min-height: ${heightPixel(48)}px;
  padding: 0px ${pixelSizeVertical(10)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const StyledExpandableText = styled.View`
  flex: 1;
  justify-content: center;
  height: ${heightPixel(48)}px;
`

export const StyledExpandableButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${heightPixel(48)}px;
`

export const BookButton = styled.TouchableOpacity`
  margin: 0px 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: ${widthPixel(52)}px;
  height: ${heightPixel(32)}px;
  background: ${({ theme }) => theme.primary.accent_900};
`
