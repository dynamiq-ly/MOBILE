/**
 * @description moudlar components
 */
export { default as Text } from './text/Text'
export { default as Input } from './input/Input'
export { default as Button } from './button/Button'
export { default as SearchInput } from './input/SearchInput'
export { default as GroupButton } from './button/ButtonGroup'

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
// bars screen
export { default as BarsList } from './bars/List.screen'
export { default as BarDetail } from './bars/Detail.screen'
// how can we help screen
export { default as CheckIn } from './checkinout/CheckIn'
export { default as CheckOut } from './checkinout/CheckOut'
export { default as CheckInOut } from './checkinout/CheckInOut'
export { default as LateCheckOut } from './checkinout/LateCheckout'
export { default as HotelReciept } from './checkinout/HotelReciept'
export { default as HowCanWeHelp } from './reception/Reception.screen'
export { default as ExpressCheckOut } from './checkinout/ExpressCheckout'
export { default as OthersScreen } from './other-request/OtherRequest.screen'
export { default as SafeBoxScreen } from './vault/SafeDeposit.screen'
// renting screen
export { default as RentingScreen } from './renting/Renting.screen'
// room service screen
export { default as RoomService } from './room-service/Service.screen'
export { default as MiniBarScreen } from './room-service/Minibar.screen'
export { default as CartScreenRoomService } from './room-service/CartRoomService.screen'
export { default as PhoneDirectoryScreen } from './room-service/PhoneDirectory.screen'
export { default as ReportIncidenceScreen } from './room-service/IncidenceReport.screen'
