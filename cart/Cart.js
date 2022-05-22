import { Text } from 'react-native'
import Icon from 'react-native-remix-icon'
import { fontPixel } from 'utils/normalization'
import { BadgeView, CartBadge, CartView } from 'styles/cart.module'

export default function Cart({ number = 0 }) {
  return (
    <CartView>
      <Icon name='ri-shopping-basket-line' size={fontPixel(32)} />
      <BadgeView>
        {number > 0 && (
          <CartBadge>
            <Text style={{ color: '#fff', fontSize: fontPixel(14) }}>
              {number}
            </Text>
          </CartBadge>
        )}
      </BadgeView>
    </CartView>
  )
}
