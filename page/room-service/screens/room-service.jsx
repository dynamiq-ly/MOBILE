/* packages */
import { View } from 'react-native'
import { useCallback } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

/* styles */
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

/* components */
import { SimpleCard } from '@/components'

/* utilities */
import { Container, FlatList } from '@/shared'
import { BottomSheet } from '@/components'
import { Div, Image, Text } from '@/common'
import { data } from '@/mocks/room-service.data'
import { StyledSimpleCard } from '@/style/card.style'
import { shadow } from '@/util/shadow'

export default ({ navigation }) => {
  const theme = useTheme()
  const { top } = useSafeAreaInsets()

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
    <Container stickyHeaderIndices={[0]} padding={false} safeArea={false}>
      <Image source={data.image} height='254px' />

      <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.md }}>
        {/* title */}
        <Text weight='bd' size={14} t={'capitalize'}>
          {data.title}
        </Text>

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
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
            <Image source={require('@/assets/icons/product/monocrome/phone-dark.png')} height='14px' width='14px' />
            <Text size={6} weight='md'>
              {data.phone}
            </Text>
          </View>
        </View>

        {/* description */}
        <Text size={8} color='sub' turncate={3} line={1.25}>
          {data.description}
        </Text>
      </View>

      <View style={{ paddingHorizontal: theme.units.md }}>
        {/* staff */}
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

      {/* room services */}
      <FlatList
        header={
          <FlatList
            data={data.kitchen}
            column={3}
            gap='md'
            keyExtractor={(_, index) => index}
            renderedItem={({ item }) => <SimpleCard key={item.name} title={item.name} image={item.image} />}
            nestedScrollEnabled={true}
            scrollEnabled={false}
          />
        }
        data={data.services}
        column={3}
        gap='md'
        keyExtractor={(_, index) => index}
        renderedItem={({ item }) => (
          <StyledSimpleCard key={item.id} style={{ height: 78, ...shadow(), gap: theme.units.md }} onPress={() => navigation.navigate(item.id)}>
            <Image source={item.image} height='24px' width='24px' />
            <Text size={6.5} t={'capitalize'}>
              {item.name}
            </Text>
          </StyledSimpleCard>
        )}
        nestedScrollEnabled={true}
        scrollEnabled={false}
      />
    </Container>
  )
}
