import { MenuTab } from 'screens/export'
import { Linking, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  TextHeader,
  StackHeader,
  SafetyScreen,
  SafetyDetail,
  RestoList,
  RestoDetail,
  BarsList,
  BarDetail,
  HowCanWeHelp,
  CheckInOut,
  CheckIn,
  LateCheckOut,
  ExpressCheckOut,
  CheckOut,
  HotelReciept,
  RentingScreen,
  OthersScreen,
  RoomService,
  MiniBarScreen,
  OptionHeader,
  CartScreenRoomService,
  PhoneDirectoryScreen,
  ReportIncidenceScreen,
  SafeBoxScreen,
  LaundryScreen,
  LaundryMainScreen,
  MedicalAssistanceScreen,
  ConnectivityScreen,
  ParkingLotScreen,
  PointOfInterestScreen,
  PointInterestScreenOptions,
  RestoMenuFoodScreen,
  GymScreen,
  GymEquipementScreen,
  GymBookingScreen,
  GymUseTermsScreen,
  RestoMenuFoodListScreen,
  SwimmingPoolScreen,
  SwimmingPoolListScreen,
  RestoMenuDetailScreen,
  RestoMenuDrinksScreen,
  RestoMenuDrinksDetailScreen,
  RestoMenuAlocoholDetailsScreen,
  RestoMenuAlcoholDrinksDetailsScreen,
  SpaScreen,
  HouseKeepingScreen,
  HouseKeepingServiceScreen,
  RoomScreen,
  FoodServiceScreen,
  FoodServiceDetailScreen,
  BarMenuList,
  BarMenuDrinksDetails,
  PointOfInterestDetailScreen,
} from 'components/export'

import Cart from 'cart/Cart'
import OpenLinkButton from 'components/button/OpenLinkButton'

const Stack = createNativeStackNavigator()

const presentationModal = function (name) {
  switch (name) {
    case 'menu-tab-stack-restaurant-detail-menu-food-list-detail':
      return Platform.OS === 'ios' ? 'modal' : 'transparentModal'
    case 'menu-tab-stack-laundry-menu':
      return Platform.OS === 'ios' ? 'modal' : 'transparentModal'
    default:
      return 'fullScreen'
  }
}

const MenuStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='menu-tab-stack'>
      <Stack.Screen
        name='menu-tab-stack'
        component={MenuTab}
        options={{
          header: () => <TextHeader name={'Menu'} />,
        }}
      />

      <Stack.Group key={'menu stack'}>
        {safety_Stack_Array.map((el, key) => {
          return (
            <Stack.Screen
              key={key}
              name={el.path}
              component={el.component}
              options={{
                header: el.header,
                // presentation: presentationModal(el.path),
              }}
            />
          )
        })}
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default MenuStackNavigation

const safety_Stack_Array = [
  {
    path: 'menu-tab-stack-safety',
    component: SafetyScreen,
    header: () => <StackHeader name={'safety measures'} />,
  },
  {
    path: 'menu-tab-stack-safety-detail',
    component: SafetyDetail,
    header: ({ route }) => <StackHeader name={route.params._data.name} />,
  },
  {
    path: 'menu-tab-stack-restaurant-list',
    component: RestoList,
    header: () => <StackHeader name={'restaurants'} />,
  },
  {
    path: 'menu-tab-stack-bar-list',
    component: BarsList,
    header: () => <StackHeader name={'bars'} />,
  },
  {
    path: 'menu-tab-stack-restaurant-detail',
    component: RestoDetail,
    header: () => false,
  },
  {
    path: 'menu-tab-stack-restaurant-detail-menu-food',
    component: RestoMenuFoodScreen,
    header: () => <StackHeader name={'food menu'} />,
  },
  {
    path: 'menu-tab-stack-restaurant-detail-menu-food-list',
    component: RestoMenuFoodListScreen,
    header: ({ route }) => <StackHeader name={route.params._name} />,
  },
  {
    path: 'menu-tab-stack-restaurant-detail-menu-food-list-detail',
    component: RestoMenuDetailScreen,
    header: ({ route }) => <StackHeader name={route.params._name} />,
  },
  {
    path: 'menu-tab-stack-restaurant-detail-menu-drinks',
    component: RestoMenuDrinksScreen,
    header: () => <StackHeader name={'drinks menu'} />,
  },
  {
    path: 'menu-tab-stack-restaurant-detail-menu-drinks-details',
    component: RestoMenuDrinksDetailScreen,
    header: ({ route }) => <StackHeader name={route.params._name} />,
  },
  {
    path: 'menu-tab-stack-restaurant-detail-menu-drinks-details-alcohol',
    component: RestoMenuAlcoholDrinksDetailsScreen,
    header: ({ route }) => <StackHeader name={route.params._name} />,
  },
  {
    path: 'menu-tab-stack-restaurant-alcohol-details',
    component: RestoMenuAlocoholDetailsScreen,
    header: () => false,
  },
  {
    path: 'menu-tab-stack-bar-detail',
    component: BarDetail,
    header: () => false,
  },
  {
    path: 'menu-tab-stack-bar-menu-list',
    component: BarMenuList,
    header: () => <StackHeader name={'Bar drinks'} />,
  },
  {
    path: 'menu-tab-stack-bar-menu-details',
    component: BarMenuDrinksDetails,
    header: ({ route }) => <StackHeader name={route.params._name} />,
  },

  {
    path: 'menu-tab-stack-how-can-we-help',
    component: HowCanWeHelp,
    header: () => false,
  },
  {
    path: 'menu-tab-stack-point-of-interest',
    component: PointOfInterestScreen,
    header: ({ navigation }) => (
      <OptionHeader
        name={'points of interest'}
        components={
          <PointInterestScreenOptions func={() => navigation.navigate('')} />
        }
      />
    ),
  },
  {
    path: 'menu-tab-stack-point-of-interest-detail',
    component: PointOfInterestDetailScreen,
    header: ({ route, navigation }) => (
      <OptionHeader
        name={'interesting point'}
        components={
          <PointInterestScreenOptions func={() => navigation.navigate('')} />
        }
      />
    ),
  },
  {
    path: 'menu-tab-stack-check-in-out',
    component: CheckInOut,
    header: () => <StackHeader name={'Check In & Out'} />,
  },
  {
    path: 'menu-tab-stack-check-in',
    component: CheckIn,
    header: () => <StackHeader name={'Check In'} />,
  },
  {
    path: 'menu-tab-stack-check-out',
    component: CheckOut,
    header: () => <StackHeader name={'Check out'} />,
  },
  {
    path: 'menu-tab-stack-express-check-out',
    component: ExpressCheckOut,
    header: () => <StackHeader name={'Express Check out'} />,
  },
  {
    path: 'menu-tab-stack-late-check-out',
    component: LateCheckOut,
    header: () => <StackHeader name={'late Check out'} />,
  },
  {
    path: 'menu-tab-stack-hotel-reciept',
    component: HotelReciept,
    header: () => <StackHeader name={'hotel reciept'} />,
  },
  {
    path: 'menu-tab-stack-safe-box',
    component: SafeBoxScreen,
    header: () => <StackHeader name={'safe box'} />,
  },
  {
    path: 'menu-tab-stack-laundry',
    component: LaundryMainScreen,
    header: () => <StackHeader name={'laundry'} />,
  },
  {
    path: 'menu-tab-stack-laundry-menu',
    component: LaundryScreen,
    header: () => <StackHeader name={'laundry menu'} />,
  },
  {
    path: 'menu-tab-stack-medical-assistance',
    component: MedicalAssistanceScreen,
    header: () => <StackHeader name={'medical assistance'} />,
  },
  {
    path: 'menu-tab-stack-connectivity',
    component: ConnectivityScreen,
    header: () => <StackHeader name={'Connectivity'} />,
  },
  {
    path: 'menu-tab-stack-parking',
    component: ParkingLotScreen,
    header: () => <StackHeader name={'parking spot'} />,
  },
  {
    path: 'menu-tab-stack-other-request',
    component: OthersScreen,
    header: () => <StackHeader name={'other request'} />,
  },
  {
    path: 'menu-tab-stack-renting',
    component: RentingScreen,
    header: () => <StackHeader name={'Rentings'} />,
  },
  {
    path: 'menu-tab-stack-room-service',
    component: RoomService,
    header: () => <StackHeader name={'room service'} />,
  },
  {
    path: 'menu-tab-stack-room-service-mini-bar',
    component: MiniBarScreen,
    header: ({ navigation }) => (
      <OptionHeader
        name={'mini bar'}
        components={
          <Cart
            name={'mini_bar'}
            path={() => navigation.navigate('menu-tab-stack-room-service-cart')}
          />
        }
      />
    ),
  },
  {
    path: 'menu-tab-stack-room-service-food-service',
    component: FoodServiceScreen,
    header: ({ navigation }) => (
      <OptionHeader
        name={'food services'}
        components={
          <Cart
            name={'mini_bar'}
            path={() => navigation.navigate('menu-tab-stack-room-service-cart')}
          />
        }
      />
    ),
  },
  {
    path: 'menu-tab-stack-room-service-food-service-detail',
    component: FoodServiceDetailScreen,
    header: ({ route, navigation }) => (
      <OptionHeader
        name={route.params._name}
        components={
          <Cart
            name={'mini_bar'}
            path={() => navigation.navigate('menu-tab-stack-room-service-cart')}
          />
        }
      />
    ),
  },
  {
    path: 'menu-tab-stack-room-service-cart',
    component: CartScreenRoomService,
    header: () => <StackHeader name={'cart'} />,
  },
  {
    path: 'menu-tab-stack-room-service-phone-directory',
    component: PhoneDirectoryScreen,
    header: () => <StackHeader name={'phone directory'} />,
  },
  {
    path: 'menu-tab-stack-room-service-incidence-report',
    component: ReportIncidenceScreen,
    header: () => <StackHeader name={'report incidence'} />,
  },
  {
    path: 'menu-tab-stack-housekeeping',
    component: HouseKeepingScreen,
    header: () => <StackHeader name={'house keeping'} />,
  },
  {
    path: 'menu-tab-stack-housekeeping-service',
    component: HouseKeepingServiceScreen,
    header: () => <StackHeader name={'house keeping'} />,
  },
  {
    path: 'menu-tab-stack-gym',
    component: GymScreen,
    header: () => <StackHeader name={'gym'} />,
  },
  {
    path: 'menu-tab-stack-gym-equipement',
    component: GymEquipementScreen,
    header: () => <StackHeader name={'gym equipement'} />,
  },
  {
    path: 'menu-tab-stack-gym-booking',
    component: GymBookingScreen,
    header: () => <StackHeader name={'gym booking'} />,
  },
  {
    path: 'menu-tab-stack-gym-use-terms',
    component: GymUseTermsScreen,
    header: () => <StackHeader name={'gym terms'} />,
  },
  {
    path: 'menu-tab-stack-swimming-pool',
    component: SwimmingPoolScreen,
    header: () => <StackHeader name={'swimming pool'} />,
  },
  {
    path: 'menu-tab-stack-swimming-pool-list',
    component: SwimmingPoolListScreen,
    header: ({ route }) => <StackHeader name={route.params._name} />,
  },
  {
    path: 'menu-tab-stack-span-wellness',
    component: SpaScreen,
    header: () => (
      <OptionHeader
        name={'span and wellness'}
        components={
          <OpenLinkButton
            icon={'ri-global-line'}
            func={() => Linking.openURL('https://google.com')}
          />
        }
      />
    ),
  },
  {
    path: 'menu-tab-stack-rooms',
    component: RoomScreen,
    header: () => <StackHeader name={'rooms'} />,
  },
]
