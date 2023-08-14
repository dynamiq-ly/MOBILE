/* components */
import { StackHeader } from '@/shared'
import { Icon } from '@/components'

/* screens */
import { Notification } from '@/page/[notification]/screens'

export const NotificationsRoutesConfig = [
  (initial = {
    id: '[tab] stack-notifications',
    name: 'notifications',
    icon: 'notifications',
    component: Notification,
    option: {
      headerShown: true,
      headerTitle: 'Notifications',
      header: () => <StackHeader title='Notifications' background='container' />,
      tabBarIcon: ({ focused }) => <Icon icon={focused ? require('@/assets/icons/tab/bell-focused.png') : require('@/assets/icons/tab/bell.png')} size={20} />,
    },
  }),
]
