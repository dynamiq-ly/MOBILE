/* components */
import { StackHeader } from '@/shared'
import { Icon } from '@/components'

/* screens */
import { Weather } from '@/page/[weather]/screens'

export const NotificationsRoutesConfig = [
  (initial = {
    id: '[tab] stack-notifications',
    name: 'notifications',
    icon: 'notifications',
    component: Weather,
    option: {
      headerShown: true,
      headerTitle: 'Notifications',
      header: () => <StackHeader title='Notifications' background='container' />,
      tabBarIcon: ({ focused }) => <Icon icon={focused ? require('@/assets/icons/tab/bell-focused.png') : require('@/assets/icons/tab/bell.png')} size={20} />,
    },
  }),
]
