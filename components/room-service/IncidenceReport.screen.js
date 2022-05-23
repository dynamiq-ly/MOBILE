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
  const [items, setItems] = useState([
    { label: 'Room Key', value: 'Room Key' },
    { label: 'Wi-Fi', value: 'Wi-Fi' },
    { label: 'Tv Remote Control', value: 'TV remote Control' },
    { label: 'Safe Box', value: 'Safe Box' },
    { label: 'Air Conditioning', value: 'Air Conditioning' },
    { label: 'Fridge', value: 'Fridge' },
    { label: 'Microwave', value: 'Microwave' },
    { label: 'Hair Drayer', value: 'Hair Drayer' },
    { label: 'No Electricity', value: 'No Electricity' },
    { label: 'Lamps', value: 'Lamps' },
  ])

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
