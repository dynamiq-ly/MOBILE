/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Setting } from '@/page/setting/screens'

export const SettingsRoutesConfig = [
  (initial = {
    id: '[stack] stack-settings',
    component: Setting,
    option: {
      headerShown: true,
      headerTitle: 'Settings',
      header: () => <StackHeader title='Settings' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
