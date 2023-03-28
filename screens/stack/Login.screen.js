import { useState } from 'react'
import SafeAreaView from 'utils/SafeAreaView'
import { __auth } from 'store/AuthSusbcribeProvider'
import { Button, Input, Text } from 'components/export'
import { LoginScreenContainer } from 'styles/login.module'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { InitialScreenWrapper } from '~/styles/initial.module'
import { Alert } from 'react-native'

export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const { login } = __auth()

  const handleFormChange = (binding, event) => setForm({ ...form, [binding]: event })

  return (
    <InitialScreenWrapper resizeMode='cover' source={require('assets/background/welcome.png')}>
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <LoginScreenContainer>
            <Text content={'utells'} align={'center'} weight={700} up={'up'} size={48} color={'dominant'} />
            <Input placeholder={'email'} icon={'ri-mail-line'} value={form.email} onChangeText={(text) => handleFormChange('email', text)} />
            <Input placeholder={'password'} icon={'ri-lock-line'} value={form.password} secureTextEntry={true} onChangeText={(text) => handleFormChange('password', text)} />
            <Button
              title={'login'}
              icon={'ri-fingerprint-line'}
              onPress={() => {
                if (form.email === '' && form.password === '') Alert.alert('Warning', 'please fill in your information to login.')
                else login({ ...form })
              }}
            />
            <Button fill title='skip this step' onPress={() => navigation.push('main-initial-stack')} />
          </LoginScreenContainer>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </InitialScreenWrapper>
  )
}
