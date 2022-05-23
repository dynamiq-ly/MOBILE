import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import { Image } from 'styles/image.module'
import Button from 'components/button/Button'

export default function SafeBoxScreen() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://cdni.iconscout.com/illustration/free/thumb/vault-1970015-1662894.png',
        }}
      />
      <Text
        size={18}
        content={'each room has a safe inside the closed, insured 2,500 euros.'}
      />
      <Text
        size={16}
        color={'gray'}
        content={
          'the hotel will not be responsible for missing objects or values that have not been deposited into the safe.'
        }
      />
      <Button title={'Request vault key'} />
    </AreaView>
  )
}
