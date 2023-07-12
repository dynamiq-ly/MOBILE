/**
 * the route will define each service in the app with its respective routes
 * @field {Object} each service will be defined as a key in the object
 * @exports {Object} the routes object with each navigation type as array and its respective routes as element of the array
 */

import { MaterialIcons } from '@expo/vector-icons'

import { StackHeader } from '@/shared' // header import
import DrawerNavigation from '@/navigation/DrawerNavigation'

import { Bar } from '@/page/bar'
import { Restaurant } from '@/page/restaurant'
import { Entertainment } from '@/page/entertainment'

/* (STACK) Home screen */
const home = {
  id: '[stack] stack-home',
  component: DrawerNavigation,
  option: {
    headerShown: false,
  },
}

/* (STACK) Restaurant screen */
const restaurant = {
  id: '[stack] stack-restaurant',
  component: Restaurant,
  option: {
    headerShown: true,
    headerTitle: 'Restaurant List',
    header: () => <StackHeader title='Restaurants List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) Bar screen */
const bar = {
  id: '[stack] stack-bar',
  component: Bar,
  option: {
    headerShown: true,
    headerTitle: 'Bar List',
    header: () => <StackHeader title='Bars List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) Entertainment screen */
const entertainment = {
  id: '[stack] stack-entertainment',
  component: Entertainment,
  option: {
    headerShown: true,
    headerTitle: 'Entertainment List',
    header: () => <StackHeader title='entertainments List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) */
export const stack = [home, restaurant, bar, entertainment]
