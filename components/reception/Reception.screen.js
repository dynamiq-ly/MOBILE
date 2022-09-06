import Text from 'components/text/Text'
import CloseHeader from 'components/header/CloseHeader'
import GroupButton from 'components/button/ButtonGroup'

import { View, Container, HeadingWrapper } from 'styles/Reception.module'
import { RadiusView, Image } from 'styles/detail.module'

export default function ReceptionScreen({ navigation }) {
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
            <Text
              content={'how can we help'}
              size={28}
              weight={600}
              up={'cap'}
            />
            <Text
              content={
                'From all inclusive to half boarding we trying to deliver all the possbile services.'
              }
              color={'gray'}
              weight={400}
              size={16}
            />
          </HeadingWrapper>
          <GroupButton array={array} index={1} callback={navigation} />
        </Container>
      </RadiusView>
    </View>
  )
}

const array = [
  {
    icon: 'ri-folder-keyhole-line',
    name: 'Check in & out',
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
    name: 'room upgrade',
    path: 'menu-tab-stack-room-service-room-upgrade',
    color: '#118181',
  },
  {
    icon: 'ri-home-gear-line',
    name: 'extend your stay',
    path: 'menu-tab-stack-room-service-extand-stay',
    color: '#118181',
  },
  {
    icon: 'ri-alarm-line',
    name: 'Alarm Clock',
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
    name: 'Safe Deposit',
    path: 'menu-tab-stack-safe-box',
    color: '#118181',
  },
  {
    icon: 'ri-shirt-line',
    name: 'laguage Vault',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-contrast-drop-line',
    name: 'pool towels',
    path: 'menu-tab-stack-pool-towels',
    color: '#118181',
  },
  {
    icon: 'ri-parking-line',
    name: 'parking lot',
    path: 'menu-tab-stack-parking',
    color: '#118181',
  },
  {
    icon: 'ri-hospital-line',
    name: 'medical assistance',
    path: 'menu-tab-stack-medical-assistance',
    color: '#118181',
  },
  {
    icon: 'ri-swap-line',
    name: 'money exchange',
    path: 'menu-tab-stack-money-exchange',
    color: '#118181',
  },
  {
    icon: 'ri-bank-line',
    name: 'Banks & ATMs',
    path: 'menu-tab-stack-bank-and-atm',
    color: '#118181',
  },
  {
    icon: 'ri-user-line',
    name: 'tour operators',
    path: 'menu-tab-stack-tour-operator',
    color: '#118181',
  },
  {
    icon: 'ri-chat-settings-line',
    name: 'other request',
    path: 'menu-tab-stack-other-request',
    color: '#118181',
  },
]
