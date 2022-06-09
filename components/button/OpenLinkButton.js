import Icon from 'react-native-remix-icon'
import { CartView } from 'styles/cart.module'
import { fontPixel } from 'utils/normalization'

/**
 *
 * @param0 {() => {}} func
 * @param0 {string} icon
 */
export default function OpenLinkButton({ func, icon }) {
  return (
    <CartView onPress={func}>
      <Icon name={icon} size={fontPixel(32)} />
    </CartView>
  )
}
