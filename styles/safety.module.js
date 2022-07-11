import styled from 'styled-components'
import { widthPixel, heightPixel, pixelSizeVertical } from 'utils/normalization'

export const ButtonSafety = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  height: ${heightPixel(48)}px;
  justify-content: space-between;
  padding: 0px ${pixelSizeVertical(10)}px;
  margin-bottom: ${pixelSizeVertical(14)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const IconBox = styled.View`
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  width: ${widthPixel(35)}px;
  height: ${heightPixel(35)}px;
  background: ${({ bg, theme }) => (bg ? bg : theme.success.accent_500)};
`

export const TextBox = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px ${pixelSizeVertical(12)}px;
`
