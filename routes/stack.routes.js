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
import { AboutHotels, OurHotel } from '@/page/our-hotel'
import { Safety } from '@/page/safety'
import { Reception } from '@/page/reception'
import { RoomService } from '@/page/room-service'
import { CheckInOut } from '@/page/check-in-out'
import { Rooms } from '@/page/rooms'
import { Excursions } from '@/page/excusrions'
import { InterestPoint } from '@/page/interest-point'
import { Gym } from '@/page/gym'
import { SwimmingPool } from '@/page/swimming-pool'
import { Spa } from '@/page/spa'
import { Renting } from '@/page/renting'
import { Shop } from '@/page/shops'
import { Help } from '@/page/help'
import { Setting } from '@/page/setting'

/* (STACK) Home screen */
const home = {
  id: '[stack] stack-home',
  component: DrawerNavigation,
  option: {
    headerShown: false,
  },
}

/* (STACK) about hotel screen */
const aboutHotel = {
  id: '[stack] stack-about-hotel',
  component: AboutHotels,
  option: {
    headerShown: true,
    headerTitle: 'About Hotel',
    header: () => <StackHeader title='About Hotel' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) Our Hotel screen */
const ourHotel = {
  id: '[stack] stack-hotels',
  component: OurHotel,
  option: {
    headerShown: true,
    headerTitle: 'Our Hotel',
    header: () => <StackHeader title='Our Hotel' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) Safety screen */
const safety = {
  id: '[stack] stack-safety',
  component: Safety,
  option: {
    headerShown: true,
    headerTitle: 'Safety',
    header: () => <StackHeader title='Safety' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) Reception screen */
const reception = {
  id: '[stack] stack-reception',
  component: Reception,
  option: {
    headerShown: true,
    headerTitle: 'Reception',
    header: () => <StackHeader title='Reception' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) Room Service screen */
const roomService = {
  id: '[stack] stack-room-service',
  component: RoomService,
  option: {
    headerShown: true,
    headerTitle: 'Room Service',
    header: () => <StackHeader title='Room Service' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) Check In/Out screen */
const checkInOut = {
  id: '[stack] stack-check-in-check-out',
  component: CheckInOut,
  option: {
    headerShown: true,
    headerTitle: 'Check In/Out',
    header: () => <StackHeader title='Check In/Out' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
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

/* (STACK) Rooms screen */
const rooms = {
  id: '[stack] stack-rooms',
  component: Rooms,
  option: {
    headerShown: true,
    headerTitle: 'Rooms List',
    header: () => <StackHeader title='Rooms List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) Excursions screen */
const excursions = {
  id: '[stack] stack-excursions-activites',
  component: Excursions,
  option: {
    headerShown: true,
    headerTitle: 'Excursions List',
    header: () => <StackHeader title='Excursions List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) point of interest screen */
const pointInterest = {
  id: '[stack] stack-point-interest',
  component: InterestPoint,
  option: {
    headerShown: true,
    headerTitle: 'Point Interest List',
    header: () => <StackHeader title='Point Interest List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) gym screen */
const gym = {
  id: '[stack] stack-gym',
  component: Gym,
  option: {
    headerShown: true,
    headerTitle: 'Gym',
    header: () => <StackHeader title='Gym List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) swimming pool screen */
const pools = {
  id: '[stack] stack-swimming-pool',
  component: SwimmingPool,
  option: {
    headerShown: true,
    headerTitle: 'Swimming Pool List',
    header: () => <StackHeader title='Swimming Pool List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) spa screen */
const spa = {
  id: '[stack] stack-spa',
  component: Spa,
  option: {
    headerShown: true,
    headerTitle: 'Spa List',
    header: () => <StackHeader title='Spa List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) renting screen */
const renting = {
  id: '[stack] stack-renting',
  component: Renting,
  option: {
    headerShown: true,
    headerTitle: 'Renting List',
    header: () => <StackHeader title='Renting List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) shopping screen */
const shopping = {
  id: '[stack] stack-shopping',
  component: Shop,
  option: {
    headerShown: true,
    headerTitle: 'Shopping List',
    header: () => <StackHeader title='Shopping List' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) help screen */
const help = {
  id: '[stack] stack-help',
  component: Help,
  option: {
    headerShown: true,
    headerTitle: 'Help',
    header: () => <StackHeader title='Help' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) setting screen */
const setting = {
  id: '[stack] stack-settings',
  component: Setting,
  option: {
    headerShown: true,
    headerTitle: 'Settings',
    header: () => <StackHeader title='Settings' iconLeft={<MaterialIcons name='arrow-back' size={18} />} />,
  },
}

/* (STACK) */
export const stack = [
  home,
  safety,
  aboutHotel,
  ourHotel,
  reception,
  roomService,
  checkInOut,
  restaurant,
  bar,
  entertainment,
  rooms,
  excursions,
  pointInterest,
  gym,
  pools,
  spa,
  renting,
  shopping,
  help,
  setting,
]
