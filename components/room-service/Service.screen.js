import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import ButtonGroupSide from 'components/button/ButtonGroupSide'

import { Dimensions, TouchableOpacity, View } from 'react-native'

import { lang } from 'lang/services.i18n'
import { __t } from 'store/LocalizationProvider'
import { StyledTagCards } from '~/styles/cards.module'

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
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 24 }}>
        {menus.map((el, index) => (
          <StyledTagCards
            key={index}
            style={{
              width: (Dimensions.get('screen').width - 42) / menus.length,
              height: 100,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 1,
            }}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate(el.path)}>
              <Icon name={el.icon} size={30} color={el.color} />
              <Text size={16} up={'cap'} weight={400} content={t(el.name)} />
            </TouchableOpacity>
          </StyledTagCards>
        ))}
      </View>

      <Text size={18} content={'you have access to a complete digital room services where you can find what you were missing in your room.'} />
      <View style={{ marginBottom: 10 }} />
      <View style={{ marginBottom: 15 }} />
      <ButtonGroupSide array={array.map((el) => ({ ...el, name: t(el.name) }))} index={2} callback={navigation} />
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
