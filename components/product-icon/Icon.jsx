/* packages */
import PropTypes from 'prop-types'

/* components */
import { Image } from '@/common'

/* styles */

const Icon = ({ icon = require('@/assets/icons/default/cube-dark.png'), size = 18, onPress = () => {} }) => {
  return <Image source={icon} width={`${size}px`} height={`${size}px`} contentFit='contain' alt='icon image logo product icon' onPress={onPress} />
}

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.number,
  onPress: PropTypes.func,
}

export default Icon
