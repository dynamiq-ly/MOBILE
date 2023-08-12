import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

/* modules */
import { FlatList } from '@/shared'

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
    <View style={{ flex: 1 }}>
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
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                {/* icons */}
                <View style={{ gap: theme.units.sm }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                    <Text size={8} weight='md'>
                      {item.title}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                    <Icon icon={require('@/assets/icons/product/monocrome/clock-dark.png')} size={14} />
                    <Text size={6} color='sub'>
                      {item.time}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                    <Icon icon={require('@/assets/icons/product/monocrome/location-dark.png')} size={14} />
                    <Text size={6} color='sub'>
                      {item.location}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity>
                  <Icon size={18} icon={require('@/assets/icons/product/monocrome/bell-dark.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </OptionCard>
        )}
      />
    </View>
  )
}
