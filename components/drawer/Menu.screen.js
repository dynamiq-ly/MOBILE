import Text from 'components/text/Text'
import SafeAreaView from 'utils/SafeAreaView'

import { useEffect, useState } from 'react'
import { __auth } from 'store/AuthSusbcribeProvider'
import { GroupButton, SearchInput, ProfileButtonCard } from 'components/export'

import { lang } from 'lang/menu.i18n'
import { __t } from 'store/LocalizationProvider'

export default function MenuScreen({ navigation }) {
  const { isLoggedIn } = __auth()
  const [text, setText] = useState('')

  const { local } = __t()

  const t = (key) => {
    const translation = lang[local][key]
    if (!translation) {
      return key
    }
    return translation
  }

  const [arr1, setArr1] = useState(menuArray1)
  const [arr2, setArr2] = useState(menuArray2)
  const [arr3, setArr3] = useState(menuArray3)
  const [arr4, setArr4] = useState(menuArray4)
  const [arr5, setArr5] = useState(menuArray5)
  const [arr6, setArr6] = useState(menuArray6)

  useEffect(() => {
    setArr1(menuArray1.map((el) => ({ ...el, name: t(el.name) })))
    setArr2(menuArray2.map((el) => ({ ...el, name: t(el.name) })))
    setArr3(menuArray3.map((el) => ({ ...el, name: t(el.name) })))
    setArr4(menuArray4.map((el) => ({ ...el, name: t(el.name) })))
    setArr5(menuArray5.map((el) => ({ ...el, name: t(el.name) })))
    setArr6(menuArray6.map((el) => ({ ...el, name: t(el.name) })))
  }, [local])

  const filterText = () => {
    setArr1(
      menuArray1
        .map((el) => ({ ...el, name: t(el.name) }))
        .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    )
    setArr2(
      menuArray2
        .map((el) => ({ ...el, name: t(el.name) }))
        .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    )
    setArr3(
      menuArray3
        .map((el) => ({ ...el, name: t(el.name) }))
        .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    )
    setArr4(
      menuArray4
        .map((el) => ({ ...el, name: t(el.name) }))
        .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    )
    setArr5(
      menuArray5
        .map((el) => ({ ...el, name: t(el.name) }))
        .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    )
    setArr6(
      menuArray6
        .map((el) => ({ ...el, name: t(el.name) }))
        .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    )
  }

  useEffect(() => {
    return filterText()
  }, [text])

  return (
    <SafeAreaView>
      {isLoggedIn && text.length === 0 && (
        <ProfileButtonCard navigation={navigation} animate={text} />
      )}
      <SearchInput value={text} onChange={setText} />
      <GroupButton array={arr1} index={1} callback={navigation} />
      <GroupButton array={arr2} index={2} callback={navigation} />
      <GroupButton array={arr3} index={3} callback={navigation} />
      <GroupButton array={arr4} index={4} callback={navigation} />
      <GroupButton array={arr5} index={5} callback={navigation} />
      <GroupButton array={arr6} index={6} callback={navigation} />
    </SafeAreaView>
  )
}

// generate random color each time the app is open
// not good idea
// Math.floor(Math.random()*16777215).toString(16)
const menuArray1 = [
  {
    icon: 'ri-information-line',
    name: 'About_Hotel',
    path: 'menu-tab-stack-about-hotels',
    color: '#BABD42',
  },
  {
    icon: 'ri-hotel-line',
    name: 'Our_Hotels',
    path: 'menu-tab-stack-our-hotels',
    color: '#2A2550',
  },
  {
    icon: 'ri-global-line',
    name: 'Web_Check_In',
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
    name: 'How_Can_We_Help',
    path: 'menu-tab-stack-how-can-we-help',
    color: '#ee4444',
  },
  {
    icon: 'ri-home-wifi-line',
    name: 'rooms_services',
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
    name: 'Swimming_pools',
    path: 'menu-tab-stack-swimming-pool',
    color: '#6FDFDF',
  },
  {
    icon: 'ri-heart-pulse-line',
    name: 'Spa_and_Wellness',
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
    name: 'Excursion_and_activities',
    path: 'menu-tab-stack-excursions',
    color: '#FD6B35',
  },
  {
    icon: 'ri-map-2-line',
    name: 'Points_of_interest',
    path: 'menu-tab-stack-point-of-interest',
    color: '#B4E197',
  },
  {
    icon: 'ri-store-line',
    name: 'Shops',
    path: 'menu-tab-stack-shops',
    color: '#827397',
  },
]

const menuArray6 = [
  {
    icon: 'ri-message-line',
    name: 'help_and_Contact',
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
    path: 'menu-tab-stack-setting',
    color: '#0ea5e9',
  },
]
