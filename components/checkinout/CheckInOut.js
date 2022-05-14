import AreaView from 'utils/TabAreaView'
import { Image } from 'styles/checkinout.module'
import ButtonGroup from 'components/button/ButtonGroup'

export default function CheckInOut({ navigation }) {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://s.abcnews.com/images/Travel/hotel-checkout-stock-gty-rc-180618_hpMain_16x9_608.jpg',
        }}
      />
      <ButtonGroup array={array1} index={1} callback={navigation} />
      <ButtonGroup array={array2} index={2} callback={navigation} />
    </AreaView>
  )
}

const array1 = [
  {
    icon: 'ri-key-line',
    name: 'Check in',
    path: 'menu-tab-stack-check-in',
    color: '#17A398',
  },
  {
    icon: 'ri-logout-circle-line',
    name: 'Check out',
    path: 'menu-tab-stack-check-out',
    color: '#17A398',
  },
]

const array2 = [
  {
    icon: 'ri-login-box-line',
    name: 'pre online Check in',
    path: 'menu-tab-stack-check-in',
    color: '#17A398',
  },
  {
    icon: 'ri-arrow-left-circle-line',
    name: 'express Check out',
    path: 'menu-tab-stack-express-check-out',
    color: '#17A398',
  },
  {
    icon: 'ri-history-line',
    name: 'late Check out',
    path: 'menu-tab-stack-late-check-out',
    color: '#17A398',
  },
  {
    icon: 'ri-file-line',
    name: 'get hotel reciept',
    path: 'menu-tab-stack-hotel-reciept',
    color: '#17A398',
  },
]
