import styled from 'styled-components'
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  fontPixel,
} from 'utils/normalization'

export const View = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary.accent_100};
`

export const Image = styled.Image`
  width: 100%;
  height: ${fontPixel(275)}px;
`

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.primary.accent_0};
`
export const HeadingWrapper = styled.View`
  padding: ${pixelSizeVertical(14)}px ${pixelSizeHorizontal(14)}px;
`
