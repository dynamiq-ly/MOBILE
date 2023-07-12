/* packages */
import PropTypes from 'prop-types'

/* styles */
import { StyledText } from '@/common/ui/text.ui'

const Text = ({ children, weight = 'rg', turncate = 0, color = 'main', align = 'left', size = 6, t = undefined, line = undefined }) => {
  return (
    <StyledText numberOfLines={turncate} family={weight} color={color} align={align} size={size} t={t} line={line}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  size: PropTypes.number,
  turncate: PropTypes.number,
  children: PropTypes.string.isRequired,
  weight: PropTypes.oneOf(['lg', 'rg', 'md', 'bd']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  t: PropTypes.oneOf([undefined, 'capitalize', 'uppercase', 'lowercase']),
  color: PropTypes.oneOf(['main', 'sub', 'small', 'error', 'success', 'warning', 'info', 'neutral']),
  line: PropTypes.number,
}

export default Text
