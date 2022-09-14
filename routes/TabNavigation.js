import { Platform } from 'react-native'
import { palette } from 'themes/palette'
import Icon from 'react-native-remix-icon'
import MenuStackNavigation from './MenuStack'
import { SearchHeader, TextHeader } from 'components/export'
import { fontPixel, pixelSizeHorizontal } from 'utils/normalization'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import {
  MainTab,
  SearchTab,
  BookmarkTab,
  NotificationTab,
} from 'screens/export'

const Tab = createBottomTabNavigator()

const iconTab = (route, color, focused) => {
  let iconName
  switch (route.name) {
    case 'main-tab':
      iconName = `ri-home${focused ? '-fill' : '-line'}`
      break
    case 'bookmark-tab':
      iconName = `ri-bookmark${focused ? '-fill' : '-line'}`
      break
    case 'search-tab':
      iconName = `ri-search-2${focused ? '-fill' : '-line'}`
      break
    case 'notification-tab':
      iconName = `ri-notification${focused ? '-fill' : '-line'}`
      break
    case 'menu-tab':
      iconName = `ri-menu${focused ? '-fill' : '-line'}`
      break
  }

  return <Icon name={iconName} color={color} size={fontPixel(24)} />
}

const tabComponents = [
  {
    path: 'main-tab',
    name: 'Main',
    component: MainTab,
    header: false,
  },
  {
    path: 'bookmark-tab',
    name: 'Bookmarks',
    component: BookmarkTab,
    header: <TextHeader name={'Bookmarks'} size={16} />,
  },
  {
    path: 'search-tab',
    name: 'Search',
    component: SearchTab,
    header: <SearchHeader />,
  },
  {
    path: 'notification-tab',
    name: 'Notifications',
    component: NotificationTab,
    header: <TextHeader name={'Notifications'} />,
  },
]

/**
 *
 * @param {string} state
 */
const getScreensToHideTabTabOnActiveRoutes = (state) => {
  return state.includes('menu-tab-stack-')
}

const barStyle = {
  paddingLeft: pixelSizeHorizontal(24),
  paddingRight: pixelSizeHorizontal(24),
  borderTopColor: 'transparent',
  backgroundColor: palette.primary.accent_100,
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='main-tab'
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingLeft: pixelSizeHorizontal(24),
          paddingRight: pixelSizeHorizontal(24),
          borderTopColor: 'transparent',
          backgroundColor: palette.primary.accent_100,
        },
        tabBarInactiveTintColor: palette.primary.accent_400,
        tabBarActiveTintColor: palette.primary.accent_900,
        tabBarIcon: ({ focused, color }) => iconTab(route, color, focused),
      })}>
      {tabComponents.map((el) => {
        return (
          <Tab.Screen
            name={el.path}
            key={el.path}
            component={el.component}
            options={({ route }) => ({
              header: () => el.header,
              tabBarStyle: ((route) => {
                const state = getFocusedRouteNameFromRoute(route) ?? ''
                if (getScreensToHideTabTabOnActiveRoutes(state)) {
                  return {
                    height: 0,
                    opacity: 0,
                    marginBottom: Platform.OS === 'ios' ? -24 : 0,
                    backgroundColor: palette.primary.accent_100,
                  }
                } else {
                  return { ...barStyle }
                }
              })(route),
            })}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default TabNavigation
