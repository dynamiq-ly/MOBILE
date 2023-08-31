import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { stack } from '@/routes/stack.routes'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator initialRouteName='[auth] stack-auth-login'>
      {stack.map((el) => (
        <Stack.Screen key={el.id} name={el.id} component={el.component} options={{ ...el.option }} />
      ))}
    </Stack.Navigator>
  )
}
