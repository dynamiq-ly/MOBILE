import styled from 'styled-components'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import {
  pixelSizeVertical,
  pixelSizeHorizontal,
  heightPixel,
  widthPixel,
  fontPixel,
} from 'utils/normalization'

export default function ClipBoardButton({
  name,
  icon,
  password,
  color = '#8b5cf6',
  ...rest
}) {
  return (
    <StyledClipBoardButton {...rest}>
      <BoxIcon>
        <Icon name={icon} size={fontPixel(32)} color={color} />
      </BoxIcon>
      <BoxText>
        <Text content={name} weight={600} up={'cap'} size={18} />
        <Text content={password} color={'gray'} size={16} />
      </BoxText>
    </StyledClipBoardButton>
  )
}

export const StyledClipBoardButton = styled.TouchableOpacity`
  overflow: hidden;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  height: ${heightPixel(72)}px;
  margin: ${pixelSizeVertical(5)}px 0px;
  background: ${({ theme }) => theme.primary.accent_0};
`

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  width: ${widthPixel(52)}px;
  height: ${heightPixel(72)}px;
`

export const BoxText = styled.View`
  flex: 1;
  padding: ${pixelSizeVertical(10)}px ${pixelSizeHorizontal(10)}px;
`
