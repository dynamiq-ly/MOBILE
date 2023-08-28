/* package */
import { useCallback, useState } from 'react'
import MapView from 'react-native-maps'
import { RefreshControl, TouchableOpacity, View, Linking } from 'react-native'

/* components */
import { Dialog, Icon, Pager } from '@/components'

/* modules */
import { Button, Div, Image, Text } from '@/common'
import { Container } from '@/shared'

/* utilities */
import { variables } from '@/constant/variables'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ route }) => {
  const { id, data: details } = route.params

  const theme = useTheme()
  const [turncation, setTurncation] = useState(false)

  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery(['@Point-Of-Interest-Detail-Page', id], () => getClientSideQueries.getPointById(id), {
    initialData: details,
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <Container padding={false} safeArea={false} refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      <Pager slider={details.images.map((el) => ({ id: el.id, image: `${variables.STORAGE_LINK}/point-of-interest/${el.image}` }))} />

      {/* title */}
      <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sm }}>
        <Text weight='bd' size={14} t={'capitalize'}>
          {data.name}
        </Text>
        {/* icons */}
        {data.phone && (
          <View style={{ gap: theme.units.sm }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
              <Icon icon={require('@/assets/icons/product/monocrome/phone-dark.png')} size={14} />
              <Text size={6} weight='md'>
                {data.phone}
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* description */}
      <TouchableOpacity style={{ flex: 1, gap: 4, paddingHorizontal: theme.units.md }} onPress={() => setTurncation(!turncation)}>
        <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.25} align='justify'>
          {data.description}
        </Text>
        <Text size={6} color='info' weight='md' t={'capitalize'}>
          {turncation ? 'see less' : 'see more'}
        </Text>
      </TouchableOpacity>

      {data.website && (
        <View style={{ paddingHorizontal: theme.units.md, flex: 1 }}>
          <Button background='secondary' shadowColor='info' iconLeft='globe' onPress={() => Linking.openURL(data.website)}>
            Visit Website
          </Button>
        </View>
      )}

      {/* location */}
      <View style={{ gap: theme.units.sm, paddingHorizontal: theme.units.md }}>
        <Div filled title='location'>
          <Div filled>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.md }}>
              <Icon icon={require('@/assets/icons/product/monocrome/location-dark.png')} size={16} />
              <Text size={7} color='sub'>
                {data.location}
              </Text>
            </View>
          </Div>
          {data.coordinates && (
            <View style={{ width: '100%', height: 100, borderRadius: theme.units.md, overflow: 'hidden' }}>
              <MapView
                style={{ flex: 1 }}
                region={{
                  latitude: data.coordinates.split(',')[0],
                  longitude: data.coordinates.split(',')[1],
                  latitudeDelta: 0.00922,
                  longitudeDelta: 0.00421,
                }}
                zoomTapEnabled={false}></MapView>
            </View>
          )}
        </Div>
      </View>

      {/* opening hours */}
      <View style={{ gap: theme.units.sm, paddingHorizontal: theme.units.md, marginBottom: 32, flex: 1 }}>
        <Div filled title='opening hours'>
          <Dialog background='warning' icon={require('@/assets/icons/product/monocrome/warning-light.png')}>
            <Text size={7} color='sub'>
              Timing may change and can’t be updated regularly.
            </Text>
          </Dialog>
          {Object.keys(data.schedule).some((el) => data.schedule[el]) && (
            <View style={{ gap: theme.units.sm }}>
              {Object.keys(data.schedule).map((el, i) => (
                <View key={i} style={{ alignItems: 'center', justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                  <Text weight='md' size={6.5} t='capitalize'>
                    {el}
                  </Text>
                  <Text size={6.5} color={data.schedule[el] && data.schedule[el].includes('closed') ? 'error' : 'sub'} t='uppercase'>
                    {data.schedule[el] ? data.schedule[el] : 'N/A'}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </Div>
      </View>
    </Container>
  )
}

const getClientSideQueries = {
  getPointById: (id) =>
    useFetch(`/api/point-of-interest/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
