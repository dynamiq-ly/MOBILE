import { Linking } from 'react-native'
import Icon from 'react-native-remix-icon'
import { CartView } from 'styles/cart.module'
import { fontPixel } from 'utils/normalization'

/**
 *
 * @param0 {string} url
 * @param1 {string} icon
 * @param2 {string} color
 */
export default function OpenLinkButton({ url, icon, color }) {
  return (
    <CartView onPress={() => Linking.openURL(url)}>
      <Icon name={icon} size={fontPixel(24)} color={color} />
    </CartView>
  )
}
