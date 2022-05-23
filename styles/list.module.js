import styled from 'styled-components'
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from 'utils/normalization'

export const PhoneDirectoryRow = styled.View`
  border-radius: 10px;
  flex-direction: row;
  margin-top: ${pixelSizeVertical(10)}px;
  margin-bottom: ${pixelSizeVertical(10)}px;
  padding: ${pixelSizeVertical(5)}px ${pixelSizeHorizontal(5)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const BoxIcon = styled.View`
  width: ${widthPixel(32)}px;
  margin: ${pixelSizeVertical(5)}px 0px;
`

export const BoxText = styled.View`
  flex: 1;
`
