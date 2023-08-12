import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

/* modules */
import { Container } from '@/shared'

/* components */
import { Div, Image, Text } from '@/common'
import { Icon } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

export default ({ route }) => {
  const { data } = route.params

  const theme = useTheme()
  const [turncation, setTurncation] = useState(false)

  return (
    <Container safeArea={false}>
      <Image source={data.image} height='200px' radii='md' />

      {/* title */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text weight='bd' size={14} t={'capitalize'}>
          {data.title}
        </Text>
        <TouchableOpacity>
          <Icon icon={require('@/assets/icons/product/monocrome/bell-dark.png')} size={21} />
        </TouchableOpacity>
      </View>

      {/* icons */}
      <View style={{ gap: theme.units.sm }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
          <Image source={require('@/assets/icons/product/monocrome/duration-dark.png')} height='14px' width='14px' />
          <Text size={6} weight='md'>
            For {data.duration}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
          <Image source={require('@/assets/icons/product/monocrome/clock-dark.png')} height='14px' width='14px' />
          <Text size={6} weight='md'>
            {data.time}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
          <Image source={require('@/assets/icons/product/monocrome/location-dark.png')} height='14px' width='14px' />
          <Text size={6} weight='md'>
            {data.location}
          </Text>
        </View>
      </View>

      {/* description */}
      <TouchableOpacity style={{ gap: 4 }} onPress={() => setTurncation(!turncation)}>
        <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.25} align='justify'>
          {data.description}
        </Text>
        <Text size={6} color='info' weight='md' t={'capitalize'}>
          {turncation ? 'see less' : 'see more'}
        </Text>
      </TouchableOpacity>

      {/* timetable */}
      <View>
        <Div filled title='time table'>
          <View style={{ marginTop: theme.units.sm, gap: theme.units.md }}>
            {data.time_table.map((item, index) => (
              <View key={index} style={{ justifyContent: 'space-between', alignItems: 'center', flex: 1, flexDirection: 'row' }}>
                <Text size={7} color='sub'>
                  {item}
                </Text>
                <TouchableOpacity>
                  <Icon icon={require('@/assets/icons/product/monocrome/bell-dark.png')} size={16} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </Div>
      </View>
    </Container>
  )
}
