import AreaView from 'utils/TabAreaView'
import WeatherCard from 'components/cards/WeatherCard'
import FullDetailedCard from 'components/cards/FullDetailedCard'

import { useQuery } from 'react-query'
import { RefreshControl } from 'react-native'
import { useCallback, useState } from 'react'

export default function SwimmingPoolListsScreen({ route }) {
  const { _data } = route.params
  const { data, refetch } = useQuery('@weather', fetchWeather)
  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <AreaView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <WeatherCard
        temp_c={data?.current.temp_c}
        feels_like={data?.current.feelslike_c}
        weather_icon={data?.current.condition.icon}
        weather_descriptions={data?.current.condition.text}
      />
      {_data.map((item, index) => {
        return (
          <FullDetailedCard
            key={index}
            title={item.name}
            image={item.image}
            capacity={item.capacity}
          />
        )
      })}
    </AreaView>
  )
}

let fetchWeather = function () {
  return fetch(
    'http://api.weatherapi.com/v1/current.json?key=bfb63b0183bf4384969123512201010&q=36.8392,10.1577&aqi=no'
  ).then((res) => {
    return res.json()
  })
}
