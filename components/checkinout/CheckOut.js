import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'

import { Image } from 'styles/checkinout.module'

export default function CheckOut() {
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

      <Text content={'check out max 12:00'} size={16} weight={500} up={'cap'} />

      <Text
        content={'you can store you luggage with us when checking out.'}
        color={'gray'}
        weight={400}
        size={16}
      />

      <Text
        content={
          'your online checkout shoudl be 24h before your departure time.'
        }
        color={'gray'}
        weight={400}
        size={16}
      />

      <Button title={'hotel Online check in'} />
    </AreaView>
  )
}
