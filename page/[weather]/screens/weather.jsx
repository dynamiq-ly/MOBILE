/*package*/

/* styles */

/* components */

/* utilities */
import { Container } from '@/shared'
import { Div, Image, Text } from '@/common'
import { variables } from '@/constant/variables'

/*mocks*/
import axios from 'axios'

export default () => {
  return (
    <Container safeArea={false}>
      <Div filled></Div>
      <Div filled title='Forecasts'></Div>
      <Div filled title='Sun'></Div>
    </Container>
  )
}

const getClientSideQueries = {
  // forcasts: () =>
  //   axios
  //     .get(`https://api.weatherapi.com/v1/forecast.json?key=${variables.WEATHER_API_KEY}&q=${}`)
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err)),
}
