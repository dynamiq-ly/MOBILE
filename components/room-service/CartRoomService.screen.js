import Text from 'components/text/Text'
import { View } from 'styles/detail.module'
import { __cart } from '~/store/CartManagerProvider'
import AreaView from '~/utils/TabAreaView'

export default function CartRommServiceScreen() {
  const { cartItems } = __cart()

  return (
    <View>
      <AreaView>
        <Text content={JSON.stringify(cartItems)} />
      </AreaView>
    </View>
  )
}
