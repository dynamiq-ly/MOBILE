import TabNavigation from './TabNavigation'
import { InitialScreen, LoginScreen } from 'screens/export'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='first-initial-stack'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='first-initial-stack' component={InitialScreen} />
      <Stack.Screen name='login-initial-stack' component={LoginScreen} />
      <Stack.Screen name='main-initial-stack' component={TabNavigation} />
    </Stack.Navigator>
  )
}

export default StackNavigation
