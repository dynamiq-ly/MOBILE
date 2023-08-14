/*package*/
import moment from 'moment'
import { ScrollView, View } from 'react-native'
import * as Network from 'expo-network'
import { useLayoutEffect, useState } from 'react'

/* styles */
import { useTheme } from 'styled-components'

/* components */
import { Icon } from '@/components'

/* utilities */
import { Container } from '@/shared'
import { Div, Image, Text } from '@/common'
import { variables } from '@/constant/variables'

/*mocks*/
import axios from 'axios'
import { useQuery } from 'react-query'

export default () => {
  const theme = useTheme()

  const [ipNetwork, setIpNetwork] = useState(null)

  useLayoutEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((res) => setIpNetwork(res.data.ip))
  })

  const { data, isLoading, error } = useQuery(['forcasts', ipNetwork], () => getClientSideQueries.forcasts(ipNetwork))

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <Container safeArea={false}>
      {/* special cart */}
      <Div filled>
        {/*  location */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
          <Icon icon={require('@/assets/icons/product/colorful/bullseye.png')} size={18} />
          <Text size={14} weight='md' color='info'>
            {data.location.name}
          </Text>
        </View>

        {/* current temps */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: theme.units.sb }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
            <Image source={`https:${data.current.condition.icon}`} width='36px' height='36px' />
            <Text size={18} weight='md'>{`${data.current.temp_c}℃`}</Text>
          </View>
          <View style={{ alignItems: 'flex-end', gap: theme.units.sm }}>
            <Text size={7} color='sub' t='capitalize'>
              {data.current.condition.text}
            </Text>
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 5 }}>
              <Text size={7} color='sub' weight='md' t='capitalize'>
                feels like
              </Text>
              <Text size={7} color='info' weight='md' t='capitalize'>
                {`${data.current.feelslike_c}℃`}
              </Text>
            </View>
          </View>
        </View>

        {/* hour of the day */}
        <ScrollView horizontal contentContainerStyle={{ gap: theme.units.md }} showsHorizontalScrollIndicator={false}>
          {data.forecast.forecastday[0].hour.map((item, index) => (
            <View key={index} style={{ alignItems: 'center' }}>
              <Text size={8} weight='md' color='sub'>
                {moment(item.time).format('h:mm')}
              </Text>
              <Image source={`https:${item.condition.icon}`} width='36px' height='36px' />
              <Text size={8} weight='md'>
                {`${item.temp_c}℃`}
              </Text>
            </View>
          ))}
        </ScrollView>
      </Div>

      {/* forecast */}
      <Div filled title='Forecasts'>
        <View>
          {data.forecast.forecastday.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: theme.units.sm }}>
              <View style={{ flex: 1 }}>
                <Text size={7}>{moment(item.date).calendar().replace('at 12:00 AM', moment().add(index, 'd').format('ll'))}</Text>
              </View>
              <View style={{ flex: 1 / 3 }}>
                <Text size={7}>{`${item.day.avgtemp_c}℃`}</Text>
              </View>
              <View>
                <Image source={`https:${item.day.condition.icon}`} width='24px' height='24px' />
              </View>
            </View>
          ))}
        </View>
      </Div>

      {/* sunrise sunset */}
      <Div filled title='astro'>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Icon icon={require('@/assets/icons/product/colorful/sunrise.png')} size={18} />
          <Text size={8} t='capitalize'>
            sunrise
          </Text>
          <Text size={8} weight='md'>
            {data.forecast.forecastday[0].astro.sunrise}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Icon icon={require('@/assets/icons/product/colorful/sunset.png')} size={18} />
          <Text size={8} t='capitalize'>
            sunset
          </Text>
          <Text size={8} weight='md'>
            {data.forecast.forecastday[0].astro.sunset}
          </Text>
        </View>
      </Div>
    </Container>
  )
}

const getClientSideQueries = {
  forcasts: (IP4) =>
    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=${variables.WEATHER_API_KEY}&q=${IP4}&days=7`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}


