import styled from 'styled-components'
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'utils/normalization'

export const Field = styled.View`
  width: 100%;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: ${fontPixel(48)}px;
  margin: ${pixelSizeVertical(12)}px 0px;
  padding: 0px ${pixelSizeHorizontal(10)}px;
  background: ${({ bg, theme }) =>
    bg ? theme.primary.accent_200 : theme.primary.accent_0};
`

export const StyledInput = styled.TextInput`
  flex: 1;
  height: ${fontPixel(48)}px;
  font-size: ${fontPixel(16)}px;
`

export const TextAreaField = styled.View`
  width: 100%;
  border-radius: 10px;
  flex-direction: row;
  height: ${fontPixel(200)}px;
  margin: ${pixelSizeVertical(12)}px 0px;
  padding: 0px ${pixelSizeHorizontal(10)}px;
  background: ${({ bg, theme }) =>
    bg ? theme.primary.accent_200 : theme.primary.accent_0};
`

export const StyledTextAreaInput = styled.TextInput`
  flex: 1;
  font-size: ${fontPixel(16)}px;
`
