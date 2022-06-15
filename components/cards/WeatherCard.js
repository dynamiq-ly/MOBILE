import Text from 'components/text/Text'
import { Text as RNText } from 'react-native'
import {
  ImageWeatherIcon,
  StyledWeatherBox,
  StyledWeatherCard,
} from 'styles/cards.module'
import { SafeAreaRowWrapperDetail } from '~/styles/detail.module'

export default function WeatherCard({
  temp_c,
  feels_like,
  weather_icon,
  weather_descriptions,
}) {
  return (
    <StyledWeatherCard>
      <Text
        content={'When you feel like taking a dip'}
        weight={600}
        size={18}
        up={'cap'}
      />
      <Text
        content={'check the weather for a good swimming pool session.'}
        color={'gray'}
        size={14}
        up={'cap'}
      />
      <SafeAreaRowWrapperDetail>
        <StyledWeatherBox>
          <ImageWeatherIcon source={{ uri: `http:${weather_icon}` }} />
          <RNText
            style={{
              fontSize: 14,
              fontWeight: '600',
              textTransform: 'capitalize',
            }}>
            {weather_descriptions}
          </RNText>
        </StyledWeatherBox>
        <StyledWeatherBox space={'end'}>
          <Text
            content={`${temp_c}°`}
            color={'dominant'}
            weight={700}
            size={48}
          />
          <RNText
            style={{
              fontSize: 14,
              fontWeight: '600',
              textTransform: 'capitalize',
            }}>{`feels like ${feels_like}°`}</RNText>
        </StyledWeatherBox>
      </SafeAreaRowWrapperDetail>
    </StyledWeatherCard>
  )
}
