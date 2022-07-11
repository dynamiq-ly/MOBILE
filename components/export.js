/**
 * @description moudlar components
 */
export { default as Text } from './text/Text'
export { default as Input } from './input/Input'
export { default as Button } from './button/Button'
export { default as SearchInput } from './input/SearchInput'
export { default as GroupButton } from './button/ButtonGroup'
export { default as FixedButton } from './button/FixedWidthButton'
export { default as OpenLinkButtonIcon } from './button/OpenLinkButton'

/**
 * @description custom header
 */
export { default as TextHeader } from './header/TextHeader'
export { default as StackHeader } from './header/StackHeader'
export { default as SearchHeader } from './header/SearchHeader'
export { default as OptionHeader } from './header/StackOptionHeader'

/**
 * @description menu screens
 */
// safety screen
export { default as SafetyScreen } from './safety-screen/SafetyScreen'
export { default as SafetyDetail } from './safety-screen/SafetyDetail'
// restaurant screen
export { default as RestoList } from './restaurant/List.screen'
export { default as RestoDetail } from './restaurant/Detail.screen'
export { default as RestoMenuFoodScreen } from './restaurant/Menu.screen'
export { default as RestoMenuFoodListScreen } from './restaurant/MenuList.screen'
export { default as RestoMenuDetailScreen } from './restaurant/MenuListDetails.screen'
export { default as RestoMenuDrinksScreen } from './restaurant/MenuDrinks.screen'
export { default as RestoMenuDrinksDetailScreen } from './restaurant/MenuDrinksDetails.screen'
export { default as RestoMenuAlocoholDetailsScreen } from './restaurant/AcloholDrinkDetails'
export { default as RestoMenuAlcoholDrinksDetailsScreen } from './restaurant/MenuAlcoholDrinksDetails'
// bars screen
export { default as BarsList } from './bars/List.screen'
export { default as BarDetail } from './bars/Detail.screen'
export { default as BarMenuList } from './bars/MenuBarList'
export { default as BarMenuDrinksDetails } from './bars/MenuBarDetails'
export { default as BarMenuListDrinkDetails } from './bars/MenuBarDrinkDetails'
// how can we help screen
export { default as CheckIn } from './checkinout/CheckIn'
export { default as CheckOut } from './checkinout/CheckOut'
export { default as CheckInOut } from './checkinout/CheckInOut'
export { default as LateCheckOut } from './checkinout/LateCheckout'
export { default as HotelReciept } from './checkinout/HotelReciept'
export { default as LaundryScreen } from './laundry/Laundry.screen'
export { default as LaundryMainScreen } from './laundry/Main.screen'
export { default as SafeBoxScreen } from './vault/SafeDeposit.screen'
export { default as HowCanWeHelp } from './reception/Reception.screen'
export { default as ExpressCheckOut } from './checkinout/ExpressCheckout'
export { default as ConnectivityScreen } from './connectivity/Connectivity'
export { default as OthersScreen } from './other-request/OtherRequest.screen'
export { default as MedicalAssistanceScreen } from './medical-assis/MedicalAssis.screen'
export { default as ParkingLotScreen } from './parking/Parking.screen'
export { default as TransportationsScreen } from './transportations/Transportation'
export { default as MoneyConverter } from './reception/MoneyExchange.screen'
export {
  default as AlarmScreen,
  AddAlarmScreenOptions,
} from './reception/alarm/Alarm.screen'
export { default as AddAlarmScreen } from './reception/alarm/AddReminder.screen'
// renting screen
export { default as RentingScreen } from './renting/Renting.screen'
// room service screen
export { default as TowelsScreen } from './room-service/Towels.screen'
export { default as RoomService } from './room-service/Service.screen'
export { default as MiniBarScreen } from './room-service/Minibar.screen'
export { default as FoodServiceScreen } from './room-service/FoodService.screen'
export { default as CartScreenRoomService } from './room-service/CartRoomService.screen'
export { default as PhoneDirectoryScreen } from './room-service/PhoneDirectory.screen'
export { default as ReportIncidenceScreen } from './room-service/IncidenceReport.screen'
export { default as HouseKeepingScreen } from './housekeeping/HouseKeeping.screen'
export { default as FoodServiceDetailScreen } from './room-service/FoodServiceDetail.screen'
export { default as HouseKeepingServiceScreen } from './housekeeping/HouseKeepingServices.screen'
// point of interest
export {
  default as PointOfInterestScreen,
  PointInterestScreenOptions,
} from './point-interest/PointOfInterest.screen'
export { default as PointOfInterestDetailScreen } from './point-interest/PointOfInterestDetail.screen'
// gym screen
export { default as GymScreen } from './gym/Gym.screen'
export { default as GymBookingScreen } from './gym/GymBooking.screen'
export { default as GymUseTermsScreen } from './gym/GymUseTerms.screen'
export { default as GymEquipementScreen } from './gym/GymEquipement.screen'
// swimming pool
export { default as SwimmingPoolScreen } from './swimming-pool/SwimmingPool.screen'
export { default as SwimmingPoolListScreen } from './swimming-pool/SwimmingPoolLists.screen'
// span and wellness
export { default as SpaScreen } from './spa/SpanWellness.screen'
export { default as SpaDetailScreen } from './spa/SpaDetail.screen'
// roms screen
export { default as RoomScreen } from './rooms/Room.screen'
export { default as RoomDetailScreen } from './rooms/RoomDetail.screen'
// entertainement screen
export { default as EntertainingScreen } from './entertainement/Entertainement.screen'
export { default as EntertainingEventsScreen } from './entertainement/EntertainEvents.screen'
