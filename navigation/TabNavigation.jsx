/* packages */
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/* routes */
import { tab } from '@/routes/tab.routes'

/* styles */
import { useTheme } from 'styled-components'
import { useDrawerProgress } from '@react-navigation/drawer'

const Tab = createBottomTabNavigator()

export default () => {
  const theme = useTheme()
  const progress = useDrawerProgress()

  /* find me a solution to fix this warning {Sending 'onAnimatedValueUpdate'} with no listenere registred */

  const animatedStyle = useAnimatedStyle(() => ({
    borderRadius: interpolate(progress.value, [0, 1], [1, 18], 'clamp'),
    transform: [{ scale: interpolate(progress.value, [0, 1], [1, 0.85], 'clamp') }],
  }))

  return (
    <Animated.View style={[{ flex: 1, overflow: 'hidden' }, animatedStyle]}>
      <Tab.Navigator
        initialRouteName={'(stack) stack-home'}
        screenOptions={{
          tabBarActiveTintColor: theme.core.neutral[500],
          tabBarInactiveTintColor: theme.core.text['variant_small'],
          tabBarStyle: {
            backgroundColor: theme.core.neutral[100],
            paddingHorizontal: theme.units.lg,
          },
        }}>
        {tab.map((el) => (
          <Tab.Screen
            key={el.id}
            name={el.id}
            component={el.component}
            options={{
              ...el.option,
              tabBarShowLabel: false,
              tabBarLabel: el.name,
              headerTitle: el.name,
            }}
          />
        ))}
      </Tab.Navigator>
    </Animated.View>
  )
}
