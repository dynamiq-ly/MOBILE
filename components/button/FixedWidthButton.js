import Button from './Button'
import { StyledFixedButton } from 'styles/button.module'

/**
 * @param0 {string} title
 * @param1 {boolean} active
 */

const FixedWidthButton = ({ title, active = false, func }) => {
  return (
    <StyledFixedButton>
      <Button title={title} fill={active} onPress={func} />
    </StyledFixedButton>
  )
}

export default FixedWidthButton
