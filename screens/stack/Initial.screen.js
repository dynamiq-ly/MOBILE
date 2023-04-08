import { Text } from 'components/export'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { InitialScreenWrapper, InitialScreenView, WelcomeView } from 'styles/initial.module'

import LottieView from 'lottie-react-native'
import { ActivityIndicator, Platform } from 'react-native'

export default function InitialScreen() {
  return (
    <InitialScreenWrapper resizeMode='cover' source={require('assets/background/welcome.png')}>
      <StatusBar style={'dark'} />
      <SafeAreaView style={{ flex: 1 }}>
        <InitialScreenView>
          <WelcomeView>
            <Text content={'utells'} size={36} weight={700} align={'center'} up={'up'} style={{ marginBottom: 14 }} />
            <Text content={'Making every stay brilliantly simple is what defines us.'} size={18} weight={400} color={'gray'} align={'center'} />
            {Platform.OS === 'ios' ? (
              <LottieView loop={true} autoPlay={true} style={{ width: 82, height: 82 }} source={require('assets/lottie/loading_animation.json')} />
            ) : (
              <ActivityIndicator color={'#121212'} />
            )}
          </WelcomeView>
        </InitialScreenView>
      </SafeAreaView>
    </InitialScreenWrapper>
  )
}
