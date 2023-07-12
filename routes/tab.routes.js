/**
 * @this READ BEFORE USING
 * the route will define each service in the app with its respective routes
 * @field {Object} each service will be defined as a key in the object
 * @exports {Object} the routes object with each navigation type as array and its respective routes as element of the array
 */

import { Image } from '@/common'
import { View } from 'react-native'
import { StackHeader } from '@/shared'

import { Feather } from '@expo/vector-icons'

import Home from '@/page/[main]/Home'
import Search from '@/page/[search]/Search'
import Weather from '@/page/[weather]/Weather'

/* [TAB] Home screen */
const home = {
  id: '[tab] stack-home',
  name: 'home',
  icon: 'home',
  component: Home,
  option: {
    headerShown: true,
    headerTitle: 'Home',
    header: () => (
      <StackHeader
        title={
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('@/assets/logo/h-logo.png')} contentFit={'contain'} height='24px' alt='utells logo' />
          </View>
        }
        background='container'
        iconLeft={<Feather name='menu' size={18} />}
        iconRight={<Feather name='bell' size={18} />}
        iconLeftParams={{ path: '', param: '', func: undefined }}
        iconRightParams={{ path: '', param: '', func: () => {} }}
      />
    ),
  },
}

/* [TAB] weather screen */
const weather = {
  id: '[tab] stack-weather',
  name: 'weather',
  icon: 'cloud',
  component: Weather,
  option: {
    headerShown: true,
    headerTitle: 'Weather',
    header: () => <StackHeader title='Weather' background='container' />,
  },
}

/* [TAB] search screen */
const search = {
  id: '[tab] stack-search',
  name: 'search',
  icon: 'search',
  component: Search,
  option: {
    headerShown: true,
    headerTitle: 'Search',
    header: () => <StackHeader title='Search' background='container' />,
  },
}

/* [TAB] */
export const tab = [home, search, weather]
