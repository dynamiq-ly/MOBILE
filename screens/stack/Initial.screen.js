import { Text } from 'components/export'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { InitialScreenWrapper, InitialScreenView, WelcomeView, ButtonsView } from 'styles/initial.module'

import LottieView from 'lottie-react-native'

export default function InitialScreen() {
  return (
    <InitialScreenWrapper resizeMode='cover' source={require('assets/background/welcome.png')}>
      <StatusBar style={'dark'} />
      <SafeAreaView style={{ flex: 1 }}>
        <InitialScreenView>
          <WelcomeView>
            <Text content={'utells'} size={52} weight={700} align={'center'} up={'up'} />
            <Text content={'Making every stay brilliantly simple is what defines us.'} size={18} weight={400} color={'gray'} align={'center'} />
            <LottieView loop={true} autoPlay={true} style={{ width: 82, height: 82 }} source={require('assets/lottie/loading_animation.json')} />
          </WelcomeView>
        </InitialScreenView>
      </SafeAreaView>
    </InitialScreenWrapper>
  )
}
