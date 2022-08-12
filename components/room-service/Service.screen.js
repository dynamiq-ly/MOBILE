import { View } from 'react-native'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import { Image } from 'styles/image.module'
import ButtonGroup from 'components/button/ButtonGroup'
import ButtonGroupSide from 'components/button/ButtonGroupSide'

export default function Services({ navigation }) {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/videos/ordering-room-service-video-id1083647268?s=640x640',
        }}
      />
      <View style={{ marginBottom: 10 }} />
      <Text
        size={18}
        content={
          'you have access to a complete digital room services where you can find what you were missing in your room.'
        }
      />
      <View style={{ marginBottom: 15 }} />
      <ButtonGroup array={menus} index={1} callback={navigation} />
      <ButtonGroupSide array={array} index={2} callback={navigation} />
    </AreaView>
  )
}

const menus = [
  {
    name: 'food service',
    color: '#A91079',
    icon: 'ri-restaurant-line',
    path: 'menu-tab-stack-room-service-food-service',
  },
  {
    name: 'minibar service',
    color: '#A91079',
    icon: 'ri-goblet-line',
    path: 'menu-tab-stack-room-service-mini-bar',
  },
]

const array = [
  {
    name: 'phone directory',
    path: 'menu-tab-stack-room-service-phone-directory',
  },
  {
    name: 'incidence report',
    path: 'menu-tab-stack-room-service-incidence-report',
  },
  { name: 'room requests', path: 'menu-tab-stack-room-service-room-request' },
  { name: 'room upgrade', path: '' },
  { name: 'housekeeping', path: 'menu-tab-stack-housekeeping' },
  { name: 'laundry', path: 'menu-tab-stack-laundry' },
  { name: 'towels', path: 'menu-tab-stack-towels' },
  { name: 'television', path: '' },
  { name: 'safe deposit box', path: 'menu-tab-stack-safe-box' },
  {
    name: 'electricity and cables',
    path: 'menu-tab-stack-room-service-electricity',
  },
  {
    name: 'air conditioner',
    path: 'menu-tab-stack-room-service-airconditioner',
  },
  { name: 'hair dryer', path: 'menu-tab-stack-room-service-hairdryer' },
]
