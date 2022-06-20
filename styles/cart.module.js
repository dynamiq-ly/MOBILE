import styled from 'styled-components'
import { heightPixel, widthPixel } from 'utils/normalization'

export const CartView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const BadgeView = styled.View`
  top: -5%;
  left: 5%;
  z-index: 10;
  width: 100%;
  position: absolute;
  align-items: flex-end;
`

export const CartBadge = styled.View`
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  width: ${widthPixel(20)}px;
  height: ${heightPixel(20)}px;
  background: ${({ theme }) => theme.error.accent_500};
`
