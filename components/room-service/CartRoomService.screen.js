import Text from 'components/text/Text'
import { View } from 'styles/detail.module'
import AreaView from '~/utils/TabAreaView'

export default function CartRommServiceScreen() {
  return (
    <View>
      <AreaView>
        <Text content={JSON.stringify(cartService)} />
      </AreaView>
    </View>
  )
}
