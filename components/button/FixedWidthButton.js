import Text from 'components/text/Text'
import { StyledButton, StyledFixedButton } from 'styles/button.module'

/**
 * @param0 {string} title
 * @param1 {boolean} active
 */

const FixedWidthButton = ({ title, active = false, func }) => {
  return (
    <StyledFixedButton bg={active} activeOpacity={0.9} onPress={func}>
      <Text
        content={title}
        color={!active && 'white'}
        align={'center'}
        weight={600}
        up={'cap'}
        size={14}
      />
    </StyledFixedButton>
  )
}

export default FixedWidthButton
