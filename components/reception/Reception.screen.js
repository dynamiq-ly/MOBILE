import Text from 'components/text/Text'
import CloseHeader from 'components/header/CloseHeader'
import GroupButton from 'components/button/ButtonGroup'

import { View, Container, HeadingWrapper } from 'styles/Reception.module'
import { RadiusView, Image } from 'styles/detail.module'

import { lang } from 'lang/reception.i18n'
import { __t } from 'store/LocalizationProvider'

export default function ReceptionScreen({ navigation }) {
  const { local } = __t()

  const t = (key) => {
    const translation = lang[local][key]
    if (!translation) {
      return key
    }
    return translation
  }

  return (
    <View>
      <CloseHeader />
      <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/one-two-young-hotel-receptionists-standing-by-counter-looking-touchpad-display-consulting-client-phone-against-colleague_274679-18500.jpg',
        }}
      />
      <RadiusView>
        <Container>
          <HeadingWrapper>
            <Text content={t('header')} size={28} weight={600} up={'cap'} />
            <Text
              content={t('summary')}
              color={'gray'}
              weight={400}
              size={16}
            />
          </HeadingWrapper>
          <GroupButton
            array={array.map((el) => ({ ...el, name: t(el.name) }))}
            index={1}
            callback={navigation}
          />
        </Container>
      </RadiusView>
    </View>
  )
}

const array = [
  {
    icon: 'ri-folder-keyhole-line',
    name: 'Check_in_out',
    path: 'menu-tab-stack-check-in-out',
    color: '#118181',
  },
  {
    icon: 'ri-wifi-line',
    name: 'Connectivity',
    path: 'menu-tab-stack-connectivity',
    color: '#118181',
  },
  {
    icon: 'ri-home-3-line',
    name: 'room_upgrade',
    path: 'menu-tab-stack-room-service-room-upgrade',
    color: '#118181',
  },
  {
    icon: 'ri-home-gear-line',
    name: 'extend_your_stay',
    path: 'menu-tab-stack-room-service-extand-stay',
    color: '#118181',
  },
  {
    icon: 'ri-alarm-line',
    name: 'Alarm_Clock',
    path: 'menu-tab-stack-alarm',
    color: '#118181',
  },
  {
    icon: 'ri-taxi-line',
    name: 'Transportations',
    path: 'menu-tab-stack-transportation',
    color: '#118181',
  },
  {
    icon: 'ri-safe-2-line',
    name: 'Safe_Deposit',
    path: 'menu-tab-stack-safe-box',
    color: '#118181',
  },
  {
    icon: 'ri-shirt-line',
    name: 'laguage_Vault',
    path: 'menu-tab-stack-laguage',
    color: '#118181',
  },
  {
    icon: 'ri-contrast-drop-line',
    name: 'pool_towels',
    path: 'menu-tab-stack-pool-towels',
    color: '#118181',
  },
  {
    icon: 'ri-parking-line',
    name: 'parking_lot',
    path: 'menu-tab-stack-parking',
    color: '#118181',
  },
  {
    icon: 'ri-hospital-line',
    name: 'medical_assistance',
    path: 'menu-tab-stack-medical-assistance',
    color: '#118181',
  },
  {
    icon: 'ri-swap-line',
    name: 'money_exchange',
    path: 'menu-tab-stack-money-exchange',
    color: '#118181',
  },
  {
    icon: 'ri-bank-line',
    name: 'Banks_ATMs',
    path: 'menu-tab-stack-bank-and-atm',
    color: '#118181',
  },
  {
    icon: 'ri-user-line',
    name: 'tour_operators',
    path: 'menu-tab-stack-tour-operator',
    color: '#118181',
  },
  {
    icon: 'ri-chat-settings-line',
    name: 'other_request',
    path: 'menu-tab-stack-other-request',
    color: '#118181',
  },
]
