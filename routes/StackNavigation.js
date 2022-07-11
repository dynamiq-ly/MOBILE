import TabNavigation from './TabNavigation'
import { InitialScreen, LoginScreen } from 'screens/export'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { __auth } from 'store/AuthSusbcribeProvider'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  const { isLoggedIn } = __auth()

  return (
    <Stack.Navigator
      initialRouteName={
        isLoggedIn ? 'main-initial-stack' : 'first-initial-stack'
      }
      screenOptions={{ headerShown: false }}>
      {!isLoggedIn && (
        <>
          <Stack.Screen name='first-initial-stack' component={InitialScreen} />
          <Stack.Screen name='login-initial-stack' component={LoginScreen} />
        </>
      )}
      <Stack.Screen
        name='main-initial-stack'
        component={TabNavigation}
        options={{
          gestureEnabled: isLoggedIn ? false : true,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation
