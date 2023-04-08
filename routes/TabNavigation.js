import Icon from 'react-native-remix-icon'

import { palette } from 'themes/palette'
import { ProfileScreen, TextHeader } from 'components/export'
import { DrawerHeaderMain } from 'components/header/DrawerHeader'
import { fontPixel, pixelSizeHorizontal } from 'utils/normalization'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainTab, SearchTab, BookmarkTab, WeatherTab, LoginScreen } from 'screens/export'

import { lang } from 'lang/tabs.i18n'
import { __t } from 'store/LocalizationProvider'
import { __auth } from '~/store/AuthSusbcribeProvider'
import { useEffect, useState } from 'react'

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
    case 'weather-tab':
      iconName = `ri-sun-cloudy${focused ? '-fill' : '-line'}`
      break
    case 'account-tab':
      iconName = `ri-user${focused ? '-fill' : '-line'}`
      break
    case 'profile-tab':
      iconName = `ri-user${focused ? '-fill' : '-line'}`
      break
  }

  return <Icon name={iconName} color={color} size={fontPixel(24)} />
}

const tabNavComponents = [
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
  {
    path: 'account-tab',
    name: 'account',
    component: LoginScreen,
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
  const { isLoggedIn } = __auth()
  const [tabComponents, setTabComponents] = useState([...tabNavComponents])

  useEffect(() => {
    if (isLoggedIn) {
      setTabComponents((prev) => prev.map((el) => (el.path === 'account-tab' ? { ...el, path: 'profile-tab', component: ProfileScreen, header: 'profile' } : el)))
    } else setTabComponents([...tabNavComponents])
  }, [isLoggedIn])

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
              header: () => (el.path === 'main-tab' ? <DrawerHeaderMain name={'utells'} /> : el.path === 'account-tab' ? false : <TextHeader name={t(el.header)} size={16} />),
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
