import { useCallback, useLayoutEffect, useState } from 'react'
import { RefreshControl, View } from 'react-native'

/* modules */
import { Container, FlatList } from '@/shared'

/* components */
import { Div, Image, Text } from '@/common'
import { ButtonGroup, Icon } from '@/components'

/* utilities */
import { variables } from '@/constant/variables'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { useFetch } from '@/hook/useFetch'
import { useQuery } from 'react-query'

export default () => {
  const theme = useTheme()
  const [state, setState] = useState(1)
  const [refresh, setRefresh] = useState(false)

  const { data: categories, isLoading, error, isFetched, refetch } = useQuery('@Point-Of-Interest', getClientSideQueries.categoriesWithNested)

  useLayoutEffect(() => {
    if (isFetched) {
      setState(categories[0].id)
    }
  }, [categories])

  const { data, refetch: nestRefetch } = useQuery(['@Point-Of-Interest-Data', state], () => getClientSideQueries.oneCategoryNested(state), {
    initialData: [],
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => nestRefetch().then(() => setRefresh(false)))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        header={<ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={categories.length > 3} items={categories.map((el) => ({ id: el.id, label: el.name }))} />}
        headerStyle={{ marginBottom: theme.units.md }}
        data={data}
        column={2}
        keyExtractor={(item) => item.id}
        renderedItem={({ item }) => (
          <View key={item.id} style={{ flex: 1 / 2 }}>
            <Div filled radii='md'>
              <Image source={`${variables.STORAGE_LINK}/point-of-interest/${item.images[0].image}`} width='100%' height={'100px'} radii='sm' />
              <View style={{ gap: theme.units.sm }}>
                <Text turncate={1} size={8} weight='md' t={'capitalize'}>
                  {item.name}
                </Text>
                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 2 }}>
                  <Icon icon={require('@/assets/icons/product/colorful/marker.png')} size={12} />
                  <Text turncate={1} color='sub'>
                    {item.location}
                  </Text>
                </View>
              </View>
            </Div>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const getClientSideQueries = {
  categoriesWithNested: () =>
    useFetch('/api/point-of-interest/categories?query=1')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),

  oneCategoryNested: (id) =>
    useFetch(`api/point-of-interest?visible=1&query=${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
