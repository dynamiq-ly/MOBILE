import Carousel, { Pagination } from 'react-native-x-carousel'
import { Image, StyledCarouselView } from 'styles/slider.module'

/**
 *
 * @param0 {[]} imageArray
 * @returns
 */
export default function Carsouel({ imageArray, ...rest }) {
  const interval = 5000

  return (
    <StyledCarouselView {...rest}>
      <Carousel
        loop
        autoplay
        autoplayInterval={interval}
        Pagination={Pagination}
        renderItem={(item, key) => (
          <Image key={key} source={{ uri: item.image }} />
        )}
        data={imageArray}
      />
    </StyledCarouselView>
  )
}
