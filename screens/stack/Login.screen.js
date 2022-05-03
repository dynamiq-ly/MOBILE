import { useState } from 'react'
import SafeAreaView from 'utils/SafeAreaView'
import { Button, Input, Text } from 'components/export'
import { LoginScreenContainer } from 'styles/login.module'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleFormChange = (binding, event) => {
    setForm({ ...form, [binding]: event })
  }

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <LoginScreenContainer>
          <Text
            content={'SMARHOTEL'}
            align={'center'}
            weight={700}
            up={'up'}
            size={48}
          />
          <Text />
          <Input
            placeholder={'email'}
            icon={'ri-mail-line'}
            value={form.email}
            onChangeText={(text) => handleFormChange('email', text)}
          />
          <Input
            placeholder={'password'}
            icon={'ri-lock-line'}
            value={form.password}
            onChangeText={(text) => handleFormChange('password', text)}
          />
          <Button
            title={'login'}
            onPress={() => navigation.navigate('main-initial-stack')}
          />
        </LoginScreenContainer>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
