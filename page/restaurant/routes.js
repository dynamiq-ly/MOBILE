/* components */
import { Icon } from '@/components'
import { StackHeader, OptionHeader } from '@/shared'

/* screens */
import { Restaurant, RestaurantDetail, RestaurantDetailMenu } from '@/page/restaurant/screens'

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
  (detailMenu = {
    id: '[stack] stack-restaurant-detail-menu',
    component: RestaurantDetailMenu,
    option: {
      headerShown: true,
      headerTitle: 'Restaurant Menu',
      header: ({ route }) => <StackHeader title={`${route.params.name} Menu` || 'Drinks Menu'} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
