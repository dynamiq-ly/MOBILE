/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Help } from '@/page/help/screens'

export const HelpRoutesConfig = [
  (initial = {
    id: '[stack] stack-help',
    component: Help,
    option: {
      headerShown: true,
      headerTitle: 'Help',
      header: () => <StackHeader title='Help' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
