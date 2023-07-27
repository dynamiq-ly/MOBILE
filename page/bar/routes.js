/* componetns */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Bar } from '@/page/bar/screens'

export const BarRoutesConfig = [
  (initial = {
    id: '[stack] stack-bar',
    component: Bar,
    option: {
      headerShown: true,
      headerTitle: 'Bar List',
      header: () => <StackHeader title='Bars List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/menu-dark.png')} size={18} />} />,
    },
  }),
]
