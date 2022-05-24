import { useState } from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-remix-icon'
import { fontPixel } from 'utils/normalization'
import { _retriveValueByKey, _removeValueByKey } from 'utils/asyncStorage'
import { BadgeView, CartBadge, CartView } from 'styles/cart.module'

export default function Cart({ name, path }) {
  const [count, setCount] = useState(3)

  return (
    <CartView onPress={path}>
      <Icon name='ri-shopping-basket-line' size={fontPixel(32)} />
      <BadgeView>
        {count > 0 && (
          <CartBadge>
            <Text style={{ color: '#fff', fontSize: fontPixel(14) }}>
              {count}
            </Text>
          </CartBadge>
        )}
      </BadgeView>
    </CartView>
  )
}
