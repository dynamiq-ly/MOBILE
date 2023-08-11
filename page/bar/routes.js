/* componetns */
import { Icon } from '@/components'
import { StackHeader, OptionHeader } from '@/shared'

/* screens */
import { Bar, BarDetail, BarDetailMenu } from '@/page/bar/screens'

export const BarRoutesConfig = [
  (initial = {
    id: '[stack] stack-bar',
    component: Bar,
    option: {
      headerShown: true,
      headerTitle: 'Bar List',
      header: () => <StackHeader title='Bars List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (detail = {
    id: '[stack] stack-bar-detail',
    component: BarDetail,
    option: {
      headerShown: true,
      headerTitle: 'Bar Detail',
      header: () => <OptionHeader />,
    },
  }),
  (detailMenu = {
    id: '[stack] stack-bar-detail-menu',
    component: BarDetailMenu,
    option: {
      headerShown: true,
      headerTitle: 'Drinks Menu',
      header: () => <StackHeader title='Drinks Menu' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
