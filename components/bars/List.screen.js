import moment from 'moment'
import Text from 'components/text/Text'
import Widecard from 'components/cards/Widecard'
import NotFound from 'components/notFound/NotFound'

import { useQuery } from 'react-query'
import { View } from 'styles/detail.module'
import { useCallback, useState } from 'react'
import { __query, baseUrl } from 'hooks/useApi'
import { FlatList, LogBox, RefreshControl } from 'react-native'

let time = new Date().getHours() + ':' + new Date().getMinutes()
let day = moment().format('dddd').toLowerCase()

export default function ListScreen({ navigation }) {
  const { data, refetch, isFetched, isError } = useQuery('@bar', barsFetcher, {
    refetchOnMount: true,
    initialData: [],
  })

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
          style={{ paddingHorizontal: 16 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Widecard
              key={item.id}
              name={item.bar_name}
              state={
                item.bar_open_time < time || item.bar_closed_days.includes(day)
                  ? false
                  : true
              }
              specialiy={'Night Club'}
              image={`${baseUrl}storage/bars/${item.images[0].image}`}
              onPress={() =>
                navigation.navigate('menu-tab-stack-bar-detail', {
                  _id: item.id,
                  _data: item,
                })
              }
            />
          )}
          ListHeaderComponent={
            <Text
              size={16}
              color={'gray'}
              content={'Enjoy a good night with our finest bars available'}
              style={{ marginBottom: 14 }}
            />
          }
        />
      )}
    </View>
  )
}

let barsFetcher = function () {
  return __query
    .get('api/bar&status=1')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
