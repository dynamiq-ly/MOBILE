import { useEffect, useState } from 'react'
import AreaView from 'utils/TabAreaView'
import { GroupButton, SearchInput } from 'components/export'
import { Text } from 'react-native'

export default function MenuScreen({ navigation }) {
  const [text, setText] = useState('')

  const [arr1, setArr1] = useState(menuArray1)
  const [arr2, setArr2] = useState(menuArray2)
  const [arr3, setArr3] = useState(menuArray3)
  const [arr4, setArr4] = useState(menuArray4)
  const [arr5, setArr5] = useState(menuArray5)
  const [arr6, setArr6] = useState(menuArray6)

  filterText = () => {
    setArr1(
      menuArray1.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    )
    setArr2(
      menuArray2.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    )
    setArr3(
      menuArray3.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    )
    setArr4(
      menuArray4.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    )
    setArr5(
      menuArray5.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    )
    setArr6(
      menuArray6.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  useEffect(() => {
    return filterText()
  }, [text])

  return (
    <AreaView>
      <SearchInput value={text} onChange={setText} />
      <GroupButton array={arr1} index={1} callback={navigation} />
      <GroupButton array={arr2} index={2} callback={navigation} />
      <GroupButton array={arr3} index={3} callback={navigation} />
      <GroupButton array={arr4} index={4} callback={navigation} />
      <GroupButton array={arr5} index={5} callback={navigation} />
      <GroupButton array={arr6} index={6} callback={navigation} />
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
    path: 'menu-tab-stack-check-in',
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
    path: 'menu-tab-stack-entertaining',
    color: '#854d0e',
  },
]

const menuArray3 = [
  {
    icon: 'ri-question-line',
    name: 'How Can We Help',
    path: 'menu-tab-stack-how-can-we-help',
    color: '#ee4444',
  },
  {
    icon: 'ri-home-wifi-line',
    name: 'room Services',
    path: 'menu-tab-stack-room-service',
    color: '#be185d',
  },
  {
    icon: 'ri-hotel-bed-line',
    name: 'rooms',
    path: 'menu-tab-stack-rooms',
    color: '#85586F',
  },
]

const menuArray4 = [
  {
    icon: 'ri-drop-line',
    name: 'Swimming pools',
    path: 'menu-tab-stack-swimming-pool',
    color: '#6FDFDF',
  },
  {
    icon: 'ri-heart-pulse-line',
    name: 'Spa and Wellness',
    path: 'menu-tab-stack-span-wellness',
    color: '#ee0000',
  },
  {
    icon: 'ri-football-line',
    name: 'Gym',
    path: 'menu-tab-stack-gym',
    color: '#446A46',
  },
]

const menuArray5 = [
  {
    icon: 'ri-caravan-line',
    name: 'Renting',
    path: 'menu-tab-stack-renting',
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
    name: 'Points of interest',
    path: 'menu-tab-stack-point-of-interest',
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
