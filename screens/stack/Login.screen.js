import { useState } from 'react'
import SafeAreaView from 'utils/SafeAreaView'
import { __auth } from 'store/AuthSusbcribeProvider'
import { Button, Input, Text } from 'components/export'
import { LoginScreenContainer } from 'styles/login.module'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const { login } = __auth()

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
            secureTextEntry={true}
            onChangeText={(text) => handleFormChange('password', text)}
          />
          <Button title={'login'} onPress={() => login({ ...form })} />
        </LoginScreenContainer>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
