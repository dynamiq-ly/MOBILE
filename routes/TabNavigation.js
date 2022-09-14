import Icon from 'react-native-remix-icon'

import { palette } from 'themes/palette'
import { SearchHeader, TextHeader } from 'components/export'
import { fontPixel, pixelSizeHorizontal } from 'utils/normalization'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainTab, SearchTab, BookmarkTab } from 'screens/export'
import { DrawerHeaderMain } from 'components/header/DrawerHeader'

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
    header: <DrawerHeaderMain name={'hipotels'} />,
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
            options={{
              header: () => el.header,
              tabBarStyle: { ...barStyle },
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default TabNavigation
