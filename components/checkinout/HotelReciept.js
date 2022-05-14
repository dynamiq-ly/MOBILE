import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'

import { Image } from 'styles/checkinout.module'

export default function HotelReciept() {
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
        content={
          'you can get your hotel reciept before your departure time. just request it with the button below.'
        }
        color={'gray'}
        weight={400}
        size={16}
      />

      <Button title={'hotel reciept'} />
    </AreaView>
  )
}
