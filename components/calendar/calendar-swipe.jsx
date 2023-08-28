/* packages */
import moment from 'moment'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

/* component */
import { Text } from '@/common'

/* styles */
import { useTheme } from 'styled-components'
import { CalendarWrapper, ClanedarSwipteButtonItem } from '@/style/calendar.style'

const CalendarSwipe = ({ getDate = () => {} }) => {
  const theme = useTheme()
  const days = [...Array(7)].map((_, index) => moment().add(index, 'd').format('L'))

  const [selectedDay, setSelectedDay] = useState(days[0])

  useEffect(() => {
    getDate(selectedDay)
  }, [selectedDay])

  return (
    <View style={{ gap: theme.units.sm }}>
      <Text size={8} color='sub' weight='md'>
        {moment(selectedDay, 'MM/DD/YYYY')
          .calendar()
          .replace(' at 12:00 AM', ', ' + moment(selectedDay, 'MM/DD/YYYY').format('ll'))}
      </Text>
      <CalendarWrapper>
        {days.map((item, index) => (
          <CalendarSwipteItem
            key={index}
            date={moment(item, 'MM/DD/YYYY').format('DD')}
            day={moment(item, 'MM/DD/YYYY').format('ddd')}
            isSelected={item === selectedDay}
            onSelect={() => {
              setSelectedDay(item)
            }}
          />
        ))}
      </CalendarWrapper>
    </View>
  )
}

/**
 * @description this will represent the calendar swipe item which is a "day" in the calendar
 */
const CalendarSwipteItem = ({ isSelected = false, onSelect = () => {}, date = '0', day = 'mon' }) => {
  return (
    <ClanedarSwipteButtonItem isSelected={isSelected} onPress={onSelect}>
      <Text size={7.5} weight='md'>
        {date}
      </Text>
      <Text size={6.5} weight='md' color='sub' t='uppercase'>
        {day}
      </Text>
    </ClanedarSwipteButtonItem>
  )
}

CalendarSwipe.propTypes = {
  getDate: PropTypes.func,
}

CalendarSwipteItem.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
  date: PropTypes.string,
  day: PropTypes.string,
}

export default CalendarSwipe
