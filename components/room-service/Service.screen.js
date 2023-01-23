import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import ButtonGroup from 'components/button/ButtonGroup'
import ButtonGroupSide from 'components/button/ButtonGroupSide'

import { View } from 'react-native'
import { Image } from 'styles/image.module'

import { lang } from 'lang/services.i18n'
import { __t } from 'store/LocalizationProvider'

export default function Services({ navigation }) {
  const { local } = __t()

  const t = (key) => {
    const translation = lang[local][key]
    if (!translation) {
      return key
    }
    return translation
  }

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
      <ButtonGroup
        array={menus.map((el) => ({ ...el, name: t(el.name) }))}
        index={1}
        callback={navigation}
      />
      <ButtonGroupSide
        array={array.map((el) => ({ ...el, name: t(el.name) }))}
        index={2}
        callback={navigation}
      />
    </AreaView>
  )
}

const menus = [
  {
    name: 'food_rooms_services',
    color: '#A91079',
    icon: 'ri-restaurant-line',
    path: 'menu-tab-stack-room-service-food-service',
  },
  {
    name: 'drinks_rooms_services',
    color: '#A91079',
    icon: 'ri-goblet-line',
    path: 'menu-tab-stack-room-service-drinks-service',
  },
  {
    name: 'minibar_service',
    color: '#A91079',
    icon: 'ri-fridge-line',
    path: 'menu-tab-stack-room-service-mini-bar',
  },
]

const array = [
  {
    name: 'phone_directory',
    path: 'menu-tab-stack-room-service-phone-directory',
  },
  {
    name: 'incidence_report',
    path: 'menu-tab-stack-room-service-incidence-report',
  },
  { name: 'room_requests', path: 'menu-tab-stack-room-service-room-request' },
  { name: 'room_upgrade', path: 'menu-tab-stack-room-service-room-upgrade' },
  { name: 'housekeeping', path: 'menu-tab-stack-housekeeping' },
  { name: 'laundry', path: 'menu-tab-stack-laundry' },
  { name: 'towels', path: 'menu-tab-stack-towels' },
  { name: 'television', path: 'menu-tab-stack-room-service-television' },
  { name: 'safe_deposit_box', path: 'menu-tab-stack-safe-box' },
  {
    name: 'electricity_and_cables',
    path: 'menu-tab-stack-room-service-electricity',
  },
  {
    name: 'air_conditioner',
    path: 'menu-tab-stack-room-service-airconditioner',
  },
  { name: 'hair_dryer', path: 'menu-tab-stack-room-service-hairdryer' },
]
