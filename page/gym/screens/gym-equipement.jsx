/* packages */
import { useCallback, useState } from 'react'
import { RefreshControl, View } from 'react-native'

/* modules */
import { Text } from '@/common'
import { FlatList } from '@/shared'

/* components */
import { SimpleCard } from '@/components'

/* styles */

/* mocks */
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

/* utilities */
import { variables } from '@/constant/variables'

export default ({ route }) => {
  const { id, data: equipements } = route.params

  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery(['@gym-equipements', id], () => getClientSideQueries.getEquipements(id), {
    initialData: equipements,
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        gap='md'
        keyExtractor={(item) => item.id}
        column={2}
        renderedItem={({ item }) => (
          <View key={item.id} style={{ flex: 1 / 2 }}>
            <SimpleCard title={item.name} image={`${variables.STORAGE_LINK}/gym/equipements/${item.image}`} />
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const getClientSideQueries = {
  getEquipements: (gym) =>
    useFetch(`/api/gym/equipements?query=${gym}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}