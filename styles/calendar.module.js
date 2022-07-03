import styled from 'styled-components'
import {
  widthPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'utils/normalization'

export const StyledCalenderbutton = styled.TouchableOpacity`
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: ${heightPixel(48)}px;
  margin-bottom: ${pixelSizeVertical(24)}px;
  padding: 0px ${pixelSizeHorizontal(10)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const PrioritRadioButton = styled.TouchableOpacity`
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  width: ${widthPixel(110)}px;
  height: ${heightPixel(48)}px;
  justify-content: space-between;
  padding: 0px ${pixelSizeHorizontal(10)}px;
  background: ${({ theme, color }) =>
    color ? `${color}10` : theme.primary.accent_0};
  border-width: 2px;
  border-color: ${({ theme, color }) =>
    color ? color : theme.primary.accent_0};
`
