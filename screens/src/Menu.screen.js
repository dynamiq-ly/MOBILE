import AreaView from 'utils/TabAreaView'
import { GroupButton } from 'components/export'

export default function MenuScreen({ navigation }) {
  return (
    <AreaView mode={'dark'}>
      <GroupButton array={menuArray1} index={1} callback={navigation} />
      <GroupButton array={menuArray2} index={2} callback={navigation} />
      <GroupButton array={menuArray3} index={3} callback={navigation} />
      <GroupButton array={menuArray4} index={4} callback={navigation} />
      <GroupButton array={menuArray5} index={5} callback={navigation} />
      <GroupButton array={menuArray6} index={6} callback={navigation} />
    </AreaView>
  )
}

// generate random color each time the app is open
// not good idea
// Math.floor(Math.random()*16777215).toString(16)
const menuArray1 = [
  {
    icon: 'ri-shield-user-line',
    name: 'Login',
    path: 'login-initial-stack',
    color: '#424AB4',
  },
  {
    icon: 'ri-information-line',
    name: 'About Hotel',
    path: '',
    color: '#BABD42',
  },
  {
    icon: 'ri-hotel-line',
    name: 'Our Hotels',
    path: '',
    color: '#2A2550',
  },
  {
    icon: 'ri-global-line',
    name: 'Web Check In',
    path: '',
    color: '#e11d48',
  },
]

const menuArray2 = [
  {
    icon: 'ri-goblet-line',
    name: 'bars',
    path: 'menu-tab-stack-bar-list',
    color: '#006E7F',
  },
  {
    icon: 'ri-restaurant-line',
    name: 'restaurants',
    path: 'menu-tab-stack-restaurant-list',
    color: '#57534e',
  },

  {
    icon: 'ri-run-line',
    name: 'Entertainement',
    path: '',
    color: '#854d0e',
  },
]

const menuArray3 = [
  {
    icon: 'ri-question-line',
    name: 'How Can We Help',
    path: '',
    color: '#ee4444',
  },
  {
    icon: 'ri-home-wifi-line',
    name: 'room service',
    path: '',
    color: '#be185d',
  },
  {
    icon: 'ri-hotel-bed-line',
    name: 'rooms',
    path: '',
    color: '#85586F',
  },
]

const menuArray4 = [
  {
    icon: 'ri-drop-line',
    name: 'Swimming pools',
    path: '',
    color: '#6FDFDF',
  },
  {
    icon: 'ri-heart-pulse-line',
    name: 'Spa and Wellness',
    path: '',
    color: '#ee0000',
  },
  {
    icon: 'ri-football-line',
    name: 'Gym',
    path: '',
    color: '#446A46',
  },
]

const menuArray5 = [
  {
    icon: 'ri-caravan-line',
    name: 'Renting',
    path: '',
    color: '',
  },
  {
    icon: 'ri-user-smile-line',
    name: 'Excursion and activities',
    path: '',
    color: '#FD6B35',
  },
  {
    icon: 'ri-map-2-line',
    name: 'Point of interest',
    path: '',
    color: '#B4E197',
  },
  {
    icon: 'ri-store-line',
    name: 'Shops',
    path: '',
    color: '#827397',
  },
]

const menuArray6 = [
  {
    icon: 'ri-message-line',
    name: 'help and Contact',
    path: 'menu-tab-stack-safety',
    color: '#6b21a8',
  },
  {
    icon: 'ri-stethoscope-line',
    name: 'safety',
    path: 'menu-tab-stack-safety',
    color: '#10b981',
  },
  {
    icon: 'ri-Settings-line',
    name: 'setting',
    path: 'setting-screen',
    color: '#0ea5e9',
  },
]
