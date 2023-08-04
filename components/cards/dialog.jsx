/*packages*/
import { View } from 'react-native'
import PropTypes from 'prop-types'

/*components*/
import Icon from '../product-icon/Icon'

/*styles*/
import { useTheme } from 'styled-components'
import { StyledCardContainer } from '@/style/card.style'

const Dialog = ({ children, icon = require('@/assets/icons/default/cube-light.png'), background = 'error', onPress }) => {
  const theme = useTheme()

  return (
    <StyledCardContainer padding direction={'row'} activeOpacity={1} onPress={onPress} style={{ gap: theme.units.sm }}>
      <View style={{ ...styling, borderRadius: 4, backgroundColor: theme.core.button[`variant_${background}`] }}>
        <Icon icon={icon} size={22} />
      </View>
      <View style={{ justifyContent: 'center', flex: 1, gap: theme.units.sm }}>{children}</View>
    </StyledCardContainer>
  )
}

Dialog.propTypes = {
  icon: PropTypes.number,
  padding: PropTypes.bool,
  background: PropTypes.oneOf(['neutral', 'primary', 'secondary', 'error', 'success', 'warning', 'info', 'tag']),
  children: PropTypes.node.isRequired,
}

const styling = {
  width: 36,
  height: 36,
  alignItems: 'center',
  justifyContent: 'center',
}

export default Dialog
