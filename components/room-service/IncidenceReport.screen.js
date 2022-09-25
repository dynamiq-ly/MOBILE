import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Input from 'components/input/Input'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'
import DropDownPicker from 'react-native-dropdown-picker'

import { useState } from 'react'
import { View } from 'react-native'
import { palette } from 'themes/palette'
import { TextArea } from 'components/input/Input'
import { animated, useSpring } from '@react-spring/native'

export default function IncidenceReport() {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    ...array_incidence.map((el) => ({
      ...el,
      icon: () => <Icon name={'ri-tools-line'} />,
    })),
  ])

  const spring = useSpring({
    to: {
      marginBottom: open ? 225 : 15,
    },
    delay: open ? 150 : 300,
  })

  return (
    <AreaView nestedScrollEnabled={true}>
      <Text
        size={18}
        content={
          'if you come across any problem within your room please report it.'
        }
      />
      <View style={{ marginBottom: 15 }} />
      <DropDownPicker
        searchable
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode={'SCROLLVIEW'}
        style={{ borderWidth: 0 }}
        dropDownContainerStyle={{
          borderWidth: 0,
          backgroundColor: palette.primary.accent_0,
        }}
        searchContainerStyle={{
          borderWidth: 0,
          borderBottomWidth: 0,
        }}
        searchTextInputStyle={{
          height: 36,
          borderWidth: 0,
          backgroundColor: palette.primary.accent_100,
        }}
        listItemContainerStyle={{
          borderBottomWidth: 1,
          borderColor: palette.primary.accent_200,
        }}
      />
      <animated.View style={{ ...spring }} />
      <Text
        size={18}
        color={'gray'}
        content={'If there is multiple items please specify which one.'}
      />
      <Text
        size={14}
        color={'gray'}
        content={'*left, right, in the hall, bedroom'}
        style={{ marginTop: 10 }}
      />
      <Input icon={'ri-settings-line'} placeholder={'specify item location'} />
      <Text
        size={18}
        color={'gray'}
        content={'Do not forget to give a detailed report about the problem.'}
      />
      <Text
        size={14}
        color={'gray'}
        content={'*the lamp is not properly plugged.'}
        style={{ marginTop: 10 }}
      />
      <TextArea
        value={text}
        onChangeText={(e) => setText(e)}
        placeholder={'describe your problem...'}
        icon={'ri-message-line'}
      />

      <Button title={'report'} />
    </AreaView>
  )
}

const array_incidence = [
  {
    label: 'Room Key',
    value: 'Room Key',
  },
  {
    label: 'Wi-Fi',
    value: 'Wi-Fi',
  },
  {
    label: 'Tv Remote Control',
    value: 'Tv Remote Control',
  },
  {
    label: 'Safe Box',
    value: 'Safe Box',
  },
  {
    label: 'Air Conditioning',
    value: 'Air Conditioning',
  },
  {
    label: 'Fridge',
    value: 'Fridge',
  },
  {
    label: 'Microwave',
    value: 'Microwave',
  },
  {
    label: 'Hair dryer',
    value: 'Hair dryer',
  },
  {
    label: 'No Electricity',
    value: 'No Electricity',
  },
  {
    label: 'Lamps',
    value: 'Lamps',
  },
  {
    label: 'Light Bulb',
    value: 'Light Bulb',
  },
  {
    label: 'Light Switch',
    value: 'Light Switch',
  },
  {
    label: 'Plug',
    value: 'Plug',
  },
  {
    label: 'Water',
    value: 'Water',
  },
  {
    label: 'Bath',
    value: 'Bath',
  },
  {
    label: 'Shower',
    value: 'Shower',
  },
  {
    label: 'Sink',
    value: 'Sink',
  },
  {
    label: 'Toilet',
    value: 'Toilet',
  },
  {
    label: 'Curtains',
    value: 'Curtains',
  },
  {
    label: 'Balconey Door',
    value: 'Balconey Door',
  },
  {
    label: 'Chair and Table',
    value: 'Chair and Table',
  },
]
