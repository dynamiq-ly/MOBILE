import { useState } from 'react'
import { View } from 'react-native'

/* modules */
import { Container, FlatList } from '@/shared'

/* components */
import { Text } from '@/common'
import { CalendarSwipe, ButtonGroup, OptionCard, Icon } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { data } from '@/mocks/entertainment.data'

export default ({ navigation }) => {
  const theme = useTheme()

  const [date, setDate] = useState('')
  const [state, setState] = useState(1)
  return (
    <FlatList
      header={
        <View style={{ gap: theme.units.md, marginBottom: theme.units.md }}>
          <CalendarSwipe getDate={setDate} />
          <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={data.sport_program_categories.length > 3} items={data.sport_program_categories} />
        </View>
      }
      data={data.sport_program.filter((el) => el.type === data.sport_program_categories.find((item) => item.id === state).label)}
      gap='sm'
      keyExtractor={(item) => item.id}
      renderedItem={({ item }) => (
        <OptionCard key={item.id} image={item.image}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text size={8} weight='md' t='capitalize' turncate={1}>
              {item.title}
            </Text>
            <Text t='uppercase' color='sub' weight='md'>
              {item.time}
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Icon size={18} icon={require('@/assets/icons/product/monocrome/bell-dark.png')} />
          </View>
        </OptionCard>
      )}
    />
  )
}
