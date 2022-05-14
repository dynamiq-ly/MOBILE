import styled from 'styled-components'
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'utils/normalization'

export const WideListCard = styled.ImageBackground`
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 24px;
  height: ${heightPixel(125)}px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const WideListCardButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  background-color: #00000050;
  padding: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(14)}px; ;
`
