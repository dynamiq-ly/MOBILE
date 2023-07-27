/* components */
import { StackHeader } from '@/shared'

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
    },
  }),
]
