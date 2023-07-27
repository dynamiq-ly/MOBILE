/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { SwimmingPool } from '@/page/swimming-pool/screens'

export const SwimmingPoolRoutesConfig = [
  (initial = {
    id: '[stack] stack-swimming-pool',
    component: SwimmingPool,
    option: {
      headerShown: true,
      headerTitle: 'Swimming Pool List',
      header: () => <StackHeader title='Swimming Pool List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
