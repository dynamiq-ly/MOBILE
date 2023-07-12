/* packages */
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'

/* components */
import Text from '@/common/Text'

/* styles */
import { shadow } from '@/util/shadow'
import { StyledButton } from '@/common/ui/button.ui'

const Button = ({ children, background = 'neutral', h = 36, shadowColor = 'main', iconLeft, iconRight, onPress }) => {
  return (
    <StyledButton activeOpacity={0.8} color={background} h={`${h}px`} onPress={onPress} style={{ ...shadow(shadowColor) }}>
      {iconLeft && <Feather name={iconLeft} size={16} color={['neutral', 'error', 'primary', 'success'].includes(background) ? '#fff' : '#111'} />}
      <Text weight={'md'} size={h === 36 ? 7 : 6} color={['neutral', 'error', 'primary', 'success'].includes(background) ? 'neutral' : 'main'} t='capitalize'>
        {children}
      </Text>
      {iconRight && <Feather name={iconRight} size={16} color={['neutral', 'error', 'primary', 'success'].includes(background) ? '#fff' : '#111'} />}
    </StyledButton>
  )
}

Button.propTypes = {
  h: PropTypes.oneOf([36, 24]),
  children: PropTypes.string.isRequired,
  background: PropTypes.oneOf(['neutral', 'primary', 'secondary', 'error', 'success', 'warning', 'info', 'tag']),
  shadowColor: PropTypes.oneOf(['main', 'sub', 'small', 'error', 'success', 'warning', 'info', 'neutral']),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onPress: PropTypes.func,
}

export default Button
