import styled from 'styled-components'
import {
  fontPixel,
  widthPixel,
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
  padding: ${pixelSizeVertical(14)}px ${pixelSizeHorizontal(10)}px;
  background: ${({ bg, theme }) =>
    bg ? theme.primary.accent_200 : theme.primary.accent_0};
`

export const StyledTextAreaInput = styled.TextInput`
  flex: 1;
  height: ${fontPixel(200)}px;
  font-size: ${fontPixel(16)}px;
`

/**
 * @description search input
 */

export const SearchField = styled.View`
  width: 100%;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: ${fontPixel(40)}px;
  margin-bottom: ${pixelSizeVertical(12)}px;
  padding: 0px ${pixelSizeHorizontal(10)}px;
  background: ${({ bg, theme }) =>
    bg ? theme.primary.accent_200 : theme.primary.accent_0};
`

export const StyledSearchInput = styled.TextInput`
  flex: 1;
  height: ${fontPixel(40)}px;
  font-size: ${fontPixel(16)}px;
`

export const DismissKeyboardButton = styled.Pressable`
  margin-left: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: ${widthPixel(20)}px;
  height: ${fontPixel(20)}px;
  background: ${({ theme }) => theme.primary.accent_300};
`
