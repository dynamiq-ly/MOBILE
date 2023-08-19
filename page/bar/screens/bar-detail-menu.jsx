/* packages */
import { useCallback, useState } from 'react'
import { Platform, RefreshControl, View } from 'react-native'
import { WebView } from 'react-native-webview'

/* modules */
import { FlatList } from '@/shared'

/* components */
import { ButtonGroup, SimpleCard } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* utilities */
import { variables } from '@/constant/variables'

/* mocks */
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ navigation, route }) => {
  const { id, data: menu } = route.params

  const theme = useTheme()
  const [state, setState] = useState(1)

  if (typeof menu === 'string') {
    return <WebView style={{ flex: 1 }} source={{ uri: Platform.OS === 'ios' ? menu : `https://docs.google.com/gview?embedded=true&url=${menu}` || 'https://landing.utells.com/' }} />
  }

  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery(['@Bars-Detail-Menu', id], () => getClientSideQueries.getMenuByBar(id), {
    initialData: menu,
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View style={{ flex: 1 }}>
      {/* list */}
      <FlatList
        header={<ButtonGroup scrollabe={false} selectedIndex={state} setSelectedIndex={setState} items={buttonSwitchItems} />}
        headerStyle={{ marginBottom: theme.units.md }}
        data={data.filter((el) => el.type === buttonSwitchItems.find((el) => el.id === state).value)}
        column={3}
        keyExtractor={(item) => item.id}
        renderedItem={({ item }) => (
          <View style={{ flex: 1 / 3 }}>
            <SimpleCard
              title={item.name}
              image={`${variables.STORAGE_LINK}/bars/menu/${item.image}`}
              onPress={() =>
                navigation.navigate('[stack] stack-bar-detail-menu-list', {
                  id: item.id,
                  name: item.name,
                  categories: item.categories,
                  type: item.type,
                  data: item,
                })
              }
            />
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const buttonSwitchItems = [
  { id: 1, label: 'Soft Drinks', value: 'soft' },
  { id: 2, label: 'Alcoholic Drinks', value: 'alcohol' },
]

const getClientSideQueries = {
  getMenuByBar: (id) =>
    useFetch(`/api/bars/menu?query${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
