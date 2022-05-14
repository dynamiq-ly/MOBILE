import AreaView from 'utils/TabAreaView'
import { GroupButton } from 'components/export'

export default function MenuScreen({ navigation }) {
  return (
    <AreaView mode={'dark'}>
      <GroupButton array={menuArray} index={1} callback={navigation} />
      <GroupButton array={menuArray2} index={2} callback={navigation} />
    </AreaView>
  )
}

// generate random color each time the app is open
// not good idea
// Math.floor(Math.random()*16777215).toString(16)
const menuArray = [
  {
    icon: 'ri-question-line',
    name: 'reception',
    path: 'reception-screen',
    color: '#ee4444',
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

const menuArray2 = [
  {
    icon: 'ri-restaurant-line',
    name: 'restaurants',
    path: 'menu-tab-stack-restaurant-list',
    color: '#57534e',
  },
  {
    icon: 'ri-goblet-line',
    name: 'bars',
    path: 'menu-tab-stack-bar-list',
    color: '#475569',
  },
  {
    icon: 'ri-home-wifi-line',
    name: 'room service',
    path: 'reception-screen',
    color: '#be185d',
  },
  {
    icon: 'ri-run-line',
    name: 'excursions',
    path: 'reception-screen',
    color: '#854d0e',
  },
  {
    icon: 'ri-caravan-line',
    name: 'renting',
    path: 'setting-screen',
    color: '',
  },
]
