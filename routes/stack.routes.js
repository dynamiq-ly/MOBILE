/**
 * the route will define each service in the app with its respective routes
 * @field {Object} each service will be defined as a key in the object
 * @exports {Object} the routes object with each navigation type as array and its respective routes as element of the array
 */

import DrawerNavigation from '@/navigation/DrawerNavigation'

import { OurHotelsRoutesConfig } from '@/page/our-hotel/routes'
import { PoliciesRoutesConfig } from '@/page/policies/routes'
import { ReceptionRoutesConfig } from '@/page/reception/routes'
import { RoomsServiceRoutesConfig } from '@/page/room-service/routes'
import { CheckInOutRoutesConfig } from '@/page/check-in-out/routes'
import { BarRoutesConfig } from '@/page/bar/routes'
import { RestaurantRoutesConfig } from '@/page/restaurant/routes'
import { EntertainmentRoutesConfig } from '@/page/entertainment/routes'
import { RoomsRoutesConfig } from '@/page/rooms/routes'
import { ExcursionsRoutesConfig } from '@/page/excusrions/routes'
import { PointOfInterestRoutesConfig } from '@/page/interest-point/routes'
import { GymRoutesConfig } from '@/page/gym/routes'
import { SwimmingPoolRoutesConfig } from '@/page/swimming-pool/routes'
import { SpaRoutesConfig } from '@/page/spa/routes'
import { RentingRoutesConfig } from '@/page/renting/routes'
import { ShopsRoutesConfig } from '@/page/shops/routes'
import { HelpRoutesConfig } from '@/page/help/routes'
import { SettingsRoutesConfig } from '@/page/setting/routes'

/* (STACK) */
export const stack = [
  {
    id: '[stack] stack-home',
    component: DrawerNavigation,
    option: {
      headerShown: false,
    },
  },
  ...OurHotelsRoutesConfig,
  ...PoliciesRoutesConfig,
  ...ReceptionRoutesConfig,
  ...RoomsServiceRoutesConfig,
  ...CheckInOutRoutesConfig,
  ...BarRoutesConfig,
  ...RestaurantRoutesConfig,
  ...EntertainmentRoutesConfig,
  ...RoomsRoutesConfig,
  ...ExcursionsRoutesConfig,
  ...PointOfInterestRoutesConfig,
  ...GymRoutesConfig,
  ...SwimmingPoolRoutesConfig,
  ...SpaRoutesConfig,
  ...RentingRoutesConfig,
  ...ShopsRoutesConfig,
  ...HelpRoutesConfig,
  ...SettingsRoutesConfig,
]