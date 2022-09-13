import styled from 'styled-components'
import { fontPixel, heightPixel } from 'utils/normalization'

export const StyledText = styled.Text`
  letter-spacing: 0.25px;
  text-transform: ${({ up }) =>
    up === 'cap'
      ? 'capitalize'
      : up === 'up'
      ? 'uppercase'
      : up === 'low'
      ? 'lowercase'
      : 'none'};
  font-size: ${({ scale }) => (scale ? fontPixel(scale) : 14)}px;
  font-family: ${({ font }) => (font ? `SF_${font}` : 'SF_400')};
  color: ${({ theme, color }) => {
    switch (color) {
      case 'white':
        return theme.primary.accent_0
      case 'gray':
        return theme.primary.accent_500
      case 'dominant':
        return theme.secondary.accent_700
      case 'red':
        return theme.error.accent_500
      default:
        return theme.primary.accent_900
    }
  }};

  text-align: ${({ align }) =>
    align === 'center' ? 'center' : align === 'end' ? 'right' : 'left'};
`

export const StyledLoadFont = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.primary.accent_200};
  height: ${({ scale }) => (scale ? heightPixel(scale) : 14)}px;
`
