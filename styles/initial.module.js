import styled from 'styled-components'
import { pixelSizeVertical, pixelSizeHorizontal } from 'utils/normalization'

export const InitialScreenWrapper = styled.ImageBackground`
  flex: 1;
`

export const InitialScreenView = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${pixelSizeVertical(14)}px ${pixelSizeHorizontal(14)}px;
`

export const WelcomeView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ButtonsView = styled.View``
