import { MenuTab } from 'screens/export'
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
  HotelReciept,
  RentingScreen,
  OthersScreen,
  RoomService,
} from 'components/export'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CheckOut from '~/components/checkinout/CheckOut'
import ExpressCheckout from '~/components/checkinout/ExpressCheckout'
import LateCheckout from '~/components/checkinout/LateCheckout'

const Stack = createNativeStackNavigator()

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

      <Stack.Group key={'safety stack'}>
        {safety_Stack_Array.map((el, key) => {
          return (
            <Stack.Screen
              key={key}
              name={el.path}
              component={el.component}
              options={{
                header: el.header,
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
    path: 'menu-tab-stack-bar-detail',
    component: BarDetail,
    header: () => false,
  },
  {
    path: 'menu-tab-stack-how-can-we-help',
    component: HowCanWeHelp,
    header: () => false,
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
    component: ExpressCheckout,
    header: () => <StackHeader name={'Express Check out'} />,
  },
  {
    path: 'menu-tab-stack-late-check-out',
    component: LateCheckout,
    header: () => <StackHeader name={'late Check out'} />,
  },
  {
    path: 'menu-tab-stack-hotel-reciept',
    component: HotelReciept,
    header: () => <StackHeader name={'hotel reciept'} />,
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
]
