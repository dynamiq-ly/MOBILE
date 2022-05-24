import { useState } from 'react'
import { View } from 'react-native'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'
import { TextArea } from 'components/input/Input'
import DropDownPicker from 'react-native-dropdown-picker'

export default function IncidenceReport() {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState(array_incidence)

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
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode={'SCROLLVIEW'}
        style={{
          borderWidth: '0px',
        }}
      />
      <View style={{ marginBottom: 15 }} />
      <Text
        size={18}
        color={'gray'}
        content={'do not forget to give a detailed report about the problem.'}
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
  { label: 'Room Key', value: 'Room Key' },
  { label: 'Wi-Fi', value: 'Wi-Fi' },
  { label: 'Tv Remote Control', value: 'Tv Remote Control' },
  { label: 'Safe Box', value: 'Safe Box' },
  { label: 'Air Conditioning', value: 'Air Conditioning' },
  { label: 'Fridge', value: 'Fridge' },
  { label: 'Microwave', value: 'Microwave' },
  { label: 'Hair dryer', value: 'Hair dryer' },
  { label: 'No Electricity', value: 'No Electricity' },
  { label: 'Lamps', value: 'Lamps' },
  { label: 'Light Bulb', value: 'Light Bulb' },
  { label: 'Light Switch', value: 'Light Switch' },
  { label: 'Plug', value: 'Plug' },
  { label: 'Water', value: 'Water' },
  { label: 'Bath', value: 'Bath' },
  { label: 'Shower', value: 'Shower' },
  { label: 'Sink', value: 'Sink' },
  { label: 'Toilet', value: 'Toilet' },
  { label: 'Curtains', value: 'Curtains' },
  { label: 'Balconey Door', value: 'Balconey Door' },
  { label: 'Chair and Table', value: 'Chair and Table' },
]
