import styled from 'styled-components'
import { widthPixel, heightPixel } from 'utils/normalization'

export const IsPressable = styled.Pressable`
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  width: ${widthPixel(24)}px;
  height: ${heightPixel(24)}px;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.secondary.accent_500 : theme.primary.accent_200};
`
