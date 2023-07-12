import styled from 'styled-components'
import { Image } from 'expo-image'

export const StyledImageView = styled.View`
  align-items: center;
  justify-content: center;
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  border-radius: ${({ theme, radii = 'md' }) => theme.radius[radii] || '0px'};
  overflow: hidden;
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`
