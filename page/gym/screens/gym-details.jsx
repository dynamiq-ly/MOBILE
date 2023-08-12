/* packages */
import { View } from 'react-native'
import { useCallback, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

/* styles */
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

/* components */
import { Dialog, Icon, Pager } from '@/components'

/* utilities */
import { Container } from '@/shared'
import { BottomSheet } from '@/components'
import { Div, Image, Text } from '@/common'
import { TouchableOpacity } from 'react-native-gesture-handler'

/* mocks */
import { gymEquipment } from '@/mocks/gym.data'

export default ({ navigation, route }) => {
  const { data } = route.params

  const theme = useTheme()
  const { top } = useSafeAreaInsets()
  const [turncation, setTurncation] = useState(false)

  const paddingTop = useSharedValue(theme.units['md'])

  const animatedStyle = useAnimatedStyle(() => ({
    flex: 1,
    gap: theme.units['md'],
    paddingHorizontal: theme.units['md'],
    paddingTop: withTiming(paddingTop.value),
  }))

  /* sheet animation */
  const handleSheetChanges = useCallback((index) => {
    index === 3 ? (paddingTop.value = top) : (paddingTop.value = theme.units['md'])
  }, [])

  return (
    <Container safeArea={false}>
      <Image source={data.image} height='200px' radii='md' />

      {/* title */}
      <View>
        <Text weight='bd' size={14} t={'capitalize'}>
          {data.name}
        </Text>
      </View>

      {/* icons */}
      <View style={{ gap: theme.units.sm }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
          <Image source={require('@/assets/icons/product/monocrome/clock-dark.png')} height='14px' width='14px' />
          <Text size={6} weight='md'>{`From ${data.timing.open} to ${data.timing.close}`}</Text>
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

      {/* staff */}
      <View>
        <Div filled title='staff' radii='md'>
          <BottomSheet
            handleSheetChange={handleSheetChanges}
            triggerElement={
              <View style={{ position: 'relative' }}>
                <Div>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sb }}>
                    <Image source={data.staff[0].image} height='32px' width='32px' radii='rounded' />
                    <View>
                      <Text turncate={1} size={8}>
                        {data.staff[0].name}
                      </Text>
                      <Text turncate={1} size={7} color='info'>
                        {data.staff[0].position}
                      </Text>
                    </View>
                  </View>
                </Div>
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <Feather name='chevron-down' size={14} color='black' />
                </View>
              </View>
            }>
            <Animated.View style={{ ...animatedStyle }}>
              <Text t={'capitalize'} size={10} weight='md'>{`List of ${data.title} staff`}</Text>
              {data.staff.map((staff, index) => (
                <Div filled key={index}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sb }}>
                    <Image source={staff.image} height='28px' width='28px' radii='rounded' />
                    <View>
                      <Text turncate={1} size={8}>
                        {staff.name}
                      </Text>
                      <Text turncate={1} size={7} color='info'>
                        {staff.position}
                      </Text>
                    </View>
                  </View>
                </Div>
              ))}
            </Animated.View>
          </BottomSheet>
        </Div>
      </View>

      {/* config */}
      <View style={{ gap: theme.units.sm }}>
        {/* booking */}
        {data.reservation && (
          <Dialog
            title={'Gym'}
            onPress={() =>
              navigation.navigate('', {
                data: gymEquipment,
              })
            }
            background='info'
            small={false}>
            <Text t={'capitalize'} weight='md' size={8.5}>
              Gym Booking
            </Text>
            <Text turncate={1} color='sub'>
              book the gym for a specific time.
            </Text>
          </Dialog>
        )}
        {/* equipement */}
        <Dialog
          title={'Gym'}
          onPress={() =>
            navigation.navigate('', {
              data: gymEquipment,
            })
          }
          background='info'
          small={false}>
          <Text t={'capitalize'} weight='md' size={8.5}>
            Gym Equipement
          </Text>
          <Text turncate={1} color='sub'>
            Set of equipement you can use.
          </Text>
        </Dialog>
        {/* terms */}
        <Dialog
          title={'Gym'}
          onPress={() =>
            navigation.navigate('', {
              data: data.terms,
            })
          }
          background='info'
          small={false}>
          <Text t={'capitalize'} weight='md' size={8.5}>
            Gym Use terms
          </Text>
          <Text turncate={1} color='sub'>
            terms and regulations withing the gym.
          </Text>
        </Dialog>
      </View>
    </Container>
  )
}
