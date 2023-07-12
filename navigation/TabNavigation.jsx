/* packages */
import { Ionicons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
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

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  })

  const radii = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  })

  return (
    <Animated.View
      style={{
        flex: 1,
        borderRadius: radii,
        transform: [{ scale }],
        overflow: 'hidden',
      }}>
      <Tab.Navigator
        initialRouteName={'(stack) stack-home'}
        screenOptions={{
          tabBarActiveTintColor: theme.core.neutral[500],
          tabBarInactiveTintColor: theme.core.text['variant_small'],
        }}>
        {tab.map((el) => (
          <Tab.Screen
            key={el.id}
            name={el.id}
            component={el.component}
            options={{
              ...el.option,
              tabBarLabel: el.name,
              headerTitle: el.name,
              tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? el.icon : `${el.icon}-outline`} size={20} color={color} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </Animated.View>
  )
}
