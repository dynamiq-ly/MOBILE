/* packages */
import { useCallback, useState } from 'react'
import { RefreshControl, View } from 'react-native'

/* modules */
import { FlatList } from '@/shared'
import { Div, Image, Text } from '@/common'

/* components */
import { ButtonGroup, Card } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* utilities */
import { variables } from '@/constant/variables'

/* mocks */
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ navigation, route }) => {
  const { id, type, data: drinks } = route.params

  const theme = useTheme()
  const [state, setState] = useState(1)

  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery(['@Bars-Detail-Menu-Drinks', id], () => getClientSideQueries.getMenuWithDrinks(id), {
    initialData: drinks,
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  /* soft drinks */
  if (type === 'soft') {
    return (
      <View style={{ flex: 1 }}>
        {data.soft && (
          <FlatList
            header={<Image source={`${variables.STORAGE_LINK}/bars/menu/${data.image}`} height='200px' radii='md' />}
            headerStyle={{ marginBottom: theme.units.md }}
            data={data.soft}
            keyExtractor={(_, index) => index}
            renderedItem={({ item }) => (
              <Div filled>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text size={8.5} weight='md'>
                    {item.name}
                  </Text>
                  <Text size={8} color='info' weight='md'>
                    {item.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}
                  </Text>
                </View>
                <View>
                  <Text size={7} color='sub'>
                    {JSON.parse(item.ingredients).join(', ')}
                  </Text>
                </View>
              </Div>
            )}
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
          />
        )}
      </View>
    )
  }

  /* alcoholic drinks */
  return (
    <View style={{ flex: 1 }}>
      {data.alcohol && (
        <FlatList
          header={categories && categories.length > 0 ? <ButtonGroup scrollabe={categories.length > 3} selectedIndex={state} setSelectedIndex={setState} items={categories.map((el, index) => ({ id: index + 1, label: el }))} /> : null}
          header={
            JSON.parse(data.categories) && JSON.parse(data.categories).length > 0 ? (
              <ButtonGroup
                scrollabe={JSON.parse(data.categories).length > 3}
                selectedIndex={state}
                setSelectedIndex={setState}
                items={JSON.parse(data.categories).map((el, index) => ({ id: index + 1, label: el }))}
              />
            ) : null
          }
          headerStyle={{ marginBottom: theme.units.md }}
          data={data.categories === null || '' ? data.alcohol : data.alcohol.filter((el) => el.category === JSON.parse(data.categories).find((el) => el === JSON.parse(data.categories)[state - 1]))}
          keyExtractor={(_, index) => index}
          renderedItem={({ item }) => (
            <Card
              image={`${variables.STORAGE_LINK}/bars/menu/alcohol/${item.image}`}
              padding={false}
              onPress={() =>
                navigation.navigate('[stack] stack-bar-detail-menu-list-detail', {
                  type: item.type,
                  data: item,
                  id: item.id,
                })
              }>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text size={8.5} weight='md'>
                  {item.name}
                </Text>
                <Text size={8} color='info' weight='md'>
                  {item.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}
                </Text>
              </View>
              <Text size={7} color='sub' line={1.125} turncate={2}>
                {item.slug}
              </Text>
            </Card>
          )}
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
        />
      )}
    </View>
  )
}

const getClientSideQueries = {
  getMenuWithDrinks: (id) =>
    useFetch(`/api/bars/menu/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}