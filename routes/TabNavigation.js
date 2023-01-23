import Icon from 'react-native-remix-icon'

import { palette } from 'themes/palette'
import { TextHeader } from 'components/export'
import { fontPixel, pixelSizeHorizontal } from 'utils/normalization'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainTab, SearchTab, BookmarkTab, WeatherTab } from 'screens/export'
import { DrawerHeaderMain } from 'components/header/DrawerHeader'

import { lang } from 'lang/tabs.i18n'
import { __t } from 'store/LocalizationProvider'

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
    case 'map-tab':
      iconName = `ri-compass-discover${focused ? '-fill' : '-line'}`
      break
    case 'weather-tab':
      iconName = `ri-sun-cloudy${focused ? '-fill' : '-line'}`
      break
  }

  return <Icon name={iconName} color={color} size={fontPixel(24)} />
}

const tabComponents = [
  {
    path: 'main-tab',
    name: 'main',
    component: MainTab,
  },
  {
    path: 'bookmark-tab',
    name: 'bookmarks',
    component: BookmarkTab,
    header: 'bookmarks',
  },
  {
    path: 'search-tab',
    name: 'search',
    component: SearchTab,
    header: 'search',
  },
  {
    path: 'weather-tab',
    name: 'weather',
    component: WeatherTab,
    header: 'weather',
  },
]

const barStyle = {
  paddingLeft: pixelSizeHorizontal(24),
  paddingRight: pixelSizeHorizontal(24),
  borderTopColor: 'transparent',
  backgroundColor: palette.primary.accent_100,
}

const TabNavigation = () => {
  const { local } = __t()

  const t = (key) => {
    const translation = lang[local][key]
    if (!translation) {
      return key
    }
    return translation
  }

  return (
    <Tab.Navigator
      initialRouteName='main-tab'
      screenOptions={({ route }) => ({
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
              header: () =>
                el.path === 'main-tab' ? (
                  <DrawerHeaderMain name={'smarhotel'} />
                ) : (
                  <TextHeader name={t(el.header)} size={16} />
                ),
              tabBarStyle: { ...barStyle },
              tabBarLabel: t(el.name),
              tabBarLabelStyle: {
                fontSize: 12,
                paddingBottom: 2,
              },
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default TabNavigation
