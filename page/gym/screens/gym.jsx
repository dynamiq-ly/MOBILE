/* packages */
import moment from 'moment'
import { useCallback, useState } from 'react'
import { RefreshControl, View } from 'react-native'

/* modules */
import { Text } from '@/common'
import { FlatList } from '@/shared'

/* components */
import { OptionCard } from '@/components'

/* styles */

/* utilities */
import { variables } from '@/constant/variables'

/* mocks */
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ navigation }) => {
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery('@gym', getClientSideQueries.getList)

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
        renderedItem={({ item }) => (
          <OptionCard
            key={item.id}
            image={`${variables.STORAGE_LINK}/gym/thumbnails/${item.image}`}
            closed={!isBetweenOpenAndClose(item['timing-open'], item['timing-close'])}
            reservation={item.reservation ? true : false}
            onPress={() =>
              navigation.navigate('[stack] stack-gym-detail', {
                id: item.id,
                data: item,
                name: item.name,
              })
            }>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text size={8} weight='md' t='capitalize' turncate={1}>
                {item.name}
              </Text>
              <Text t='uppercase' color='sub' weight='md'>
                {isBetweenOpenAndClose(item['timing-open'], item['timing-close']) ? `Closes at ${item['timing-close']}` : `Opens at ${item['timing-open']}`}
              </Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text t='capitalize' color='sub' weight='md' turncate={1}>
                {item.location}
              </Text>
            </View>
          </OptionCard>
        )}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const isBetweenOpenAndClose = (openTime, closeTime) => {
  if (moment(closeTime, 'HH:mm').isBefore(moment(openTime, 'HH:mm')))
    return moment().isBetween(moment(openTime, 'HH:mm'), moment('23:59', 'HH:mm'), 'minutes', '[]') || moment().isBetween(moment('00:00', 'HH:mm'), moment(closeTime, 'HH:mm'), 'minutes', '[]')
  return moment().isBetween(moment(openTime, 'HH:mm'), moment(closeTime, 'HH:mm'), 'minutes', '[]')
}

const getClientSideQueries = {
  getList: () =>
    useFetch('/api/gym')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}