/* components */
import { Icon } from '@/components'
import { StackHeader, OptionHeader } from '@/shared'

/* screens */
import { Restaurant, RestaurantDetail } from '@/page/restaurant/screens'

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
  (detail = {
    id: '[stack] stack-restaurant-detail',
    component: RestaurantDetail,
    option: {
      headerShown: true,
      headerTitle: 'Restaurant Detail',
      header: () => <OptionHeader />,
    },
  }),
]
