/* packages */
import { RefreshControl, TouchableOpacity, View } from 'react-native'
import { useCallback, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

/* styles */
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

/* components */
import { Icon, Pager } from '@/components'

/* utilities */
import { Container } from '@/shared'
import { BottomSheet } from '@/components'
import { Button, Div, Image, Text } from '@/common'
import { variables } from '@/constant/variables'

/* mocks */
import { useFetch } from '@/hook/useFetch'
import { useQuery } from 'react-query'

export default ({ navigation, route }) => {
  const { id, data: bar } = route.params

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

  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery(['@Bars-Detail', id], () => getClientSideQueries.getBarById(id), {
    initialData: bar,
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View style={{ flex: 1 }}>
      <Container stickyHeaderIndices={[0]} padding={false} safeArea={false} refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
        <Pager slider={data.images.map((el) => ({ ...el, image: `${variables.STORAGE_LINK}/bars/${el.image}` }))} interval={5000} />

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
            <Text size={6} weight='md'>{`From ${data.timing_open} to ${data.timing_close}`}</Text>
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
        {data.staff && data.staff.length > 0 && (
          <View style={{ paddingHorizontal: theme.units.md }}>
            <Div filled title='staff' radii='md'>
              <BottomSheet
                handleSheetChange={handleSheetChanges}
                triggerElement={
                  <View style={{ position: 'relative' }}>
                    <Div>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sb }}>
                        <Image source={`${variables.STORAGE_LINK}/bars/staff/${data.staff[0].image}`} height='32px' width='32px' radii='rounded' />
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
                        <Image source={`${variables.STORAGE_LINK}/bars/staff/${staff.image}`} height='28px' width='28px' radii='rounded' />
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
        )}

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
                      data: data.menu_a_la_carte ? `${variables.STORAGE_LINK}/pdf/menus/bar/${data.menu_a_la_carte}` : data.menu,
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
      {data.reservation_required === 1 && <Button style={{ marginBottom: theme.units.lg, marginTop: theme.units.sm, marginHorizontal: theme.units.md }}>make reservation</Button>}
    </View>
  )
}

const getClientSideQueries = {
  getBarById: (id) =>
    useFetch(`/api/bars/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
