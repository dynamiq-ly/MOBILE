/* packages */
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'

/* styles */
import { StyledLoaderContainer } from '@/common/ui/loader.ui'

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <LottieView autoPlay source={require('@/assets/lottie/loading-animation.json')} style={{ height: 60, width: 210 }} />
    </StyledLoaderContainer>
  )
}

Loader.propTypes = {}

export default Loader
