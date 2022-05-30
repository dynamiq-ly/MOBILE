import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { View } from 'react-native'
import { Image } from 'styles/image.module'

export default function ParkingScreen() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/108671/screenshots/3367141/media/1908b5a98769d865a38e590b9093b2c0.jpg?compress=1&resize=800x600&vertical=top',
        }}
      />
      <View style={{ marginBottom: 15 }} />
      <Text
        size={18}
        content={
          'We have the pleasure to offer our guests a parking place located 100 meters from our Hotel.'
        }
      />
      <Text
        size={16}
        color={'gray'}
        content={
          'Do you have an electric car? Do not worry. In the area around the hotel there are several good options for charging your electric car or plug-in hybrid.'
        }
      />
    </AreaView>
  )
}
