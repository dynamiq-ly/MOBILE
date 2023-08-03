/* packages */
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Animated from 'react-native-reanimated'

/* components */
import { Image, Text } from '@/common'

/* styles */
import { useTheme } from 'styled-components'
import { StyledCardContainer } from '@/style/card.style'
const Card = ({ children, flex = 'row', padding = true, image, onPress }) => {
  const theme = useTheme()

  return (
    <StyledCardContainer direction={flex} padding={padding} activeOpacity={0.7} onPress={onPress}>
      <View style={{ minHeight: 74 }}>
        <Image source={image} width='64px' radii={padding ? 'sm' : 'none'} />
      </View>
      <View style={{ flex: 1, height: '100%', gap: theme.units.sm, padding: theme.units.md }}>{children}</View>
    </StyledCardContainer>
  )
}

Card.propTypes = {
  flex: PropTypes.oneOf(['row', 'column']),
  padding: PropTypes.bool,

  image: PropTypes.string,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
}

export default Card
