import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'

import { Image } from 'styles/checkinout.module'

export default function LateCheckout() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://roomkeypms.com/wp-content/uploads/2018/04/RoomKeys-Guide-to-GLC_-Departure-and-Post-Stay.jpg',
        }}
      />
      <Text
        content={'Welcome to BEIA hotel'}
        size={28}
        weight={600}
        up={'cap'}
      />
      <Text
        content={'you can extend your checkout until 17:00.'}
        size={16}
        weight={400}
        color={'gray'}
      />
      <Text
        content={'late checkout fees may apply up to 30$ for two people.'}
        size={16}
        weight={400}
        color={'gray'}
      />
      <Button title={'hotel late check out'} />
    </AreaView>
  )
}
