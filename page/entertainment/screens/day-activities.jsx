import { useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

/* modules */
import { Container } from '@/shared'

/* components */
import { Button, Div, Image, Text } from '@/common'
import { Accordion, CalendarSwipe, Icon, Pager } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

export default () => {
  // this is where we going to store our date that we got from the calendar
  const [date, setDate] = useState('')

  return (
    <Container safeArea={false}>
      {/**
       * @description this will represent the calendar swipe item which is a "day" in the calendar
       * @param {func} getDate - this will get the date from the calendar
       */}
      <CalendarSwipe getDate={setDate} />
    </Container>
  )
}

