import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import { View as Gap } from 'react-native'
import Icon from 'react-native-remix-icon'
import {
  StyledCurrentTe,
  StyledWeatherContainer,
  WeatherScrollable,
  WeatherSmallCard,
  WeatherTable,
} from 'styles/weather.module'

export default function WeatherScreen() {
  return (
    <AreaView mode={'dark'}>
      <StyledWeatherContainer style={{ marginTop: 24 }}>
        <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name='ri-map-pin-line'
            style={{ marginRight: 5 }}
            color='#1d4ed8'
            size={21}
          />
          <Text
            content={'governorate of mallorca'}
            up={'cap'}
            size={18}
            color={'dominant'}
          />
        </Gap>

        <Text
          content={'Thur. 15 November 16h24'}
          up={'cap'}
          size={14}
          color={'gray'}
          style={{ marginTop: 5 }}
        />
        <StyledCurrentTe>
          <Gap style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Icon
              name='ri-sun-line'
              size={32}
              style={{ marginRight: 10 }}
              color={'orange'}
            />
            <Text content={'27°'} size={32} weight={600} />
          </Gap>
          <Gap>
            <Text content={'Sunny day'} color={'gray'} />
            <Text content={'27°/19°'} color={'gray'} />
          </Gap>
        </StyledCurrentTe>
        <WeatherScrollable horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(24)].map((_, key) => (
            <WeatherSmallCard key={key}>
              <Text
                up={'up'}
                color={'gray'}
                content={
                  hourTemp.time + key < 10
                    ? `0${hourTemp.time + key}:00h`
                    : `${hourTemp.time + key}:00h`
                }
                style={{ marginBottom: 10 }}
              />
              <Icon name={'ri-sun-line'} color={'orange'} />
              <Text
                size={16}
                weight={600}
                content={hourTemp.temperature + '°'}
                style={{ marginTop: 10 }}
              />
            </WeatherSmallCard>
          ))}
        </WeatherScrollable>
      </StyledWeatherContainer>
      <StyledWeatherContainer style={{ marginTop: 24, paddingTop: 24 }}>
        {dayWeather.map((el, key) => {
          return (
            <WeatherTable key={key}>
              <Gap style={{ width: '25%' }}>
                <Text content={el.day} up={'cap'} weight={600} />
              </Gap>
              <Text content={`${el.raunChance}%`} color={'dominant'} />
              <Text content={el.dayTemp} />
            </WeatherTable>
          )
        })}
      </StyledWeatherContainer>
      <StyledWeatherContainer
        style={{ marginTop: 24, paddingTop: 24, marginBottom: 24 }}
      >
        {sun_rise_set.map((el, key) => {
          return (
            <WeatherTable key={key}>
              <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  name={'ri-haze-line'}
                  style={{ marginRight: 12 }}
                  color={el.state === 'sunrise' ? 'orange' : 'red'}
                />
                <Text content={el.state} up={'cap'} weight={600} />
              </Gap>
              <Text content={el.time} color={'gray'} />
            </WeatherTable>
          )
        })}
      </StyledWeatherContainer>
    </AreaView>
  )
}

const hourTemp = { time: 0, temperature: 20 }

const dayWeather = [
  {
    day: 'today',
    raunChance: 1,
    dayTemp: '27°/19°',
  },
  {
    day: 'Monday',
    raunChance: 14,
    dayTemp: '27°/19°',
  },
  {
    day: 'Tuesday',
    raunChance: 9,
    dayTemp: '27°/19°',
  },
  {
    day: 'Wednesday',
    raunChance: 7,
    dayTemp: '27°/19°',
  },
  {
    day: 'Thursday',
    raunChance: 12,
    dayTemp: '27°/19°',
  },
  {
    day: 'Friday',
    raunChance: 10,
    dayTemp: '27°/19°',
  },
  {
    day: 'saturday',
    raunChance: 10,
    dayTemp: '27°/19°',
  },
]

const sun_rise_set = [
  {
    state: 'sunrise',
    time: '06:24H',
  },
  {
    state: 'sunset',
    time: '17:42H',
  },
]
