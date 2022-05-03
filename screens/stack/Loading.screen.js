import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator } from 'react-native'
import {
  InitialScreenWrapper,
  InitialScreenView,
  WelcomeView,
} from 'styles/initial.module'

export default function InitialScreen() {
  return (
    <InitialScreenWrapper
      resizeMode='cover'
      source={require('assets/background/welcome.png')}>
      <StatusBar style={'dark'} />
      <SafeAreaView style={{ flex: 1 }}>
        <InitialScreenView>
          <WelcomeView>
            <ActivityIndicator size={'large'} color='#18181b' />
          </WelcomeView>
        </InitialScreenView>
      </SafeAreaView>
    </InitialScreenWrapper>
  )
}
