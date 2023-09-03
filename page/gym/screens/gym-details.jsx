/* packages */
import { RefreshControl, View } from 'react-native'
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
import { variables } from '@/constant/variables'

/* mocks */
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ navigation, route }) => {
  const { id, data: gymData } = route.params

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

  const { data, isLoading, error, refetch } = useQuery(['@gym-detail', id], () => getClientSideQueries.showGym(id), {
    initialData: gymData,
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <Container safeArea={false} refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      <Image source={`${variables.STORAGE_LINK}/gym/thumbnails/${data.image}`} height='200px' radii='md' />

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
          <Text size={6} weight='md'>{`From ${data['timing-open']} to ${data['timing-close']}`}</Text>
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
      {data.staff && data.staff.length > 0 && (
        <View>
          <Div filled title='staff' radii='md'>
            <BottomSheet
              handleSheetChange={handleSheetChanges}
              triggerElement={
                <View style={{ position: 'relative' }}>
                  <Div>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sb }}>
                      <Image source={`${variables.STORAGE_LINK}/gym/staffs/${data.staff[0].image}`} height='32px' width='32px' radii='rounded' />
                      <View>
                        <Text turncate={1} size={8}>
                          {data.staff[0].name}
                        </Text>
                        <Text turncate={1} size={7} color='info'>
                          {data.staff[0].job_title}
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
                <Text t={'capitalize'} size={10} weight='md'>{`List of ${data.name} staff`}</Text>
                {data.staff.map((staff, index) => (
                  <Div filled key={index}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sb }}>
                      <Image source={`${variables.STORAGE_LINK}/gym/staffs/${staff.image}`} height='28px' width='28px' radii='rounded' />
                      <View>
                        <Text turncate={1} size={8}>
                          {staff.name}
                        </Text>
                        <Text turncate={1} size={7} color='info'>
                          {staff.job_title}
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

      {/* config */}
      <View style={{ gap: theme.units.sm }}>
        {/* booking */}
        {data.reservation === 1 && (
          <Dialog
            title={'Gym'}
            onPress={() =>
              navigation.navigate('', {
                data: data.booking,
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
            navigation.navigate('[stack] stack-gym-equipements', {
              id: data.id,
              name: data.name,
              data: data.equipements,
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
        {data.terms && (
          <Dialog
            title={'Gym'}
            onPress={() =>
              navigation.navigate('[stack] stack-gym-terms', {
                id: data.id,
                data: `${variables.STORAGE_LINK}/pdf/gym/${data.terms}`,
                name: data.name,
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
        )}
      </View>
    </Container>
  )
}

const getClientSideQueries = {
  showGym: (id) =>
    useFetch(`/api/gym/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}