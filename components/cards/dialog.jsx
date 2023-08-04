/*packages*/
import { View } from 'react-native'
import PropTypes from 'prop-types'

/*components*/
import { Icon } from '@/common'

/*styles*/
import { useTheme } from 'styled-components'
import { StyledCardContainer } from '@/style/card.style'

const Dialog = ({ children, padding = true, icon = require('@/assets/icons/default/cube-dark.png'), onPress }) => {
  const theme = useTheme()

  return (
    <StyledCardContainer direction={'row'} padding={padding} activeOpacity={0.7} onPress={onPress}>
      <View style={{ minHeight: 74 }}>
        <Icon source={icon} width='24px' />
      </View>
      <View style={{ height: '100%', gap: theme.units.sm, padding: theme.units.md }}>{children}</View>
    </StyledCardContainer>
  )
}

Dialog.propTypes = {
  padding: PropTypes.bool,
  icon: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default Dialog
