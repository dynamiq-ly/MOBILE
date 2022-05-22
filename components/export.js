/**
 * @description moudlar components
 */
export { default as Text } from './text/Text'
export { default as Button } from './button/Button'
export { default as GroupButton } from './button/ButtonGroup'
export { default as Input } from './input/Input'

/**
 * @description custom header
 */
export { default as TextHeader } from './header/TextHeader'
export { default as StackHeader } from './header/StackHeader'
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
export { default as HowCanWeHelp } from './reception/Reception.screen'
export { default as CheckInOut } from './checkinout/CheckInOut'
export { default as CheckIn } from './checkinout/CheckIn'
export { default as CheckOut } from './checkinout/CheckOut'
export { default as ExpressCheckOut } from './checkinout/ExpressCheckout'
export { default as LateCheckOut } from './checkinout/LateCheckout'
export { default as HotelReciept } from './checkinout/HotelReciept'
export { default as OthersScreen } from './other-request/OtherRequest.screen'
// renting screen
export { default as RentingScreen } from './renting/Renting.screen'
// room service screen
export { default as RoomService } from './room-service/Service.screen'
export { default as MiniBarScreen } from './room-service/Minibar.screen'
