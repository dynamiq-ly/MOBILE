import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'

import { SafeAreaRowWrapperDetail, View } from 'styles/detail.module'
import { __cart } from 'store/CartManagerProvider'
import { CheckOutButton } from 'styles/button.module'
import { PhoneDirectoryRow } from '~/styles/list.module'
import PlusMinusCard from '../cards/PlusMinusCard'

export default function CartRommServiceScreen() {
  const { cartItems, total } = __cart()

  return (
    <View>
      <AreaView>
        {cartItems.map((el) => (
          <PhoneDirectoryRow
            key={el.id}
            style={{ marginTop: 0, flexDirection: 'column' }}>
            <SafeAreaRowWrapperDetail style={{ alignItems: 'flex-start' }}>
              <Text content={el.name} size={16} weight={600} />
              <Text content={`$${el.price}`} color={'dominant'} weight={600} />
            </SafeAreaRowWrapperDetail>
            <Text content={`${el.quantity} items`} color={'gray'} />
          </PhoneDirectoryRow>
        ))}
      </AreaView>

      <CheckOutButton>
        <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
          <Text
            content={'checkout'}
            color={'white'}
            up={'cap'}
            size={20}
            weight={600}
          />
          <Icon name={'ri-checkbox-multiple-fill'} color={'#fff'} size={20} />
        </SafeAreaRowWrapperDetail>
        <SafeAreaRowWrapperDetail
          style={{ alignItems: 'center', marginTop: 2 }}>
          <Text content={'total :'} up={'cap'} color={'white'} size={20} />
          <Text content={`$${total}`} color={'white'} size={20} />
        </SafeAreaRowWrapperDetail>
      </CheckOutButton>
    </View>
  )
}
