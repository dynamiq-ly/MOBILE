/* components */
import { Icon } from '@/components'
import { StackHeader, OptionHeader } from '@/shared'

/* screens */
import { Restaurant, RestaurantDetail, RestaurantDetailMenu, RestaurantDetailMenuList, RestaurantDetailMenuListDetail, RestaurantDetailMenuListDetailMenu } from '@/page/restaurant/screens'

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
      header: ({ route }) => <StackHeader title={`${route.params.name} Menu`} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (detailMenuList = {
    id: '[stack] stack-restaurant-detail-menu-list',
    component: RestaurantDetailMenuList,
    option: {
      headerShown: true,
      headerTitle: 'Restaurant Menu List',
      header: ({ route }) => <StackHeader title={`${route.params.type} Menu`} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (detailMenuListDetail = {
    id: '[stack] stack-restaurant-detail-menu-list-detail',
    component: RestaurantDetailMenuListDetail,
    option: {
      headerShown: true,
      headerTitle: 'Restaurant Menu List Detail',
      header: ({ route }) => <StackHeader title={`${route.params.name} Menu`} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (detailMenuListDetailMenu = {
    id: '[stack] stack-restaurant-detail-menu-list-detail-menu',
    component: RestaurantDetailMenuListDetailMenu,
    option: {
      headerShown: true,
      headerTitle: 'Restaurant Menu Food List Detail',
      header: ({ route }) => <StackHeader title={`${route.params.name}`} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
