import styled from 'styled-components'
import { fontPixel, heightPixel, pixelSizeVertical } from 'utils/normalization'

export const StyledText = styled.Text`
  letter-spacing: 0.25px;
  margin: ${pixelSizeVertical(5)}px 0px;
  text-transform: ${({ up }) =>
    up === 'cap' ? 'capitalize' : up === 'up' ? 'uppercase' : 'lowercase'};
  font-size: ${({ scale }) => (scale ? fontPixel(scale) : 14)}px;
  font-family: ${({ font }) => (font ? `inter-${font}` : 'inter-400')};
  color: ${({ theme, color }) =>
    color === 'white'
      ? theme.primary.accent_0
      : color === 'gray'
      ? theme.primary.accent_500
      : color === 'dominant'
      ? theme.secondary.accent_500
      : // default color
        theme.primary.accent_900};

  text-align: ${({ align }) =>
    align === 'center' ? 'center' : align === 'end' ? 'right' : 'left'};
`

export const StyledLoadFont = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.primary.accent_200};
  height: ${({ scale }) => (scale ? heightPixel(scale) : 14)}px;
`
