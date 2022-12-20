import Icon from 'react-native-remix-icon'

import { Text } from 'react-native'
import { fontPixel } from 'utils/normalization'
import { _retriveValueByKey, _removeValueByKey } from 'utils/asyncStorage'
import { BadgeView, CartBadge, CartView } from 'styles/cart.module'

import { __cart } from 'store/CartManagerProvider'

export default function Cart({ path }) {
  const { cartItems } = __cart()

  return (
    <CartView onPress={path}>
      <Icon name='ri-shopping-basket-line' size={fontPixel(32)} />
      <BadgeView>
        <CartBadge>
          <Text style={{ color: '#fff', fontSize: fontPixel(14) }}>
            {cartItems.length}
          </Text>
        </CartBadge>
      </BadgeView>
    </CartView>
  )
}
