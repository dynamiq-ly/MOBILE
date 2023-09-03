/* packages */
import moment from 'moment'
import { useState, useCallback } from 'react'
import { RefreshControl, View } from 'react-native'

/* modules */
import { Text } from '@/common'
import { FlatList } from '@/shared'

/* components */
import { OptionCard } from '@/components'

/* utilities */
import { variables } from '@/constant/variables'

/* mocks */
import { useFetch } from '@/hook/useFetch'
import { useQuery } from 'react-query'

export default ({ navigation }) => {
  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery('@Bars', getClientSideQueries.getBars)

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
            image={`${variables.STORAGE_LINK}/${item.images[0].image.replace('storage', '')}`}
            closed={!isBetweenOpenAndClose(item.timing_open, item.timing_close)}
            adults={item.adults_only ? true : false}
            reservation={item.reservation_required ? true : false}
            onPress={() =>
              navigation.navigate('[stack] stack-bar-detail', {
                id: item.id,
                data: item,
              })
            }>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text size={8} weight='md' t='capitalize' turncate={1}>
                {item.title}
              </Text>
              <Text t='uppercase' color='sub' weight='md'>
                {isBetweenOpenAndClose(item.timing_open, item.timing_close) ? `Closes at ${item.timing_close}` : `Opens at ${item.timing_open}`}
              </Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text t='capitalize' color='sub' weight='md'>
                {item.type}
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
  getBars: () =>
    useFetch('/api/bars?query=1')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
