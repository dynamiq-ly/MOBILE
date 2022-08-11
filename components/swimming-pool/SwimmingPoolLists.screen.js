import WeatherCard from 'components/cards/WeatherCard'
import NotFound from 'components/notFound/NotFound'
import FullDetailedCard from 'components/cards/FullDetailedCard'

import { useQuery } from 'react-query'
import { View } from 'styles/detail.module'
import { useCallback, useState } from 'react'
import { baseUrl, __query } from 'hooks/useApi'
import {
  View as Gap,
  RefreshControl,
  LogBox,
  FlatList,
  Alert,
} from 'react-native'

export default function SwimmingPoolListsScreen({ route }) {
  const { _id } = route.params
  const { data: weather } = useQuery('@weather', fetchWeather, {
    refetchOnMount: 'always',
  })

  const {
    data: pool_list,
    refetch,
    isFetched,
    isError,
  } = useQuery(['@swimming-pool-list', _id], () => fetchSwimmingPoolList(_id), {
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
      <Gap style={{ paddingHorizontal: 14 }}>
        <WeatherCard
          temp_c={weather ? weather.current.temp_c : '0'}
          feels_like={weather ? weather.current.feelslike_c : '0'}
          weather_icon={weather ? weather.current.condition.icon : ''}
          weather_descriptions={
            weather ? weather.current.condition.text : 'N/A'
          }
        />
      </Gap>
      <View>
        {pool_list.length === 0 ? (
          <NotFound
            killProcess={(isFetched && pool_list.length === 0) || isError}
          />
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
            }
            horizontal={false}
            data={pool_list}
            style={{ paddingHorizontal: 14 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FullDetailedCard
                title={item.pool_name}
                capacity={`${item.pool_capacity} capacity`}
                image={`${baseUrl}/storage/swimming-pool/images/${item.pool_image}`}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}

let fetchWeather = function () {
  return fetch(
    'http://api.weatherapi.com/v1/current.json?key=bfb63b0183bf4384969123512201010&q=36.8392,10.1577&aqi=no'
  ).then((res) => {
    return res.json()
  })
}

let fetchSwimmingPoolList = function (id) {
  return __query
    .get(`api/swimming-pool/pools/type=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
