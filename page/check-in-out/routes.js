/* components */
import { StackHeader } from '@/shared'

/* screens */
import { CheckInOut } from '@/page/check-in-out/screens'
import { Icon } from '@/components'

export const CheckInOutRoutesConfig = [
  (initial = {
    id: '[stack] stack-check-in-check-out',
    component: CheckInOut,
    option: {
      headerShown: true,
      headerTitle: 'Check In/Out',
      header: () => <StackHeader title='Check In/Out' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/menu-dark.png')} size={18} />} />,
    },
  }),
]
