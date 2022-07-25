import NotFound from 'components/notFound/NotFound'
import FullImageCard from 'components/cards/FullImageCard'

import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { __query, baseUrl } from 'hooks/useApi'
import { RefreshControl, LogBox, FlatList } from 'react-native'

export default function ExcursionScreen({ navigation }) {
  const { data, refetch, isError, isFetched } = useQuery(
    '@activities',
    fetchExcursionsActivities,
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
    <>
      {data.length === 0 ? (
        <NotFound killProcess={(isFetched && data.length === 0) || isError} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          data={data}
          style={{ margin: 16 }}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FullImageCard
              title={item.activity_name}
              image={`${baseUrl}/storage/excursions/thumbnails/${item.activity_image}`}
              position={'end'}
              onPress={() =>
                navigation.navigate('menu-tab-stack-swimming-pool-list', {
                  _name: item.activity_name,
                  _data: item,
                })
              }
            />
          )}
        />
      )}
    </>
  )
}

const fetchExcursionsActivities = function () {
  return __query
    .get('/api/activities')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreLogs(['Setting a timer'])
