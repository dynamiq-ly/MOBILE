/* components */
import { Icon } from '@/components'
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
      tabBarIcon: ({ focused }) => <Icon icon={focused ? require('@/assets/icons/tab/cloud-focused.png') : require('@/assets/icons/tab/cloud.png')} size={20} />,
    },
  }),
]
