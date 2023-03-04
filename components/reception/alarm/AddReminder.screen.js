import { useState } from 'react'
import { View as Gap } from 'react-native'
import { Image } from 'styles/image.module'
import { PrioritRadioButton, StyledCalenderbutton } from 'styles/calendar.module'

import moment from 'moment'
import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import Input from 'components/input/Input'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'
import DatePicker from 'react-native-neat-date-picker'

import { __query } from 'hooks/useApi'
import { useMutation } from 'react-query'

export default function AddReminderAlarmScreen({ navigation }) {
  const [isReminder, setReminder] = useState({
    reminder_title: '',
    reminder_date: '',
    reminder_priority: '',
  })
  const [isDataNow, setCurrentDate] = useState('Set a Date...')
  const [isDatePickerOpen, setDatePickerOpen] = useState(false)

  const handleFormChange = (binding, event) => {
    setReminder({ ...isReminder, [binding]: event })
  }

  const { mutate, isLoading, isSuccess } = useMutation(createReminder)

  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/149571/screenshots/11509491/media/97d61fcf340eb46906cd280d3a446081.jpg?compress=1&resize=1000x750&vertical=top',
        }}
      />

      <Gap style={{ marginBottom: 14 }} />
      <Input value={isReminder.reminder_title} icon={'ri-chat-history-line'} placeholder={'reminder title...'} onChangeText={(text) => handleFormChange('reminder_title', text)} />

      <StyledCalenderbutton onPress={() => setDatePickerOpen(true)}>
        <Icon size={18} color={'#9ca3af'} style={{ marginRight: 10 }} name={'ri-calendar-2-line'} />
        <Text size={16} color={'gray'} content={isDataNow} />
      </StyledCalenderbutton>
      <DatePicker
        mode={'single'}
        onConfirm={({ date }) => {
          setDatePickerOpen(false)
          setCurrentDate(moment(date.getTime()).format('DD / MM / YYYY'))
          handleFormChange('reminder_date', moment(date.getTime()).format('DD / MM / YYYY'))
        }}
        isVisible={isDatePickerOpen}
        minDate={new Date()}
        onCancel={() => setDatePickerOpen(false)}
        maxDate={new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000)}
      />

      <Gap
        style={{
          marginTop: 5,
          marginBottom: 24,
        }}>
        <Text size={21} weight={600} up={'cap'} content={'Priority'} />
        <Gap
          style={{
            marginTop: 5,
            marginBottom: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {priority_array.map((el, key) => (
            <PrioritRadioButton key={key} color={isReminder.reminder_priority === el.name && el.color} onPress={() => handleFormChange('reminder_priority', el.name)} activeOpacity={1}>
              <Text size={16} up={'cap'} content={el.name} />
              <Text size={16} up={'cap'} content={el.remindes} />
            </PrioritRadioButton>
          ))}
        </Gap>
        <Text color={'gray'} content={'setting priority will determine the number of calls and tries so we can reach you.'} />
        <Button
          title={isLoading ? 'creating...' : 'save reminder'}
          onPress={() => {
            mutate(isReminder)
            if (isSuccess) {
              setReminder({
                reminder_title: '',
                reminder_date: '',
                reminder_priority: '',
              })
              setCurrentDate('Set a Date...')
              navigation.goBack()
            }
          }}
        />
      </Gap>
    </AreaView>
  )
}

const priority_array = [
  { color: '#0ea5e9', name: 'minor', remindes: 2 },
  { color: '#10b981', name: 'normal', remindes: 4 },
  { color: '#ef4444', name: 'urgent', remindes: 6 },
]

const createReminder = function (data) {
  return __query.post('/api/reception/reminder', data)
}
