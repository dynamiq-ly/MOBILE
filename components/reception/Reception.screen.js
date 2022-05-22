import Text from 'components/text/Text'
import CloseHeader from 'components/header/CloseHeader'
import GroupButton from 'components/button/ButtonGroup'

import { Image, View, Container, HeadingWrapper } from 'styles/Reception.module'

export default function ReceptionScreen({ navigation }) {
  return (
    <View>
      <CloseHeader />
      <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/one-two-young-hotel-receptionists-standing-by-counter-looking-touchpad-display-consulting-client-phone-against-colleague_274679-18500.jpg',
        }}
      />
      <Container>
        <HeadingWrapper>
          <Text content={'how can we help'} size={28} weight={600} up={'cap'} />
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
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-home-3-line',
    name: 'room upgrade',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-home-gear-line',
    name: 'extend your stay',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-alarm-line',
    name: 'Alarm Clock',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-taxi-line',
    name: 'Transportations',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-safe-2-line',
    name: 'Safe Deposit',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-safe-2-line',
    name: 'Vault',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-contrast-drop-line',
    name: 'pool towels',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-parking-line',
    name: 'parking lot',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-hospital-line',
    name: 'medical assistance',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-swap-line',
    name: 'money exchange',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-bank-line',
    name: 'Banks & ATMs',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-user-line',
    name: 'tour operators',
    path: '',
    color: '#118181',
  },
  {
    icon: 'ri-chat-settings-line',
    name: 'other request',
    path: 'menu-tab-stack-other-request',
    color: '#118181',
  },
]
