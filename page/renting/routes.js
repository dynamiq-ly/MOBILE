/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Renting } from '@/page/renting/screens'

export const RentingRoutesConfig = [
  (initial = {
    id: '[stack] stack-renting',
    component: Renting,
    option: {
      headerShown: true,
      headerTitle: 'Renting List',
      header: () => <StackHeader title='Renting List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
