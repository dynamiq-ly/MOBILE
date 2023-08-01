/* packages */
import { View } from 'react-native'
import PropTypes from 'prop-types'

/* components */
import { Image, Text } from '@/common'

/* styles */
import { shadow } from '@/util/shadow'
import { StyledFullCard, StyledCardOverlay } from '@/style/card.style'

const FullCard = ({ title, image, h = 100, item, onPress }) => {
  return (
    <StyledFullCard style={{ ...shadow() }} activeOpacity={0.8} onPress={onPress} h={h}>
      <View style={{ position: 'absolute', width: '100%', height: h }}>
        <Image source={image} height={`${h}px`} width='100%' radii='sm' />
      </View>
      <StyledCardOverlay item={item}>
        <Text size={9} weight='md' t={'capitalize'} turncate={1} color='neutral'>
          {title}
        </Text>
      </StyledCardOverlay>
    </StyledFullCard>
  )
}

FullCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  h: PropTypes.number,
  item: PropTypes.oneOf(['start', 'center', 'end']),
}

export default FullCard
