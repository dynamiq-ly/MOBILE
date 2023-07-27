/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Shop } from '@/page/shops/screens'

export const ShopsRoutesConfig = [
  (initial = {
    id: '[stack] stack-shopping',
    component: Shop,
    option: {
      headerShown: true,
      headerTitle: 'Shopping List',
      header: () => <StackHeader title='Shopping List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
