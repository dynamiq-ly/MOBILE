import moment from 'moment'
import { useState } from 'react'
import { TouchableOpacity, View, Linking } from 'react-native'

/* modules */
import { Container } from '@/shared'

/* components */
import { Button, Div, Image, Text } from '@/common'
import { Icon } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* utilities */
import { variables } from '@/constant/variables'

export default ({ route }) => {
  const { data } = route.params

  const theme = useTheme()
  const [turncation, setTurncation] = useState(false)

  return (
    <Container safeArea={false} padding={false}>
      <Image source={`${variables.STORAGE_LINK}/entertainment/nights/${data.image}`} height='254px' radii='md' />

      {/* title */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: theme.units.md }}>
        <Text weight='bd' size={14} t={'capitalize'}>
          {data.name}
        </Text>
        <TouchableOpacity>
          <Icon icon={require('@/assets/icons/product/monocrome/bell-dark.png')} size={21} />
        </TouchableOpacity>
      </View>

      {/* icons */}
      <View style={{ gap: theme.units.sm, paddingHorizontal: theme.units.md }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
          <Image source={require('@/assets/icons/product/monocrome/duration-dark.png')} height='14px' width='14px' />
          <Text size={6} weight='md'>
            For {moment.duration(moment(data.timing[0].end_time, 'HH:mm').diff(moment(data.timing[0].start_time, 'HH:mm'))).hours()} hours
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
          <Image source={require('@/assets/icons/product/monocrome/clock-dark.png')} height='14px' width='14px' />
          <Text size={6} weight='md'>
            {data.timing[0].start_time} - {data.timing[0].end_time}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
          <Image source={require('@/assets/icons/product/monocrome/settings-dark.png')} height='14px' width='14px' />
          {JSON.parse(data.genre).map((item, index) => (
            <Text key={index} size={6} weight='md'>
              {item}
            </Text>
          ))}
        </View>
      </View>

      <View style={{ paddingHorizontal: theme.units.md, flexDirection: 'row', gap: 10 }}>
        {data.youtube_link && (
          <Button shadowColor='error' background='secondary' iconLeft='youtube' onPress={() => Linking.openURL(data.youtube_link)}>
            youtube
          </Button>
        )}
        {data.website_link && (
          <Button shadowColor='info' background='secondary' iconLeft='link' onPress={() => Linking.openURL(data.website_link)}>
            website
          </Button>
        )}
      </View>

      {/* description */}
      <TouchableOpacity style={{ gap: 4, paddingHorizontal: theme.units.md }} onPress={() => setTurncation(!turncation)}>
        <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.25} align='justify'>
          {data.description}
        </Text>
        <Text size={6} color='info' weight='md' t={'capitalize'}>
          {turncation ? 'see less' : 'see more'}
        </Text>
      </TouchableOpacity>

      {/* staff */}
      {data.host_name && (
        <View style={{ paddingHorizontal: theme.units.md }}>
          <Div title='Show Host' filled>
            <Div>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sb }}>
                <Image source={`${variables.STORAGE_LINK}/entertainment/nights/shows/${data.host_image}`} height='32px' width='32px' radii='rounded' />
                <View>
                  <Text turncate={1} size={8}>
                    {data.host_name}
                  </Text>
                  <Text turncate={1} size={7} color='info'>
                    {data.host_role}
                  </Text>
                </View>
              </View>
            </Div>
          </Div>
        </View>
      )}

      {/* timetable */}
      <View style={{ paddingHorizontal: theme.units.md }}>
        <Div filled title='time table'>
          <View style={{ marginTop: theme.units.sm, gap: theme.units.md }}>
            {data.timing.map((item, index) => (
              <View key={index} style={{ justifyContent: 'space-between', alignItems: 'center', flex: 1, flexDirection: 'row', gap: theme.units.sm }}>
                <View style={{ flex: 1 }}>
                  <Text size={7} color='sub'>
                    {moment(item.day, 'YYYY-MM-DD').format('ll')}
                  </Text>
                </View>

                <Text size={7} color='sub'>
                  {item.start_time} - {item.end_time}
                </Text>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text size={7} color='sub'>
                    {item.location}
                  </Text>
                </View>
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
