import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'

import { Image } from 'styles/checkinout.module'

export default function CheckIn() {
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
        content={'check in at least 15:00'}
        size={16}
        weight={500}
        up={'cap'}
      />

      <Text
        content={
          'you can store you luggage with us and enjoy the hotel facilities until your room gets ready'
        }
        color={'gray'}
        weight={400}
        size={16}
      />

      <Text
        content={'you are welcome to check-in early if the room is available'}
        color={'gray'}
        weight={400}
        size={16}
      />
      <Text
        content={'additional fees for early check-in'}
        weight={500}
        size={14}
      />

      <Text
        content={'you are welcome to check-in early if the room is available'}
        color={'gray'}
        weight={400}
        size={16}
      />

      <Button title={'hotel Online check in'} />
    </AreaView>
  )
}
