import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import ButtonGroup from 'components/button/ButtonGroup'

import { View } from 'react-native'
import { Image } from 'styles/image.module'
import { fontPixel } from '~/utils/normalization'

export default function GymScreen({ navigation }) {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/photos/empty-gym-picture-id1132006407?k=20&m=1132006407&s=612x612&w=0&h=Z7nJu8jntywb9jOhvjlCS7lijbU4_hwHcxoVkxv77sg=',
        }}
      />
      <View style={{ marginTop: 10 }} />
      <Text content={'machkel hotel gym'} up={'cap'} size={24} weight={600} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={'ri-time-line'}
          size={fontPixel(20)}
          style={{ marginRight: 5 }}
        />
        <Text content={'8:00am - 17:00pm'} up={'up'} size={16} weight={400} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={'ri-map-pin-line'}
          size={fontPixel(20)}
          style={{ marginRight: 5 }}
        />
        <Text content={'first floor'} up={'cap'} size={16} weight={400} />
      </View>
      <View style={{ marginTop: 10 }} />
      <Text
        size={16}
        up={'cap'}
        weight={400}
        color={'gray'}
        content={
          'California Gym, The land of fitness, est la Première chaîne de clubs de fitness en Tunisie avec 10 clubs répartis sur le Grand Tunis et Sousse.'
        }
      />
      <View style={{ marginTop: 14 }} />
      <ButtonGroup array={gym_array} index={1} callback={navigation} />
    </AreaView>
  )
}

const gym_array = [
  {
    name: 'Gym Equipment',
    path: 'menu-tab-stack-gym-equipement',
    icon: 'ri-bell-line',
    color: '#4B8673',
  },
  {
    name: 'Gym Booking system',
    path: 'menu-tab-stack-gym-booking',
    icon: 'ri-bookmark-2-line',
    color: '#4B8673',
  },
  {
    name: 'gym use of terms',
    path: 'menu-tab-stack-gym-use-terms',
    icon: 'ri-file-line',
    color: '#4B8673',
  },
]
