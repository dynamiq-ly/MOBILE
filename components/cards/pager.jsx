/* packages */
import PropTypes from 'prop-types'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'


/* components */
import { Image } from '@/common'

/* styles */

const { width: WIDTH_SCALE } = Dimensions.get('window')

const Pager = ({ slider = undefined, interval = 2500 }) => {
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
            <View style={{ flex: 1, height: 254 }}>
              <Image source={item.image} height='254px' />
            </View>
          )}
        />
      )}
    </View>
  )
}

Pager.propTypes = {
  slider: PropTypes.arrayOf(PropTypes.object).isRequired,
  interval: PropTypes.number,
}

export default Pager
