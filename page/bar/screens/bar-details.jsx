/* packages */
import { TouchableOpacity, View } from 'react-native'
import { useCallback, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

/* styles */
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

/* components */
import { Icon, Pager, SimpleCard } from '@/components'

/* utilities */
import { Container, FlatList } from '@/shared'
import { BottomSheet } from '@/components'
import { Button, Div, Image, Text } from '@/common'
import { data } from '@/mocks/reception.data'
import { StyledSimpleCard } from '@/style/card.style'
import { shadow } from '@/util/shadow'

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
    <View style={{ flex: 1 }}>
      <Container stickyHeaderIndices={[0]} padding={false} safeArea={false}>
        <Pager slider={data.images} interval={5000} />

        {/* title */}
        <View style={{ paddingHorizontal: theme.units.md }}>
          {/* title */}
          <Text weight='bd' size={14} t={'capitalize'}>
            {data.title}
          </Text>
        </View>

        {/* icons */}
        <View style={{ gap: theme.units.sm, paddingHorizontal: theme.units.md }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
            <Image source={require('@/assets/icons/product/monocrome/clock-dark.png')} height='14px' width='14px' />
            <Text size={6} weight='md'>{`From ${data.timing.open} to ${data.timing.close}`}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
            <Image source={require('@/assets/icons/product/monocrome/phone-dark.png')} height='14px' width='14px' />
            <Text size={6} weight='md'>
              {data.phone_number}
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
        <TouchableOpacity style={{ paddingHorizontal: theme.units.md, gap: 4 }} onPress={() => setTurncation(!turncation)}>
          <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.25} align='justify'>
            {data.description}
          </Text>
          <Text size={6} color='info' weight='md' t={'capitalize'}>
            {turncation ? 'see less' : 'see more'}
          </Text>
        </TouchableOpacity>

        {/* staff */}
        <View style={{ paddingHorizontal: theme.units.md }}>
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

        {
          /* menu */
          <View style={{ paddingHorizontal: theme.units.md }}>
            <Div
              filled
              title='Menu'
              radii='md'
              button='protocol'
              buttonShadowColor='warning'
              buttonBackground='warning'
              onClick={() =>
                navigation.navigate('[stack] stack-safety-details', {
                  name: 'Bar Protocols',
                  file: 'https://www.goodfellowpublishers.com/free_files/Contents,%20copyright%20and%20preface-72826e49bb97bb6f4b560de5748d9cf8.pdf',
                })
              }>
              <Div shadowColor='info'>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ flex: 1, alignItems: 'center', gap: theme.units.md }}
                  onPress={() =>
                    navigation.navigate('[stack] stack-bar-detail-menu', {
                      id: data.id,
                      name: data.title,
                      data: data.menu_a_la_carte ? data.menu_a_la_carte : data.drinksMeun,
                    })
                  }>
                  <Icon icon={require('@/assets/icons/product/bar/drinks.png')} size={42} />
                  <Text size={9} weight='md'>
                    Menu
                  </Text>
                </TouchableOpacity>
              </Div>
            </Div>
          </View>
        }
      </Container>
      {/* can make reservation */}
      {data.reservation_required && <Button style={{ marginBottom: theme.units.lg, marginTop: theme.units.sm, marginHorizontal: theme.units.md }}>make reservation</Button>}
    </View>
  )
}
