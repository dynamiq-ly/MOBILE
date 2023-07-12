/* packages */
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'

/* styles */
import { StyledIconly } from './ui/iconly.ui'
import { shadow } from '@/util/shadow'

const Iconly = ({ name = 'box', background = undefined, onPress }) => {
  return (
    <StyledIconly activeOpacity={0.7} style={background && { ...shadow() }} color={background} onPress={onPress}>
      <Feather name={name} size={18} color={['neutral', 'error', 'primary', 'success'].includes(background) ? '#fff' : '#111'} />
    </StyledIconly>
  )
}

Iconly.propTypes = {
  name: PropTypes.string.isRequired,
  background: PropTypes.oneOf([undefined, 'neutral', 'primary', 'secondary', 'error', 'success', 'warning', 'info', 'tag']),
  onPress: PropTypes.func,
}

export default Iconly
