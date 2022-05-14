import { StatusBar } from 'expo-status-bar'
import { Button, Text } from 'components/export'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  InitialScreenWrapper,
  InitialScreenView,
  WelcomeView,
  ButtonsView,
} from 'styles/initial.module'

export default function InitialScreen({ navigation }) {
  return (
    <InitialScreenWrapper
      resizeMode='cover'
      source={require('assets/background/welcome.png')}>
      <StatusBar style={'dark'} />
      <SafeAreaView style={{ flex: 1 }}>
        <InitialScreenView>
          <WelcomeView>
            <Text
              content={'smarhotel'}
              size={52}
              weight={700}
              align={'center'}
              up={'up'}
            />
            <Text
              content={
                'Making every stay brilliantly simple is what defines us.'
              }
              size={18}
              weight={400}
              color={'gray'}
              align={'center'}
            />
          </WelcomeView>
          <ButtonsView>
            <Button
              title='get started'
              icon={'ri-shield-user-line'}
              onPress={() => navigation.navigate('login-initial-stack')}
            />
            <Button
              fill
              title='skip this step'
              icon={'ri-arrow-go-back-line'}
              onPress={() => navigation.navigate('main-initial-stack')}
            />
          </ButtonsView>
        </InitialScreenView>
      </SafeAreaView>
    </InitialScreenWrapper>
  )
}
