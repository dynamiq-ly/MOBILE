import Widecard from 'components/cards/Widecard'
import NotFound from 'components/notFound/NotFound'

import { useQuery } from 'react-query'
import { View } from 'styles/detail.module'
import { useCallback, useState } from 'react'
import { __query, baseUrl } from 'hooks/useApi'
import { FlatList, LogBox, RefreshControl } from 'react-native'

let time = new Date().getHours() + ':' + new Date().getMinutes()

export default function ListScreen({ navigation }) {
  const { data, refetch, isFetched, isError } = useQuery(
    '@restaurant',
    restaurantsFetcher,
    {
      refetchOnMount: true,
      initialData: [],
    }
  )

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <View>
      {data.length === 0 ? (
        <NotFound killProcess={(isFetched && data.length === 0) || isError} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          data={data}
          style={{ paddingHorizontal: 14 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Widecard
              key={item.id}
              name={item.restaurant_name}
              image={`${baseUrl}storage/restaurants/${item.images[0].image}`}
              state={
                time < item.restaurant_closes && time > item.restaurant_opens
                  ? true
                  : false
              }
              specialiy={item.restaurant_speciality}
              onPress={() =>
                navigation.navigate('menu-tab-stack-restaurant-detail', {
                  _id: item.id,
                  _data: item,
                })
              }
            />
          )}
        />
      )}
    </View>
  )
}

let restaurantsFetcher = function () {
  return __query
    .get('api/restaurant&status=1')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
