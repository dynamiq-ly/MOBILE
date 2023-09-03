/* packages */
import { useCallback, useLayoutEffect, useState } from 'react'
import { RefreshControl, View } from 'react-native'

/* modules */
import { Container, FlatList } from '@/shared'

/* components */
import { Div, Image, Text } from '@/common'
import { ButtonGroup, Card, Dialog } from '@/components'

/* utilities */
import { variables } from '@/constant/variables'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { data } from '@/mocks/rooms.data'
import { useFetch } from '@/hook/useFetch'
import { useQuery } from 'react-query'

export default ({ navigation, route }) => {
  const theme = useTheme()
  const [state, setState] = useState(1)
  const [refresh, setRefresh] = useState(false)

  const { data: categories, isLoading, error, isFetched, refetch } = useQuery('@Rooms', getClientSideQueries.getCategories)

  useLayoutEffect(() => {
    if (isFetched) {
      setState(categories[0].id)
    }
  }, [categories])

  const { data: rooms, refetch: nestRefetch } = useQuery('@Rooms-Data', getClientSideQueries.getRooms, {
    initialData: [],
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => nestRefetch().then(() => setRefresh(false)))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <Container stickyHeaderIndices={[0]} padding={false} safeArea={false} refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      <Image source={data.banner[0].image} height='254px' />

      {/* description */}
      <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sm, flex: 1 }}>
        <Text weight='bd' size={14} t={'capitalize'}>
          Rooms & suites
        </Text>

        <Text size={8} line={1.25} color='sub'>
          {data.description}
        </Text>
      </View>

      {/* warning */}
      <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.md, flex: 1 }}>
        <Div filled>
          <Text size={8} line={1.25} color='sub'>
            Dial 9 to contact with the reception desk for more options and availability.
          </Text>
        </Div>

        {/* dialog*/}
        <Dialog icon={require('@/assets/icons/product/monocrome/warning-light.png')} small={true}>
          <Text size={8} line={1.25} color='sub'>
            Prices may vary through the season.
          </Text>
        </Dialog>
      </View>

      {/* rooms categories */}

      {categories && (
        <View style={{ paddingHorizontal: theme.units.md }}>
          <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={categories.length > 3} items={categories} />
        </View>
      )}

      {/* rooms */}
      {rooms && (
        <View style={{ flex: 1 }}>
          <FlatList
            header={
              <View style={{ gap: 2, marginBottom: theme.units.sb }}>
                <Text weight='md' t={'capitalize'} size={11}>
                  Find your room
                </Text>
                <Text color='sub' size={7}>
                  Find the best room that will match your style.
                </Text>
              </View>
            }
            data={rooms.filter((el) => el.category.id === state)}
            gap='sm'
            keyExtractor={(item) => item.id}
            renderedItem={({ item }) => (
              <Card
                image={`${variables.STORAGE_LINK}/rooms/${item.images[0].image}`}
                padding={false}
                onPress={() =>
                  navigation.navigate('[stack] stack-rooms-details', {
                    id: item.id,
                    data: item,
                    previousScreen: route.params ? route.params.previousScreen : null,
                  })
                }>
                <Text size={7} weight='md' t={'capitalize'} turncate={2}>
                  {item.name}
                </Text>
                <Text size={6} line={1.25} color='sub' turncate={2}>
                  {item.addons
                    .filter((el) => el.featured)
                    .map((el) => el.addon.label)
                    .join(' | ')}
                </Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text size={6} color='small' weight='md' t={'capitalize'} turncate={2}>
                    starting from
                  </Text>
                  <Text size={6} color='info' weight='md' turncate={2}>
                    {' ' + item.price.toString()}
                  </Text>
                  <Text size={6} color='small' weight='md' turncate={2}>
                    {' / night'}
                  </Text>
                </View>
              </Card>
            )}
            nestedScrollEnabled={true}
            scrollEnabled={false}
          />
        </View>
      )}
    </Container>
  )
}

const getClientSideQueries = {
  getCategories: () =>
    useFetch('/api/rooms/categories?query=1')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
  getRooms: () =>
    useFetch('/api/rooms?query=1')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}