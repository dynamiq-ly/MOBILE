import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'

import { View } from 'react-native'
import { Image } from 'styles/image.module'

export default function SafeBoxScreen() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://cdni.iconscout.com/illustration/free/thumb/vault-1970015-1662894.png',
        }}
      />
      <View style={{ marginBottom: 10 }} />
      <Text
        size={18}
        content={'Each room has a safe inside the closed, insured 2,500 euros.'}
      />
      <View style={{ marginBottom: 5 }} />
      <Text
        size={16}
        color={'gray'}
        content={
          'The hotel will not be responsible for missing objects or values that have not been deposited into the safe.'
        }
      />
      <View style={{ marginBottom: 24 }} />
      <Button title={'Request vault key'} />
    </AreaView>
  )
}
