import { createStackNavigator } from '@react-navigation/stack'

import { stack } from '@/routes/stack.routes'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator initialRouteName='[stack] stack-home'>
      {stack.map((el) => (
        <Stack.Screen key={el.id} name={el.id} component={el.component} options={{ ...el.option }} />
      ))}
    </Stack.Navigator>
  )
}
