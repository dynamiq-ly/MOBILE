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
  const [date, setDate] = useState('')

  const [state, setState] = useState(1)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        header={
          <View style={{ gap: theme.units.md, marginBottom: theme.units.md }}>
            <CalendarSwipe getDate={setDate} />
            <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={data.night_activities_categories.length > 3} items={data.night_activities_categories} />
          </View>
        }
        data={data.night_activities.filter((el) => el.type === data.night_activities_categories.find((item) => item.id === state).label)}
        gap='sm'
        keyExtractor={(item) => item.id}
        renderedItem={({ item }) => (
          <Card
            image={item.image}
            onPress={() =>
              navigation.navigate('[stack] stack-entertainement-night-activities-details', {
                id: item.id,
                data: item,
                name: item.title,
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
