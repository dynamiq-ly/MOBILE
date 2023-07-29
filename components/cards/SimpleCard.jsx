/* packages */
import PropTypes from 'prop-types'

/* components */
import { Image, Text } from '@/common'

/* styles */
import { shadow } from '@/util/shadow'
import { StyledSimpleCard } from '@/style/card.style'

const SimpleCard = ({ title, image, onPress }) => {
  return (
    <StyledSimpleCard style={{ ...shadow() }} activeOpacity={0.8} onPress={onPress}>
      <Image source={image} height={'82px'} radii='sm' />
      <Text size={7} weight='md' t={'capitalize'} turncate={1}>
        {title}
      </Text>
    </StyledSimpleCard>
  )
}

SimpleCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

export default SimpleCard
