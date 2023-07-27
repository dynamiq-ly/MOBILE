/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Restaurant } from '@/page/restaurant/screens'

export const RestaurantRoutesConfig = [
  (initial = {
    id: '[stack] stack-restaurant',
    component: Restaurant,
    option: {
      headerShown: true,
      headerTitle: 'Restaurant List',
      header: () => <StackHeader title='Restaurants List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/menu-dark.png')} size={18} />} />,
    },
  }),
]
