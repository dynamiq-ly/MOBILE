import styled from 'styled-components'

export const StyledWeatherContainer = styled.View`
  background: ${({ theme }) => theme.primary.accent_0};
  padding: 12px 21px;
  border-radius: 8px;
`

export const StyledCurrentTe = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0px;
`

export const WeatherScrollable = styled.ScrollView`
  background: ${({ theme }) => theme.primary.accent_0};
`

export const WeatherSmallCard = styled.View`
  padding: 8px 0px;
  margin-right: 16px;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary.accent_0};
`
export const WeatherTable = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
`
