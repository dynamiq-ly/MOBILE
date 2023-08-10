import { useState } from 'react'
import { View } from 'react-native'

/* modules */
import { Container, FlatList } from '@/shared'

/* components */
import { Text } from '@/common'
import { CalendarSwipe, ButtonGroup, Card } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { data } from '@/mocks/entertainment.data'

export default ({ navigation }) => {
  const theme = useTheme()
  // this is where we going to store our date that we got from the calendar
  const [date, setDate] = useState('')

  const [state, setState] = useState(1)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        header={
          <View style={{ gap: theme.units.md, marginBottom: theme.units.md }}>
            {/**
             * @description this will represent the calendar swipe item which is a "day" in the calendar
             * @param {func} getDate - this will get the date from the calendar
             */}
            <CalendarSwipe getDate={setDate} />
            <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={data.day_activities_categories.length > 3} items={data.day_activities_categories} />
          </View>
        }
        data={data.day_activities.filter((el) => el.type === data.day_activities_categories.find((item) => item.id === state).label)}
        gap='sm'
        keyExtractor={(item) => item.id}
        renderedItem={({ item }) => (
          <Card
            image={item.image}
            onPress={() =>
              navigation.navigate('', {
                id: item.id,
                data: item,
              })
            }>
            <Text size={7} weight='md' t={'capitalize'}>
              {item.title}
            </Text>
            <Text size={6} line={1.25} color='sub' turncate={2}>
              {item.description}
            </Text>
          </Card>
        )}
      />
    </View>
  )
}
