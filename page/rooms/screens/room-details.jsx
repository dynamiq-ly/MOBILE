/* packages */
import { useCallback, useState } from 'react'
import { RefreshControl, TouchableOpacity, View } from 'react-native'

/* modules */
import { Container } from '@/shared'

/* components */
import { Button, Div, Image, Text } from '@/common'
import { Accordion, Icon, Pager } from '@/components'

/* utilities */
import { variables } from '@/constant/variables'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ route }) => {
  const { id, data: room, previousScreen } = route.params

  const theme = useTheme()
  const [turncation, setTurncation] = useState(false)

  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery(['@Point-Of-Interest-Detail-Page', id], () => getClientSideQueries.getRoombyId(id), {
    initialData: room,
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
        <Pager slider={data.images.map((el) => ({ ...el, image: `${variables.STORAGE_LINK}/rooms/${el.image}` }))} interval={5000} />

        <View style={{ gap: theme.units.md }}>
          {/* title, price, virtual */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: theme.units.md }}>
            {/* title & price */}
            <View style={{ flex: 1, gap: theme.units.sm }}>
              {/* title */}
              <Text weight='bd' size={14} t={'capitalize'}>
                {data.name}
              </Text>
              {/* price */}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text size={7} color='small' weight='md' t={'capitalize'} turncate={2}>
                  {previousScreen === 'room-upgrade' ? 'Upgrade will cost' : 'starting from'}
                </Text>
                <Text size={7} color='info' weight='md' turncate={2}>
                  {previousScreen === 'room-upgrade' ? ' ' + data.config['upgrade-price'] : ' ' + data.price.toString()}
                </Text>
                {previousScreen !== 'room-upgrade' && (
                  <Text size={7} color='small' weight='md' turncate={2}>
                    {' / night'}
                  </Text>
                )}
              </View>
            </View>
            {/* 360 */}
            {data.virtual && (
              <TouchableOpacity
                style={{
                  ...smallRounedButtonStyle,
                  borderColor: `${theme.core.text['variant_info']}50`,
                  backgroundColor: theme.core.background['variant_info'],
                }}>
                <Icon icon={require('@/assets/icons/product/monocrome/360-view-dark.png')} size={21} />
              </TouchableOpacity>
            )}
          </View>

          {/* location */}
          <View style={{ paddingHorizontal: theme.units.md }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm - 2 }}>
              <Image source={require('@/assets/icons/product/monocrome/location-dark.png')} height='14px' width='14px' />
              <Text size={7} color='sub'>
                {`Located in ${getNumberWithSuffix(data.room_floor)} Floor, ${getNumberWithSuffix(data.room_number)} Room`}
              </Text>
            </View>
          </View>
        </View>

        {/* room feautes */}
        {data.addons && (
          <View style={{ paddingHorizontal: theme.units.md }}>
            <Div filled title='Room Features'>
              <View style={{ flexDirection: 'row', flex: 1, gap: theme.units.sm, flexWrap: 'wrap' }}>
                {data.addons
                  .filter((el) => el.featured)
                  .map((el, index) => (
                    <Div key={index}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                        <Image
                          source={el.addon.image ? `${variables.STORAGE_LINK}/rooms/room-add-ons/${el.addon.image}` : require('@/assets/icons/default/cube-dark.png')}
                          width='14px'
                          height='14px'
                          contentFit='contain'
                        />
                        <Text size={6.5}>{el.addon.label}</Text>
                      </View>
                    </Div>
                  ))}
              </View>
            </Div>
          </View>
        )}

        {/* description */}
        <TouchableOpacity style={{ paddingHorizontal: theme.units.md, gap: 4 }} onPress={() => setTurncation(!turncation)}>
          <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.25} align='justify'>
            {previousScreen === 'room-upgrade' ? data.config['upgrade-description'] : data.description}
          </Text>
          <Text size={6} color='info' weight='md' t={'capitalize'}>
            {turncation ? 'see less' : 'see more'}
          </Text>
        </TouchableOpacity>

        {/* feautres */}
        <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sm }}>
          {/* room features */}
          {data.addons && (
            <Accordion title='Room Features' background='container' border={'sub'}>
              <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', columnGap: theme.units.md, rowGap: theme.units.sm }}>
                {data.addons.map((el) => (
                  <View key={el.id} style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                    <Icon icon={require('@/assets/icons/product/colorful/badge-check.png')} size={16} />
                    <Text t={'capitalize'} size={7} color='sub'>
                      {el.addon.label}
                    </Text>
                  </View>
                ))}
              </View>
            </Accordion>
          )}

          {/* other features */}
          {data.features &&
            data.features.map((el) => (
              <Accordion key={el.id} title={el.label} background='container' border={'sub'}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', columnGap: theme.units.md, rowGap: theme.units.sm }}>
                  {JSON.parse(el.keys).map((note, index) => (
                    <View key={index} style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                      <Icon icon={require('@/assets/icons/product/colorful/badge-check.png')} size={16} />
                      <Text t={'capitalize'} size={7} color='sub'>
                        {note}
                      </Text>
                    </View>
                  ))}
                </View>
              </Accordion>
            ))}
        </View>
      </Container>
      {/* room is upgradable */}
      {data.config && data.config.booking === 1 && (
        <Button style={{ marginBottom: theme.units.lg, marginTop: theme.units.sm, marginHorizontal: theme.units.md }}>{previousScreen === 'room-upgrade' ? 'Upgrade Room' : 'Book Now'}</Button>
      )}
    </View>
  )
}

const smallRounedButtonStyle = {
  width: 38,
  height: 38,
  borderWidth: 1,
  borderRadius: 9999,
  borderStyle: 'solid',
  alignItems: 'center',
  justifyContent: 'center',
}

let getNumberWithSuffix = (n) => {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

const getClientSideQueries = {
  getRoombyId: (id) =>
    useFetch(`/api/rooms/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
