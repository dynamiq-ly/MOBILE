import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'

import { CartView } from 'styles/cart.module'
import { fontPixel } from 'utils/normalization'

export default function AlarmScreen() {
  return <AreaView></AreaView>
}

/**
 * @description icon for favorit in point of interest
 * @returns {React.Component}
 */
export const AddAlarmScreenOptions = ({ func }) => {
  return (
    <CartView onPress={func}>
      <Icon name='ri-add-circle-line' size={fontPixel(24)} />
    </CartView>
  )
}
