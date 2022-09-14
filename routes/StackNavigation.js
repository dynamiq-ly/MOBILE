import { InitialScreen, LoginScreen } from 'screens/export'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import { Stack_Array } from './MenuStack'

import { __auth } from 'store/AuthSusbcribeProvider'
import DrawerNavigation from './DrawerNavigation'

const Stack = createNativeStackNavigator()
// const Stack = createSharedElementStackNavigator()

const StackNavigation = () => {
  const { isLoggedIn } = __auth()

  return (
    <Stack.Navigator
      initialRouteName={
        isLoggedIn ? 'main-initial-stack' : 'first-initial-stack'
      }>
      {!isLoggedIn && (
        <>
          <Stack.Screen
            name='first-initial-stack'
            component={InitialScreen}
            options={{ header: () => false }}
          />
          <Stack.Screen
            name='login-initial-stack'
            component={LoginScreen}
            options={{ header: () => false }}
          />
        </>
      )}
      <Stack.Screen
        name='main-initial-stack'
        component={DrawerNavigation}
        options={{ header: () => false }}
      />
      {Stack_Array.map((el, key) => (
        <Stack.Screen
          key={key}
          name={el.path}
          component={el.component}
          options={{
            header: el.header,
          }}
        />
      ))}
    </Stack.Navigator>
  )
}

export default StackNavigation
