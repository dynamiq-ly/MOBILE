import Text from 'components/text/Text'
import NotFound from 'components/notFound/NotFound'
import FullImageCard from 'components/cards/FullImageCard'

import { useQuery } from 'react-query'
import { baseUrl, __query } from 'hooks/useApi'
import { View } from 'styles/detail.module'
import { useCallback, useState } from 'react'
import { View as Gap, RefreshControl, LogBox, FlatList } from 'react-native'

export default function SwimmingPoolScreen({ navigation }) {
  const { data, refetch, isError, isFetched } = useQuery(
    '@swimmingpool',
    fetchSwimmingPool,
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
      <Gap style={{ paddingHorizontal: 14, marginBottom: 24 }}>
        <Text up={'cap'} size={24} weight={600} content={'our pool types'} />
        <Text
          size={16}
          weight={400}
          color={'gray'}
          content={
            'we present to you a large type of pools, you may enjoy and suits your needs and desires, you are welcome to check them out.'
          }
        />
      </Gap>
      <View>
        {data.length === 0 ? (
          <NotFound killProcess={(isFetched && data.length === 0) || isError} />
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
            }
            numColumns={2}
            horizontal={false}
            data={data}
            style={{ paddingHorizontal: 14 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FullImageCard
                title={item.pool_type}
                image={`${baseUrl}/storage/excursions/thumbnails/${item.pool_image}`}
                position={item.id % 2 !== 1 && 'end'}
                onPress={() =>
                  navigation.navigate('menu-tab-stack-swimming-pool-list', {
                    _name: item.pool_type,
                    _data: item.pools,
                  })
                }
              />
            )}
          />
        )}
      </View>
    </View>
  )
}

const fetchSwimmingPool = function () {
  return __query
    .get('/api/swimming-pool')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
