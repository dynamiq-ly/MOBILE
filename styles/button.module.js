import styled from 'styled-components'
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
  border-radius: 18px;
  padding: 0px ${pixelSizeVertical(18)}px;
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
