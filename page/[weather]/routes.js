/* components */
import { StackHeader } from '@/shared'

/* screens */
import { Weather } from '@/page/[weather]/screens'

export const WeatherRoutesConfig = [
  (initial = {
    id: '[tab] stack-weather',
    name: 'weather',
    icon: 'cloud',
    component: Weather,
    option: {
      headerShown: true,
      headerTitle: 'Weather',
      header: () => <StackHeader title='Weather' background='container' />,
    },
  }),
]
