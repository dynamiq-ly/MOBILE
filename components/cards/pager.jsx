/* packages */
import PropTypes from 'prop-types'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import Animated from 'react-native-reanimated'

/* components */
import { Image } from '@/common'

/* styles */

const { width: WIDTH_SCALE } = Dimensions.get('window')

const Pager = ({ slider = undefined, interval = 2500, sharedElementId = 'shared' }) => {
  return (
    <View style={{ flex: 1 }}>
      {slider && (
        <Carousel
          loop
          autoPlay={true}
          width={WIDTH_SCALE}
          height={254}
          data={slider}
          autoPlayInterval={interval}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <Animated.View style={{ flex: 1, height: 254 }} sharedTransitionTag={sharedElementId}>
              <Image source={item.image} height='254px' />
            </Animated.View>
          )}
        />
      )}
    </View>
  )
}

Pager.propTypes = {
  slider: PropTypes.arrayOf(PropTypes.object).isRequired,
  interval: PropTypes.number,
  sharedElementId: PropTypes.string,
}

export default Pager
