/* packages */
import PropTypes from 'prop-types'
import { LinearGradient } from 'expo-linear-gradient'

/* components */
import { Text, Image } from '@/common'

/* styles */
import { useTheme } from 'styled-components'
import { StyledDrawerItem } from '@/style/drawer-item.style'

const Item = ({ label, icon = require('@/assets/icons/default/cube-light.png'), color = 'rgba(35, 83, 217, 0.1)', active = false, onPress }) => {
  const theme = useTheme()

  return active ? (
    <LinearGradient style={{ borderRadius: theme.units.md }} colors={[color, 'rgba(255, 255, 255, 0.00)']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
      <StyledDrawerItem onPress={onPress}>
        <Image source={icon} contentFit='contain' width='18px' height='18px' alt='utells logo' radii='none' />
        <Text t={'capitalize'} size={8.5} color='neutral'>
          {label}
        </Text>
      </StyledDrawerItem>
    </LinearGradient>
  ) : (
    <StyledDrawerItem onPress={onPress}>
      <Image source={icon} contentFit='contain' width='18px' height='18px' alt='utells logo' />
      <Text t={'capitalize'} size={8.5} color='neutral'>
        {label}
      </Text>
    </StyledDrawerItem>
  )
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.number,
  active: PropTypes.bool,
  color: PropTypes.string,
  onPress: PropTypes.func,
}

export default Item
