import { useState } from 'react'
import { View } from 'react-native'

/* modules */
import { Container, FlatList } from '@/shared'

/* components */
import { Text, Card } from '@/common'
import { CalendarSwipe, ButtonGroup } from '@/components'

/* mocks */
import { data } from '@/mocks/entertainment.data'
import { theme } from '@/constant/theme'

export default ({ navigation }) => {
  const theme = useTheme()
  // this is where we going to store our date that we got from the calendar
  const [date, setDate] = useState('')

  const [state, setState] = useState(1)
  return (
    <Container stickyHeaderIndices={[0]} padding={false} safeArea={false}>
      {/**
       * @description this will represent the calendar swipe item which is a "day" in the calendar
       * @param {func} getDate - this will get the date from the calendar
       */}
      <View style={{ paddingHorizontal: theme.units.md }}>
        <CalendarSwipe getDate={setDate} />
      </View>

      {/* age categories */}
      <View>
        <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={data.day_activities_categories.length > 3} items={data.day_activities_categories} />
      </View>

      {/*activities*/}
      <View style={{ flex: 1 }}>
        <FlatList
          data={data.day_activities.filter((el) => el.type === data.day_activities_categories.find((el) => el.id === state).label)}
          gap='sm'
          keyExtractor={(item) => item.id}
          renderedItem={({ item }) => (
            <Card
              image={item.image}
              padding={false}
              onPress={() =>
                navigation.navigate('', {
                  id: item.id,
                  data: item,
                })
              }
            >
              <Text size={7} weight='md' t={'capitalize'}>
                {item.title}
              </Text>
              <Text size={6} line={1.25} color='sub' turncate={2}>
                {item.description}
              </Text>
            </Card>
          )}
          nestedScrollEnabled={true}
          scrollEnabled={false}
        />
      </View>
    </Container>
  )
}
