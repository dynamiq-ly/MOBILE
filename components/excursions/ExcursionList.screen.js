import Widecard from 'components/cards/Widecard'

import { useQuery } from 'react-query'
import { View } from 'styles/detail.module'
import { useCallback, useState } from 'react'
import { __query, baseUrl } from 'hooks/useApi'
import { RefreshControl, LogBox, FlatList } from 'react-native'

export default function ExcursionListScreen({ route, navigation }) {
  const { _data } = route.params

  const { data, refetch, isFetched } = useQuery(
    ['@activity', _data],
    () => fetchExcursionsActivitiesList(_data),
    {
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
      {isFetched && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          data={data}
          style={{ padding: 16 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Widecard
              name={item.activity_list_name}
              state={'hidden'}
              image={`${baseUrl}storage/excursions/thumbnails/${item.activity_list_thumbnail}`}
              onPress={() =>
                navigation.navigate('menu-tab-stack-excursions-list-details', {
                  _name: item.activity_list_name,
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

const fetchExcursionsActivitiesList = function (id) {
  return __query
    .get(`/api/excursion/${id}/specific`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreLogs(['Setting a timer'])
