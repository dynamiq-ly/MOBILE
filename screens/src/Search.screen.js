import AreaView from 'utils/TabAreaView'
import LottieView from 'lottie-react-native'

export default function SearchScreen() {
  return (
    <AreaView mode={'dark'}>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{ width: '100%' }}
        source={require('assets/lottie/search_animation.json')}
      />
    </AreaView>
  )
}
